import { Box, Container, Typography, Divider, Fade } from "@mui/material";
import { useState } from "react";
import { experienceEntries } from "./data/entries";
import { sectionIconStyle } from "../../styles/styles";

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ReactVisibilitySensor from "react-visibility-sensor";
import Entry from "./components/Entry";

export default () => {
    const [showContainer, setContainerVisibility] = useState(false);

    // RETURN ELEMENT
    return (
        <Box id="experience" component="section">
            <ReactVisibilitySensor partialVisibility onChange={(isVisible: boolean) => setContainerVisibility(isVisible)}>
                <Fade in={showContainer} timeout={1000}>
                    <Container maxWidth="xl" sx={{ minHeight: '99vh', py: 5 }}>
                        <Typography variant="h4" fontFamily="purista-web" color="white" sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <BusinessCenterIcon sx={sectionIconStyle} /> Experience
                        </Typography>

                        <Divider sx={{ my: 3 }} />

                        <Box sx={{ display: 'flex', p: 2 }}>
                            {/* DESKTOP / LARGE MONITORS */}
                            <Box sx={{ width: '100%', display: { xs: "none", md: "flex" }, flexDirection: 'column' }}>
                                {experienceEntries.map((entry, index) => (<Entry key={index} data={entry} />))}
                            </Box>

                            {/* MOBILE / SMALL MONITORS */}
                            <Box sx={{ width: '100%', display: { xs: "block", md: "none" }, flexDirection: 'column' }}>
                                {experienceEntries.map((entry, index) => (<Entry key={index} data={entry} />))}
                            </Box>
                        </Box>
                    </Container>
                </Fade>
            </ReactVisibilitySensor>
        </Box>
    )
}
