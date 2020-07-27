import React from 'react';
import './App.css';
import Search from './Search'
import List from './artists.json'
import Artist from './Artist'

const mylist = List.Reggae;

function App() {
  const [value, setSearchValue] = React.useState("");
  let new_list = mylist.filter(elem => elem.toLowerCase().includes(value.toLowerCase()));
  
  return (
    <div className="App">
      <header>
        React Search Engine
      </header>
      <Search onTextChange={setSearchValue}/>
      <Artist mylist={new_list}/>
    </div>
  );
}

export default App;