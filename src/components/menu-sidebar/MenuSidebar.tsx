import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import './MenuSidebar.scss';
import Logo from "../../assets/image2.png"
import { FaTelegram, FaInstagram, FaFacebook, FaTwitter, } from "react-icons/fa";


interface MenuSidebarProps {
    openMenuSidebar: boolean;
    setOpenMenuSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuSidebar: React.FC<MenuSidebarProps> = ({ openMenuSidebar, setOpenMenuSidebar }) => {

    const DrawerList = (
        <Box role="presentation" onClick={() => setOpenMenuSidebar(false)} sx={{ padding: '10px 20px', width: '300px' }}>
            <div className="sidebar-wrapper">
                
                <div className="sidebar-logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <ul className="sidebar-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Tours</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQ</a></li>

                </ul>

                <div className="sidebar__social-media">
                    <a className="social-link" href=""><FaTelegram /></a>
                    <a className="social-link" href=""><FaInstagram /></a>
                    <a className="social-link" href=""><FaFacebook /></a>
                    <a className="social-link" href=""><FaTwitter /></a>
                </div>
            </div>
        </Box>
    );

    return (
        <div>
            <Drawer open={openMenuSidebar} onClose={() => setOpenMenuSidebar(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
};

export default MenuSidebar;
