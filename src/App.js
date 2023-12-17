import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

useEffect(() =>{
  fetch("https://newsapi.org/v2/everything?q=india&from=2023-12-11&apiKey=87d13c09ed4a49ea8558575dda12f456")
  .then((Response)=>Response.json()  )
  .then((data)=>{
    console.log (data);
  }  )
  .catch((err) =>{
    console.log(err)
  } )

},[])

  return (
    <div>
      <h1>Quick News</h1>
    </div>
  );
}

export default App;
