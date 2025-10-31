import { Box, Container, Typography, Link } from "@mui/material";
import { linkStyling } from "../styles/styles";

export default () => {
    return (
        <Box sx={{ py: 10 }}>
            <Container maxWidth="xl">
                <Typography variant="h3" fontFamily="purista-web" color="white" gutterBottom>
                    Error 404
                </Typography>

                <Typography variant="h6" fontFamily="purista-web" color="gray">
                    You lost pal? Click <Link href="/" sx={{ ...linkStyling, textDecoration: 'underline' }}>me</Link> to make your way home.
                </Typography>
            </Container>
        </Box>
    )
}
