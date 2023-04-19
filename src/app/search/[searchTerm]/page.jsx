import React from 'react';
import Results from "@/components/Results";

async function getSearchResult(term){
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${term}&language=en-US&include_adult=false`
      );
    
      if (!res.ok) {
        throw new Error("Error fetching search data");
      }
    
      const data = await res.json();
      
      return data.results;
}

export default async function SearchPage({params}) {
    const searchTerm = params.searchTerm;
    const results = await getSearchResult(searchTerm) ;



  return (
    <div>
    {results && results.length === 0 && (
      <h1 className="text-center pt-6">No results found</h1>
    )}

    {results && <Results results={results} />}
  </div>
  )
}
