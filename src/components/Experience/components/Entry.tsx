import { Box, Typography } from "@mui/material"
import { ExperienceEntry } from "../interfaces"

export default ({ data }: { data: ExperienceEntry }) => {
    return (
        <Box sx={{ mb: 2, p: 3, color: 'white', bgcolor: 'var(--main_color4)', borderRadius: 2, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ color: 'white', display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: 21, fontFamily: 'purista-web' }}>
                    {data.company}
                </Typography>

                <Typography sx={{ fontSize: 17, fontFamily: 'purista-web', color: 'var(--main_color2)' }}>
                    {data.title}
                </Typography>

                <Typography sx={{ fontSize: 14, color: 'lightgray', fontFamily: 'purista-web' }}>
                    {data.duration}
                </Typography>

                <Box component="ul" sx={{ fontSize: 16.5, fontFamily: 'purista-web', color: 'rgba(255, 255, 255, .9)' }}>
                    {data.responsibilities.map((responsibility, index) => (
                        <Box key={index} component="li" sx={{ '::marker': { color: 'var(--main_color2)' }, mb: 1 }}>
                            {responsibility}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
