import { Box, Container, Typography, Divider } from "@mui/material";
import { sectionIconStyle } from "../styles/styles";
import PersonIcon from '@mui/icons-material/Person';
import Headshot from './../assets/headshot.webp';

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
                            <Typography component="p" variant="body1" fontFamily="Open Sans" color="white" sx={{ mb: 2 }}>
                                I am a first-generation software engineer with experience in various programming languages, primarily specializing in front-end development.
                                I'm currently pursuing my Associate's Degree at Lake Washington Institute of Technology and have been studying computer science since high school.
                            </Typography>

                            <Typography component="p" variant="body1" fontFamily="Open Sans" color="white">
                                Alongside my academic journey, I have been building my career since 2019 through freelance projects, delivering tailored solutions across diverse areas while leading teams of both senior and junior developers.
                                Through this work, I've developed expertise in fostering collaboration via code reviews, mentoring, and knowledge-sharing, while driving technical excellence in architecture, testing, and implementation. I am continuing to expand my skills through formal studies and plan to advance into a bachelor’s program, combining practical experience with academic growth.
                            </Typography>
                        </Box>

                        <Box>
                            <img className="headshot" src={Headshot} width="300" height="300" style={{ borderRadius: '100%' }} alt="picture of myself" />
                        </Box>
                    </div>
                </Box>

                {/* MOBILE / SMALL MONITORS */}
                <Box sx={{ width: '100%', display: { xs: "flex", md: "none" }, alignItems: 'center', flexDirection: 'column' }}>
                    <Box sx={{ mb: 2 }}>
                        <img className="headshot" src={Headshot} width="300" height="300" style={{ borderRadius: '100%' }} alt="picture of myself" />
                    </Box>

                    <Box sx={{ p: 3, bgcolor: 'var(--main_color4)', borderRadius: 2 }}>
                        <Typography component="p" variant="body1" fontFamily="Open Sans" color="white" sx={{ mb: 2 }}>
                            I am a first-generation software engineer with experience in various programming languages, primarily specializing in front-end development.
                            I'm currently pursuing my Associate's Degree at Lake Washington Institute of Technology and have been studying computer science since high school.
                        </Typography>

                        <Typography component="p" variant="body1" fontFamily="Open Sans" color="white">
                            Alongside my academic journey, I have been building my career since 2019 through freelance projects, delivering tailored solutions across diverse areas while leading teams of both senior and junior developers.
                            Through this work, I've developed expertise in fostering collaboration via code reviews, mentoring, and knowledge-sharing, while driving technical excellence in architecture, testing, and implementation. I am continuing to expand my skills through formal studies and plan to advance into a bachelor’s program, combining practical experience with academic growth.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
