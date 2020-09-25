import React from 'react'
import './Header.css'
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import SearchIcon from '@material-ui/icons/Search';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

function Header() {
    return (
        <div className="header">
            <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <HomeIcon />
                    <p>HOME</p>
                </div>
                <div className="header__icon">
                    <FlashOnIcon />
                    <p>TRENDING</p>
                </div>
                <div className="header__icon">
                    <LiveTvIcon />
                    <p>VERIFIED</p>
                </div>
                <div className="header__icon">
                    <VideoLibraryIcon />
                    <p>COLLECTIONS</p>
                </div>
                <div className="header__icon">
                    <SearchIcon />
                    <p>SEARCH</p>
                </div>
                <div className="header__icon">
                    <PermIdentityIcon />
                    <p>ACCOUNT</p>
                </div>
                
                
                
                
                
               
            </div>
            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="hulu-logo" />
            
        </div>
    )
}

export default Header
