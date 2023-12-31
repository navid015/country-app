import React, {useState, useEffect} from "react";
import Countries from "./Component/Countries";
import "./App.css"
import Search from "./Component/Search";

function App() {

  const url = "https://restcountries.com/v3.1/all"
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const fetchData = async (url) => {
    
        setIsLoading(true);

        try {
          const response = await fetch (url);
          const data = await response.json();
          setCountries(data);
          setFilteredCountries(data);
          setIsLoading(false);
          setError(null);
          //console.log(countries);
        } catch (err) {
          setIsLoading(false);
          setError(err);
        }
  }

  useEffect(()=>{
    fetchData (url);
  }
    ,[])

  const handleRemove = (name) => {
    const filter = filteredCountries.filter((country)=>
      country.name.common !== name
    )

    setFilteredCountries(filter);
  }

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) =>{
        const countryName = country.name.common.toLowerCase();

        return countryName.startsWith(value)

    })

    setFilteredCountries(newCountries);
  };
  
    
  return (
    <div>
        
        <h1>Country App</h1>
        <Search onSearch={handleSearch}/>
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>{error.message}</h2>}
        {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemove}/>}

    </div>
  );
}

export default App;
