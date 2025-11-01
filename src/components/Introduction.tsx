import { Box, Container, Fade, Typography } from "@mui/material";
import Socials from "./Socials";

export default ({ showNameAndTitle }: { showNameAndTitle: boolean; }) => {
    return (
        <Box id="home" component="section">
            <Container maxWidth="xl" sx={{ minHeight: '89vh', py: 15, userSelect: 'none' }}>
                <Fade in={true} timeout={1000}>
                    <Typography variant="h6" fontFamily="purista-web" color="white" sx={{ mb: 1 }}>
                        Hi there!
                    </Typography>
                </Fade>

                <Fade in={showNameAndTitle} timeout={2000}>
                    <div>
                        <Typography variant="h3" fontFamily="purista-web" fontWeight={600} color="white" sx={{ mb: 1 }}>
                            I'm Alex
                        </Typography>

                        <Typography variant="h5" fontFamily="purista-web" color="var(--main_color2)" sx={{ mb: 4 }}>
                            Software Engineer
                        </Typography>

                        <Typography variant="h6" fontFamily="purista-web" color="gray" sx={{ mb: 4 }}>
                            A guy just living in a world where technology constantly evolves.
                        </Typography>

                        <Socials />
                    </div>
                </Fade>
            </Container>
        </Box>
    )
}
