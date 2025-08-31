# User Stories

## **MVP (Weeks 1–3)**

* [ ] As a user, I want to **upload a CSV bank statement** so that I can quickly import my transactions.
* [ ] As a user, I want to **view a list of my transactions** so that I can see where my money is going.
* [ ] As a user, I want to **see my total expenses and balance** so that I can understand my current financial status.
* [ ] As a user, I want to **categorize transactions manually** so that I can keep my data organized.
* [ ] As a user, I want to **save my data locally** so that I don’t lose it after refreshing the page.

## **Enhanced Features (Weeks 4–6)**

* [ ] As a user, I want to **automatically categorize transactions by keywords** so that I don’t have to manually label each one.
* [ ] As a user, I want to **view expense breakdown charts** so that I can visually understand my spending habits.
* [ ] As a user, I want to **filter and search transactions** so that I can find specific entries easily.
* [ ] As a user, I want to **track income vs. expenses** so that I can see my net savings for the month.
* [ ] As a user, I want to **export my cleaned data as CSV or JSON** so that I can back it up or analyze it elsewhere.

## **Advanced Features (Weeks 7–10)**

* [ ] As a user, I want to **create budgets by category** so that I can control my spending.
* [ ] As a user, I want to **see recurring transactions detected automatically** so that I can monitor subscriptions and regular bills.
* [ ] As a user, I want to **sync my data across devices** so that I can access it anywhere.
* [ ] As a user, I want to **receive insights or alerts** when I overspend in a category.
* [ ] As a user, I want to **forecast future balances** so that I can plan ahead.

# Acceptance Criteria

### **Upload and Parse CSV (MVP)**

**Given** the user has a valid `.csv` bank statement
**When** they upload the file
**Then** the app should parse the data and display transactions in a list
**And** notify the user if the file format is incorrect

### **Manual Categorization (MVP)**

**Given** the user is viewing their transactions
**When** they edit the category of a transaction
**Then** the app should update the category instantly
**And** save the change locally for persistence

### **Automatic Categorization (Enhanced)**

**Given** the user uploads a `.csv` file
**When** the app parses transactions
**Then** it should auto-assign categories based on keyword matching
**And** allow the user to override any incorrect categorization

### **Expense Breakdown Chart (Enhanced)**

**Given** there are categorized transactions
**When** the user opens the “Charts” view
**Then** the app should display a pie or bar chart of spending per category
**And** update automatically if transactions are edited or added