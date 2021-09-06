import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LInkedInIcon from '@material-ui/icons/LinkedIn'
import '../styles/Footer.css'
import Facebook from '@material-ui/icons/Facebook'

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon/> <TwitterIcon/><FacebookIcon/><LInkedInIcon/>
            </div>
            <p> &copy; 2021 pedrotechpizza.com</p>
        </div>
    )
}

export default Footer
