import { Box, Container, Typography, Divider, Fade } from "@mui/material";
import { useState } from "react";
import { educationEntries } from "./data/entries";

import SchoolIcon from '@mui/icons-material/School';
import ReactVisibilitySensor from "react-visibility-sensor";
import Entry from "./components/Entry";

export default () => {
    const [showContainer, setContainerVisibility] = useState(false);

    // RETURN ELEMENT
    return (
        <Box id="education" component="section">
            <ReactVisibilitySensor partialVisibility onChange={(isVisible: boolean) => setContainerVisibility(isVisible)}>
                <Fade in={showContainer} timeout={1000}>
                    <Container maxWidth="xl" sx={{ minHeight: '99vh', py: 5 }}>
                        <Typography variant="h4" fontFamily="purista-web" color="white" sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <SchoolIcon
                                sx={{
                                    '&:hover': {
                                        color: 'var(--main_color2_brighter)'
                                    },
                                    transition: '.2s',
                                    fontSize: 33,
                                    mr: 1.5,
                                    color: 'var(--main_color2)'
                                }}
                            /> Education
                        </Typography>

                        <Divider sx={{ my: 3 }} />

                        <Box sx={{ display: 'flex', p: 2 }}>
                            {/* DESKTOP / LARGE MONITORS */}
                            <Box sx={{ width: '100%', display: { xs: "none", md: "flex" }, flexDirection: 'column' }}>
                                {educationEntries.map(entry => (<Entry data={entry} />))}
                            </Box>

                            {/* MOBILE / SMALL MONITORS */}
                            <Box sx={{ width: '100%', display: { xs: "block", md: "none" }, flexDirection: 'column' }}>
                                It's Broken Lol
                            </Box>
                        </Box>
                    </Container>
                </Fade>
            </ReactVisibilitySensor>
        </Box>
    )
}
