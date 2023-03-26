import React from 'react'
import '../Chat/index.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import {collection, query, where} from 'firebase/firestore'
import { useState } from 'react';

const Search = () => {

    const [username, setUsername] = useState("")
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(false)

    const handleSearch = () => {};

    const handleKey = e=>{
        e.code ==="Enter" && handleSearch();
    };

    return(
        <div className='search'>
            <div className='searchForm'>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input" label="Search for a Zoommate" variant="standard" fullWidth  onKeyDown={{handleKey}} onChange={e=>setUsername(e.target.value)}/>
            </Box>
            </div>
            <div className='userChat'>
                <img className='searchImg' src='https://media.licdn.com/dms/image/C5603AQHqrtHXE7ewZA/profile-displayphoto-shrink_200_200/0/1645509304205?e=1684972800&v=beta&t=SiDCEUwwLAG2guS7vl3zkfs7AEP3UH0og3CWNioPvU0'/>
                <div className='userChatInfo'>
                    <span className='userChatInfo'>Vyomesh Iyengar</span>
                </div>
            </div>

        </div>
    )
}

export default Search