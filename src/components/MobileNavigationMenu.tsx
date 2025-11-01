import { Box, Container, Slide } from "@mui/material";
import { useState } from "react";
import { pages } from "../data/config";

import CloseIcon from '@mui/icons-material/Close';
import MobileNavigationMenuButton from "./MobileNavigationMenuButton";

export default ({ visibilitySetter }: { visibilitySetter: React.Dispatch<React.SetStateAction<boolean>>; }) => {
    const [shouldSlide, setSlideState] = useState(true);
    return (
        <Box sx={{ width: '100%', height: '100%', position: 'absolute', zIndex: 99999, bgcolor: 'rgba(0, 0, 0, .65)' }}>
            <Box display="flex" justifyContent="flex-end">
                <Slide in={shouldSlide} direction="left">
                    <Box
                        sx={{
                            height: '100%',
                            py: 4,
                            top: 0,
                            right: 0,
                            position: 'fixed',
                            bgcolor: 'var(--main_color1)',
                            borderLeft: '3.5px solid var(--main_color2)'
                        }}
                    >
                        <Container maxWidth="md">
                            <Box display="flex" justifyContent="flex-end" sx={{ mb: 3, mr: 2 }}>
                                <CloseIcon
                                    sx={{
                                        '&:hover': {
                                            color: 'var(--main_color2_brighter)'
                                        },
                                        fontSize: 45,
                                        cursor: 'pointer',
                                        color: 'var(--main_color2)',
                                        transition: '.23s'
                                    }}
                                    onClick={() => {
                                        setSlideState(false);
                                        setTimeout(() => visibilitySetter(false), 150);
                                    }}
                                />
                            </Box>

                            {/* NAV BUTTONS */}
                            {pages.map(page => (
                                <MobileNavigationMenuButton key={page} name={page} />
                            ))}
                        </Container>
                    </Box>
                </Slide>
            </Box>
        </Box>
    )
}
