import { Box, Divider, Typography } from "@mui/material"
import { EducationEntry } from "../interfaces"
import Chip from "./Chip"

export default ({ data, mobile }: { data: EducationEntry, mobile?: boolean }) => {
    const schoolCurricularsStyle = { p: 1.5, display: mobile ? 'inline' : 'flex', ...(!mobile ? { flexWrap: 'wrap', listStyle: 'none' } : {}) };
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

            <Box sx={schoolCurricularsStyle}>
                {data.relevantCourses.map(course => (<Chip key={course} name={course} mobile />))}
            </Box>

            {(data.awards && data.awards.length > 0) && (
                <>
                    <Divider sx={{ my: 2 }} />

                    <Typography sx={{ fontSize: 17, fontFamily: 'purista-web' }}>
                        Awards
                    </Typography>

                    <Box sx={schoolCurricularsStyle}>
                        {data.awards.map(award => (<Chip key={award} name={award} mobile />))}
                    </Box>
                </>
            )}
        </Box>
    )
}
