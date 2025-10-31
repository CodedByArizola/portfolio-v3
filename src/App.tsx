import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import BackgroundImage from "./components/BackgroundImage";
import MobileNavigationMenu from "./components/MobileNavigationMenu";

import Home from "./pages/Home";
import Error from "./pages/Error";

export default () => {
    const [showMobileNavMenu, setMobileNavMenuVisibility] = useState(false);

    return (
        <Router>
            <BackgroundImage>
                {showMobileNavMenu && <MobileNavigationMenu setMobileNavMenuVisibility={setMobileNavMenuVisibility} />}

                <Box sx={{ height: '100vh', overflowX: 'hidden', overflowY: 'scroll' }}>
                    <Navbar setMobileNavMenuVisibility={setMobileNavMenuVisibility} />

                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/home' element={<Home />}/>
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Box>
            </BackgroundImage>
        </Router>
    )
}
