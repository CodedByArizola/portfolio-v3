import { Box } from "@mui/material";

export default ({ name, mobile }: { name: string; mobile?: boolean; }) => {
    return (
        <Box
            sx={{
                '&:last-child': {
                    mr: 0
                },
                '&:hover': {
                    filter: 'drop-shadow(0 0 1em var(--main_color2))'
                },
                py: 1,
                px: 2,
                mr: 1,
                mb: mobile ? 1 : 0,
                fontFamily: 'purista-web',
                fontSize: 15,
                textAlign: 'center',
                color: 'var(--main_color2)',
                border: 1,
                borderRadius: 10,
                borderColor: 'var(--main_color2)',
                userSelect: 'none',
                transition: 'filter 300ms'
            }}
        >
            {name}
        </Box>
    )
}
