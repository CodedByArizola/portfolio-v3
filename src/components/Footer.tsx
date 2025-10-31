import { Box, Container, Typography } from "@mui/material";

export default () => {
    return (
        <Box component="footer" sx={{ pb: 4, userSelect: 'none' }}>
            <Container maxWidth="xl">
                <Typography component="p" variant="body1" color="white" fontFamily="purista-web">
                    © Alexander Arizola {new Date().getFullYear()}
                </Typography>
            </Container>
        </Box>
    )
}
