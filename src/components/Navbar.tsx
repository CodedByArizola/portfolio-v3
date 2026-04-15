import { AppBar, Container, Toolbar, Box, IconButton, Button, Slide } from "@mui/material";
import { pages } from "../data/config";
import MenuIcon from "@mui/icons-material/Menu";

export default ({ setMobileNavMenuVisibility }: { setMobileNavMenuVisibility: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <AppBar sx={{ py: 2, boxShadow: 'none', bgcolor: 'none', background: 'none' }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* DESKTOP / LARGE MONITORS */}
                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: "none", md: "flex" },
                        justifyContent: 'center',
                        position: 'fixed',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '100%',
                        zIndex: 1000,
                        bgcolor: 'rgba(0, 0, 0, .3)'
                    }}>
                        <Slide direction="down" in timeout={650}>
                            <div>
                                {pages.map(page => (
                                    <Button
                                        href={`#${page.toLowerCase()}`}
                                        key={page}
                                        aria-label={page}
                                        sx={{
                                            '&:hover': {
                                                color: 'var(--main_color2_brighter)'
                                            },
                                            ml: 2,
                                            fontFamily: 'purista-web',
                                            fontSize: 19,
                                            textTransform: 'none',
                                            color: "white"
                                        }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </div>
                        </Slide>
                    </Box>

                    {/* MOBILE / SMALL MONITORS */}
                    <Box sx={{ width: '93%', display: { xs: "flex", md: "none" }, position: 'fixed', justifyContent: 'flex-end' }}>
                        <Slide direction="down" in timeout={650}>
                            <div style={{ zIndex: 99999 }}>
                                <IconButton
                                    size="large"
                                    aria-label="navigation menu"
                                    aria-haspopup="true"
                                    onClick={() => setMobileNavMenuVisibility(true)}
                                    sx={{ bgcolor: 'rgba(0, 0, 0, .3)' }}
                                >
                                    <MenuIcon sx={{ fontSize: 35, color: 'var(--main_color2)' }} />
                                </IconButton>
                            </div>
                        </Slide>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
