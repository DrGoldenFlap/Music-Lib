import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import './components/Table/Table.jsx'
import Table from './components/Table/Table.jsx';
import Header from './components/Header/Header';

function App() {

  const [allMusic, setAllMusic] = useState([{}]);
  const [searchTerm, setSearchTerm] = useState("");
  

  
  async function getData (){
    let music = await axios.get(' http://www.devcodecampmusiclibrary.com/api/music');
    console.log(music.data);
    setAllMusic(music.data)
  }

  useEffect(()=>{
    getData();
  },[]);

  function search(rows){
    const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row)=>
    columns.some(
      (column) => row[column].toString().toLowerCase().indexOf(searchTerm)>-1
    )
  );
    }
  
  return (
    <div className="App">
      <Header/>
      <input className='search' type="text" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>                  
      <Table allMusic={search(allMusic)}/>
    </div>
  );
}

export default App;
