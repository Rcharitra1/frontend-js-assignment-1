- Assignement 1
- Vantage API for stocks

- Usage
    - This front end appliction could be used to fetch details of symbols 
    - since this is a standard key only 6 resutls per 
    key is required
    - This program uses bootstrap for styling
    - This program uses parcel for bundling
    - Controllers 
        - Input controller controls and validates data
        - Stock controller validates and generates view

    - Views
        - One view for actual resutls
        - One for no results fetched
        - One for showing limits reached for 5 mins
    - Model
        - Stock model responsible for fetching and generating results object
        - Pushes onto objArray
    - Keys
        - API key for vantage api
    - Index.js
        - Bundles and runs the entire program
