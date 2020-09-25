import React from 'react';
import './App.css';
import Basic from './Basic/Basic';
import Nav from './Nav/Nav';
import Card from './useSpring/Card/Card';
import Chooser from './useSpring/Chooser/Chooser';

function App() {
  const [activeTab, setActiveTab] = React.useState('basic');
  return (
    <div className="App">
      <Nav activeTab={activeTab} onActiveChange={setActiveTab}/>
      <div className="App__body">
        { activeTab === 'basic' && <Basic />}
        { activeTab === '3d-card' && <Card />}
        { activeTab === 'use-spring' && <Chooser />}
      </div>
    </div>
  );
}

export default App;
