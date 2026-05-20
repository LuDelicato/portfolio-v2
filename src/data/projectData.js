export const projectsData = [
  {
    id: "sql-layoffs",
    slug: "sql-layoffs-project",
    image: "/sql_image.webp",
    title: "MySQL Data Cleaning & EDA",
    github: "https://github.com/LuDelicato/mysql-data-cleaning-layoffs",
    steps: [
      {
        id: "overview",
        label: "Project Overview",
        isOverview: true,
        content:
          "My goal with this project was to perform a complete data cleaning process on a dataset containing world layoffs. I focused on making the data more usable for analysis by removing noise and fixing structural inconsistencies. I opted for MySQL to handle the ETL process, ensuring that every step was documented and reversible.",
      },
      {
        id: "staging",
        label: "1. Staging Table",
        problem:
          "Imported raw data should never be modified directly to prevent permanent loss or corruption during the cleaning phase.",
        thought:
          "I decided to create a staging table. This acts as a workspace where I can manipulate data freely while keeping the raw data intact as a backup.",
        resolution:
          "I used 'CREATE TABLE LIKE' to copy the schema and then populated it. This is the first step in my pipeline to ensure a professional and safe workflow.",
        query:
          "CREATE TABLE layoffs_staging LIKE layoffs;\nINSERT layoffs_staging SELECT * FROM layoffs;",
        before: [{ company: "Atlassian", status: "Raw Data" }],
        after: [{ company: "Atlassian", status: "Staging Ready" }],
      },
      {
        id: "duplicates",
        label: "2. Remove Duplicates",
        problem:
          "The dataset had several identical rows. Since there is no unique 'ID' column, I used ROW_NUMBER() to identify them. After the deletion, I still had an auxiliary 'row_num' column that wasn't needed.",
        thought:
          "Once the duplicates are gone, helper columns become noise. I need to purge the duplicates first and then immediately drop the row_num column to keep the dataset lean.",
        resolution:
          "I deleted all rows where row_num > 1 and then used ALTER TABLE to drop the column. This results in a unique set of records without unnecessary metadata.",
        query:
          "DELETE FROM layoffs_staging2 WHERE row_num > 1;\nALTER TABLE layoffs_staging2 DROP COLUMN row_num;",
        before: [
          { company: "Oda", location: "Oslo", row_num: 2, isDeleted: true },
        ],
        after: [{ company: "Oda", location: "Oslo" }],
      },
      {
        id: "standardize",
        label: "3. Standardizing Data",
        problem:
          "Issues like trailing spaces in company names, variations for 'Crypto', and periods at the end of country names (e.g., 'United States.').",
        thought:
          "Inconsistent strings break data aggregation. I need to unify these labels so that my analysis reflects the true totals for each category.",
        resolution:
          "I used TRIM() for spaces, updated all 'Crypto' variations to a single label, and fixed country names using TRIM(TRAILING) to ensure consistency.",
        query:
          "UPDATE layoffs_staging2 SET industry = 'Crypto' WHERE industry LIKE 'Crypto%';",
        before: [
          { company: " Casper ", industry: "CryptoCurrency", isModified: true },
        ],
        after: [{ company: "Casper", industry: "Crypto" }],
      },
      {
        id: "nulls",
        label: "4. Nulls & Blanks",
        problem:
          "Critical gaps in 'industry' and layoff metrics. Blank strings are problematic for filtering, and records with zero layoff data provide no insights.",
        thought:
          "My approach was to first convert blanks to NULLs and then use a Self-Join to recover missing data from other entries of the same company. Finally, I filtered out records that offered no actionable value.",
        resolution:
          "I performed a Self-Join to impute missing industries and removed rows where both 'total_laid_off' and 'percentage_laid_off' were NULL.",
        query:
          "UPDATE t1 JOIN t2 ON t1.company = t2.company\nSET t1.industry = t2.industry\nWHERE t1.industry IS NULL AND t2.industry IS NOT NULL;\n\nDELETE FROM layoffs_staging2 WHERE total_laid_off IS NULL AND percentage_laid_off IS NULL;",
        before: [
          { company: "Airbnb", industry: "NULL", isModified: true },
          { company: "Bally's", total_laid_off: "NULL", isDeleted: true },
        ],
        after: [{ company: "Airbnb", industry: "Travel" }],
      },
      {
        id: "eda_intro",
        label: "5. Exploratory Data Analysis",
        isOverview: true,
        content:
          "Now that the data is clean, I'm exploring it to find trends and patterns. My goal is to answer key business questions: Who laid off the most? Which industries were hit hardest? How did the layoffs progress over time?",
      },
      {
        id: "eda_trends",
        label: "6. Rolling Totals",
        problem:
          "How did the volume of layoffs progress month-over-month, and what is the cumulative total?",
        thought:
          "A simple monthly sum isn't enough to see the progression. I used a CTE to group by month and then a Window Function to calculate a rolling total over time.",
        resolution:
          "This analysis allows us to visualize the 'snowball effect' of layoffs, identifying exactly when the volume began to accelerate globally.",
        query:
          "WITH Rolling_Total AS (\n  SELECT SUBSTRING(`date`, 1, 7) as month, SUM(total_laid_off) as total_off\n  FROM layoffs_staging2 GROUP BY month\n)\nSELECT month, total_off, SUM(total_off) OVER(ORDER BY month) as rolling_total\nFROM Rolling_Total;",
        before: [{ month: "2022-11", total_off: 46000 }],
        after: [{ month: "2022-11", total_off: 46000, rolling_total: 160000 }],
      },
      {
        id: "eda_ranking",
        label: "7. Top 5 Rankings",
        problem:
          "Which companies were the top 5 'leaders' in layoffs for each year?",
        thought:
          "I need to rank companies within each year independently. Combining two CTEs with DENSE_RANK() allows me to create a top 5 list for 2020 through 2023.",
        resolution:
          "The ranking identifies a shift: while 2020 was dominated by COVID-impacted sectors like Travel, 2022 and 2023 show a clear trend in Big Tech restructuring.",
        query:
          "WITH company_year AS (\n  SELECT company, YEAR(`date`) as years, SUM(total_laid_off) as total_off\n  FROM layoffs_staging2 GROUP BY company, years\n), company_rank AS (\n  SELECT *, DENSE_RANK() OVER(PARTITION BY years ORDER BY total_off DESC) as ranking\n  FROM company_year WHERE years IS NOT NULL\n)\nSELECT * FROM company_rank WHERE ranking <= 5;",
        before: [
          { company: "Google", years: 2023, total_off: 12000 },
          { company: "Microsoft", years: 2023, total_off: 10000 },
          { company: "Ericsson", years: 2023, total_off: 8500 },
          { company: "Amazon", years: 2023, total_off: 8000 },
          { company: "Salesforce", years: 2023, total_off: 7000 },
        ],
        after: [
          { company: "Google", years: 2023, total_off: 12000, ranking: 1 },
          { company: "Microsoft", years: 2023, total_off: 10000, ranking: 2 },
          { company: "Ericsson", years: 2023, total_off: 8500, ranking: 3 },
          { company: "Amazon", years: 2023, total_off: 8000, ranking: 4 },
          { company: "Salesforce", years: 2023, total_off: 7000, ranking: 5 },
        ],
      },
      {
        id: "final",
        label: "Final Result",
        isOverview: true,
        content:
          "This project was a turning point for my SQL skills. My biggest struggle was understanding how CTEs are utilized and how to combine them effectively with Window Functions. It allowed me to consolidate key concepts like Inner and Self Joins that I hadn't used in a while. I also learned the immense utility of creating a safe environment for data manipulation and became significantly faster at writing efficient queries and interpreting raw data into business insights.",
      },
    ],
  },
];
