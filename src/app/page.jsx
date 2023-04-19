const TMDB_API_KEY = process.env.TMDB_API_KEY;

import Results from '@/components/Results';

//chnaging react component to async possible
//only in nextjs 13 and above
//useSearchParams cannot be used as this is server side
export default async function Home({searchParams}) {

  const genre = searchParams.genre || 'fetchTrending';

  const URL = `https://api.themoviedb.org/3/${genre === 'fetchTrending' ? 'trending/all/week':'movie/top_rated'}?api_key=${TMDB_API_KEY}&language=en-US&page=1`;
  console.log('URL',URL);
  const res =await fetch(URL,{ next: { revalidate: 10000 }});
  if(!res.ok){
    throw new Error('Failed to fetch movie data!');
  }
  const data = await res.json();

  const results = data.results;
  console.log(results);

  return (
<div>
  <Results results={results}/>
</div>
  )
}
