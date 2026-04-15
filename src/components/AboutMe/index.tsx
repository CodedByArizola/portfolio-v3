import { Box, Container, Typography, Divider } from "@mui/material";
import { sectionIconStyle } from "../../styles/styles";
import DataAboutMyself from './data/index';
import PersonIcon from '@mui/icons-material/Person';
import Headshot from './../../assets/pro_pic.webp';

export default () => {
    return (
        <Box id="about" component="section">
            <Container maxWidth="xl" sx={{ minHeight: '99vh', py: 13 }}>
                <Typography variant="h4" fontFamily="purista-web" color="white" sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <PersonIcon sx={sectionIconStyle} /> About Me
                </Typography>

                <Divider sx={{ my: 3 }} />

                {/* DESKTOP / LARGE MONITORS */}
                <Box sx={{ width: '100%', display: { xs: "none", md: "flex" }, flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <Box sx={{ width: 750, p: 3, bgcolor: 'var(--main_color4)', borderRadius: 2 }}>
                            {DataAboutMyself.Introduction.map((paragraph, index) => (
                                <Typography key={index} variant="body1" fontFamily="Open Sans" color="white" sx={{ mb: 2 }}>{paragraph}</Typography>
                            ))}
                        </Box>

                        <div>
                            <img className="headshot" src={Headshot} width="350" height="450" style={{ borderRadius: '1vh' }} draggable="false" alt="picture of myself" />
                        </div>
                    </div>
                </Box>

                {/* MOBILE / SMALL MONITORS */}
                <Box sx={{ width: '100%', display: { xs: "flex", md: "none" }, alignItems: 'center', flexDirection: 'column' }}>
                    <Box sx={{ mb: 2 }}>
                        <img className="headshot" src={Headshot} width="300" height="380" style={{ borderRadius: '1vh' }} draggable="false" alt="picture of myself" />
                    </Box>

                    <Box sx={{ p: 3, bgcolor: 'var(--main_color4)', borderRadius: 2 }}>
                        {DataAboutMyself.Introduction.map((paragraph, index) => (
                            <Typography key={index} variant="body1" fontFamily="Open Sans" color="white" sx={{ mb: 2 }}>{paragraph}</Typography>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
