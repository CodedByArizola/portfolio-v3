import { Box } from "@mui/material";

export default ({ name }: { name: string; }) => {
    return (
        <Box
            sx={{
                py: 1,
                px: 2,
                mr: 1,
                fontFamily: 'purista-web',
                fontSize: 15,
                color: 'var(--main_color2)',
                border: 1,
                borderRadius: 10,
                borderColor: 'var(--main_color2)'
            }}
        >
            {name}
        </Box>
    )
}
