import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import HomeScreen from './components/HomeScreen/HomeScreen';


function App() {
  return (
    <div className="app">
      <HomeScreen />
      <Banner />
    </div>
  );
}

export default App;
