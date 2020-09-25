import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './Nav.css';
function Nav({ activeTab, onActiveChange }) {
    const handleChange = (event, newValue) => {
        onActiveChange(newValue);
    };
    return (
        <AppBar position="static" className='CustomAppBar'>
            <Tabs value={activeTab} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Basic"  value='basic'/>
            <Tab label="3D Card" value='3d-card'/>
            <Tab label="Use Spring" value='use-spring'/>
            </Tabs>
      </AppBar>
    )
}

export default Nav
