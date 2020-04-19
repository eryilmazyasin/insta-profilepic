import React, { useState } from 'react';
import User from './User';
import './App.css';
import axios from 'axios';

 function App() {
  const [value, setValue] = useState('');
  const [instagram, setInstagram] = useState('');


  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(
     `https://www.instagram.com/${value}/?__a=1&fbclid=IwAR3B5_HaB65jOlr_ixE6C0g_7DdUo0BspGxVsQYULAn1vhXHWqogeDsC5GU`
    )
    .then((result) => {
      setInstagram(result.data.graphql.user)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="app">
     <div className="form-wrapper">
        <form  className="form-class" onSubmit={handleSubmit}>
          <input type="text" value={value} onChange={handleChange} className="text-input" placeholder="Instagram kişisi"/>
          <input type="submit" value="Görüntüle" className="buttonsubmit" />
        </form>
      </div>
      <User instagram={instagram}></User>

    </div>
  );
}

export default App;




