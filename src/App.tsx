import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import BackgroundImageFile from './assets/background.webp';

import Navbar from "./components/Navbar";
import MobileNavigationMenu from "./components/MobileNavigationMenu";

import Home from "./pages/Home";
import Error from "./pages/Error";

export default () => {
    const [showMobileNavMenu, setMobileNavMenuVisibility] = useState(false);

    return (
        <Router>
            <Box 
                sx={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    overflow: 'hidden',
                    backgroundImage: `url(${BackgroundImageFile})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {showMobileNavMenu && <MobileNavigationMenu visibilitySetter={setMobileNavMenuVisibility} />}

                <Box sx={{ height: '100vh', overflowX: 'hidden', overflowY: 'scroll' }}>
                    <Navbar setMobileNavMenuVisibility={setMobileNavMenuVisibility} />

                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/home' element={<Home />}/>
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Box>
            </Box>
        </Router>
    )
}
