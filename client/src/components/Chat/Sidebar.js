import React from 'react'
import '../Chat/index.css';
import Search from '../Chat/Search'
import ChatList from "../Chat/ChatList"

const Sidebar = () => {
    return(
        <div className="sidebar"> 
        <Search/>
        <ChatList/>
        </div>
    )
}

export default Sidebar