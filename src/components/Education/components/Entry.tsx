import { Box, Divider, Typography } from "@mui/material"
import { EducationEntry } from "../interfaces"
import Chip from "./Chip"

export default ({ data }: { data: EducationEntry }) => {
    return (
        <Box sx={{ mb: 2, p: 3, color: 'white', bgcolor: 'var(--main_color4)', borderRadius: 2, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ color: 'white', display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: 21, fontFamily: 'purista-web' }}>
                    {data.name}
                </Typography>

                <Typography sx={{ fontSize: 17, fontFamily: 'purista-web' }}>
                    <span style={{ color: 'var(--main_color2)' }}>{data.degree}</span> in <span style={{ color: 'var(--main_color2)' }}>{data.major}</span>
                </Typography>

                <Typography sx={{ fontSize: 13, color: 'lightgray', fontFamily: 'purista-web' }}>
                    {data.duration}
                </Typography>

                <Divider sx={{ my: 2 }} />
            </Box>

            <Typography sx={{ fontSize: 17, fontFamily: 'purista-web' }}>
                Relevant Coursework
            </Typography>

            <Box sx={{ p: 1.5, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                {data.relevantCourses.map(course => (<Chip name={course} />))}
            </Box>

            {(data.awards && data.awards.length > 0) && (
                <>
                    <Divider sx={{ my: 2 }} />

                    <Typography sx={{ fontSize: 17, fontFamily: 'purista-web' }}>
                        Awards
                    </Typography>

                    <Box sx={{ p: 1.5, display: 'flex' }}>
                        {data.awards.map(award => (<Chip name={award} />))}
                    </Box>
                </>
            )}
        </Box>
    )
}
