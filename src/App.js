import './App.css';
import { useEffect, useState } from 'react';
import News from './news';

function App() {

  let [articles, setArticles]=useState([]);
  let [category,setCategory]= useState([`india`]);

useEffect(() =>{
  fetch("https://newsapi.org/v2/everything?q=${category}&from=2023-12-10&apiKey=87d13c09ed4a49ea8558575dda12f456")
  .then((Response)=>Response.json()  )
  .then((data)=>{
    setArticles (data.articles);
  
  }  )
  .catch((err) =>{
    console.log(err)
  } )

},[category])

  return (
    <div>
      <header className='header'>

      <h1>Quick News </h1>
      <input type="text" onChange={(event)=>{setCategory(event.target.value)}} placeholder='Search News' />
      </header>

      <section className='listofarticles'>
        {
          articles.map( (articles)=>{
            return(
              < News articles={articles}/>

            )
          })
        }
      
      </section>
      
    </div>
  );
}

export default App;
