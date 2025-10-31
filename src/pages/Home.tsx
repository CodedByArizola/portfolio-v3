import { Box } from "@mui/material";
import { useState, useEffect } from "react";

import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Education from "../components/Education";

import Introduction from "../components/Introduction";
import Footer from "../components/Footer";

export default () => {
    const [showNameAndTitle, setNameAndTitleVisibility] = useState(false);

    // SHOW NAME AND TITLE AFTER A BRIEF MOMENT
    useEffect(() => {
        setTimeout(() => setNameAndTitleVisibility(true), 1400);
    }, []);

    // RETURN ELEMENT
    return (
        <>
            <Box component="main">
                <Introduction showNameAndTitle={showNameAndTitle} />
                <AboutMe />
                <Education />
                <Projects />
                <Contact />
            </Box>

            <Footer />
        </>
    )
}
