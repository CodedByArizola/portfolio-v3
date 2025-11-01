import { Box, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default ({ name }: { name: string; }) => {
    return (
        <Box sx={{ px: 3, py: 1.55 }}>
            <Typography
                component="a"
                href={`#${name.toLowerCase()}`}
                variant="h5"
                aria-label={name}
                sx={{
                    '&:hover': {
                        color: 'var(--main_color2_brighter)'
                    },
                    fontFamily: 'purista-web',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    cursor: 'pointer',
                    transition: '.23s',
                    textDecoration: 'none',
                    fontStyle: 'italic'
                }}
            >
                <PlayArrowIcon sx={{ fontSize: 21, mr: 2, color: 'var(--main_color2)' }} /> {name}
            </Typography>
        </Box>
    )
}
