import { Box, Typography } from "@mui/material"
import { ExperienceEntry } from "../interfaces"
import StraightIcon from '@mui/icons-material/Straight';

const Role = ({ title, duration, responsibilities }: { title: string; duration: string; responsibilities: string[]; }) => {
    return (<>
        <Typography sx={{ fontSize: 17, fontFamily: 'purista-web', color: 'var(--main_color2)' }}>
            {title}
        </Typography>

        <Typography sx={{ fontSize: 14, color: 'lightgray', fontFamily: 'purista-web' }}>
            {duration}
        </Typography>

        <Box component="ul" sx={{ fontSize: 16.5, fontFamily: 'purista-web', color: 'rgba(255, 255, 255, .9)' }}>
            {responsibilities?.map((responsibility, index) => (
                <Box key={index} component="li" sx={{ '::marker': { color: 'var(--main_color2)' }, mb: 1 }}>
                    {responsibility}
                </Box>
            ))}
        </Box>
    </>)
}

export default ({ data }: { data: ExperienceEntry }) => {
    return (
        <Box sx={{ mb: 2, p: 3, color: 'white', bgcolor: 'var(--main_color4)', borderRadius: 2, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ color: 'white', display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: 21, fontFamily: 'purista-web' }}>
                    {data.company}
                </Typography>

                <Role title={data.title} duration={data.duration} responsibilities={data.responsibilities} />
            </Box>

            {data.pastRoles?.map((pastRole, index) => (
                <div key={index}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <StraightIcon sx={{ mb: 2, fontSize: 33, color: 'var(--main_color2)' }} />
                    </div>

                    <Role title={pastRole.title} duration={pastRole.duration} responsibilities={pastRole.responsibilities} />
                </div>
            ))}
        </Box>
    )
}
