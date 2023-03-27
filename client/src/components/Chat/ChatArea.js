import React from 'react'
import '../Chat/index.css';
import Button from '@mui/material/Button';
import Messages from "../Chat/Messages";
import Input from "../Chat/Input";
import { ProfileDialog } from '../Matches';

const ChatArea = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // NEED TO PULL FROM DB
    const profile = {profileID: 1, name: "Andre Laroque", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" };
    
    // NEED TO PULL FROM DB
    const initialReviews = [
        { name: "Vyomesh Iyengar", photo: "https://media.licdn.com/dms/image/C5603AQHqrtHXE7ewZA/profile-displayphoto-shrink_800_800/0/1645509304205?e=1683158400&v=beta&t=Fiy4Lb2knxD6Ka-WsfsC5PJJH50YCfL1N_YGgTe7oF4", score: "5.0", review: "Amazing roommate, was very clean and always helped out with the dishes!" },
        { name: "Andre Larocque", photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk", score: "4.0", review: "Amazing roommate, was very clean and always helped out with the dishes! Amazing roommate, was very clean and always helped out with the dishes! Amazing roommate, was very clean and always helped out with the dishes! Amazing roommate, was very clean and always helped out with the dishes! Amazing roommate, was very clean and always helped out with the dishes! " },
        { name: "Keegan Fernandes", photo: "https://media.licdn.com/dms/image/D5603AQH2mcZBrbuEYQ/profile-displayphoto-shrink_100_100/0/1673411388008?e=1683158400&v=beta&t=9NrzIE8R3NYrVh7vK9B1G6PVQ-aSZVn7IpMGGIuIIPE", score: "5.0", review: "Sick!" },
        { name: "Harry Potter", photo: "https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914&q=70&fm=jpg", score: "3.5", review: "Very cool" },
        { name: "Hermione Granger", photo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hermione_Granger_poster.jpg/220px-Hermione_Granger_poster.jpg", score: "4.0", review: "Do better." }
    ]

    return (
        <div className="chatarea">
            <div className='chatInfo'>
                <span>Vyomesh Iyengar</span>
                <div className='chatbuttons'>
                    <Button variant="text">Write a Review</Button>
                    <Button variant="contained" onClick={handleClickOpen}>Go to Profile</Button>
                    <ProfileDialog
                        profile={profile}
                        initialReviews={initialReviews}
                        open={open}
                        onClose={handleClose}
                    />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default ChatArea