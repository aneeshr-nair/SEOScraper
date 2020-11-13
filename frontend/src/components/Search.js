import React, { useState, useEffect} from "react";

function Search() {
    const [keyword, setKeyword] = useState("");
    const [searchengine, setSearchengine] = useState('google');
    const [results, setResults] = useState({});

	const handleSubmit = (event) => {
        event.preventDefault();

        }

    /*
   async function fetchData() {
    const res = await fetch("https://swapi.co/api/planets/4/");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);
    
    */
    return (
        <div>
        <h1 className="title">Search App</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <input name="text" type="text" placeholder="Search" value={keyword} onChange={e => setKeyword(e.target.value)}/>
                <button className="searchButton">Search</button>
                </div>
               
                <div className="radio">
                <label>
                    <input type="radio" value="google" checked = {searchengine === 'Google'} onClick={() => setSearchengine('Google')} />
                    Google
                </label>
                <label>
                    <input type="radio" value="bing" checked = {searchengine === 'Bing'} onClick={() => setSearchengine('Bing')}/>
                    Bing
                </label>
                <label>
                    <input type="radio" value="duck" checked = {searchengine === 'Duck'} onClick={() => setSearchengine('Duck')}/>
                    Duck
                </label>
                 </div>   
                
            </form> 
            <div>
                keyword:{keyword}, Search Engine:{searchengine}
            </div>
        </div>
    )
}

export default Search

