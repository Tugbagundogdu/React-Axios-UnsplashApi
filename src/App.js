import SearchHeader from './SearchHeader';
import './App.css';
import searchImages from './api'
import { useState } from 'react';
import Images from './components/Images';

function App() {

  const [images , setImages] = useState([])

  const handleSearch = async (term)=> {
    debugger;
    console.log(term);
   const result = await searchImages(term);
   setImages(result);
  }

  return (
    <div className="App">

      <SearchHeader search = {handleSearch} />
      <Images imageList = {images} />
     
    </div>
  );
}

export default App;
