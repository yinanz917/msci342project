import React from 'react'
import '../Chat/index.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import 'firebase/firestore';
import {collection, query, where} from 'firebase/firestore'
import { useState } from 'react';
import db from "../Firebase/firebase";
import firebase from "firebase/app";

const Search = () => {

    const [username, setUsername] = useState("")
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(false)

    const handleSearch = async () => {
        console.log('search')
        const q = db.collection("users").where("first", "==", username);
        try {
            const querySnapshot = await q.get();
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        } catch (err) {
            setErr(true);
        };
    };    

    const handleKey = (event) => {
        if (event.key === 'Enter') {
          handleSearch();
        }
      }
      
    return(
        <div className='search'>
            <div className='searchForm'>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input" label="Search for a Zoommate" variant="standard" fullWidth onKeyPress={handleKey} onChange={e=>setUsername(e.target.value)}/>
            </Box>
            </div>
            {err && <span>User not found!</span>}
            {user && <div className='userChat'>
                <img className='searchImg' src='https://images.unsplash.com/photo-1568495341369-1066472c7a27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'/>
                <div className='userChatInfo'>
                    <span className='userChatInfo'>{user.first} + {user.last}</span>
                </div>
            </div>}
        </div>
    )
}
export default Search;