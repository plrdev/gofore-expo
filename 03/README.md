## 03

Instead of static data, let's get the data from API

1. Add countries to a useState (countries), default value as empty array
2. Add useEffect, which will fetch list of countries:
   url: "https://restcountries.eu/rest/v2/all"
3. Set the response to countries variable with the hook method
4. Switch flatlist to use countries as datasource and remove static countryData
