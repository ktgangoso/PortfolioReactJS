import React from 'react'
import { Box, Typography } from '@mui/material'

function Resume() {
    return (
        <div>
            <Box sx={{ padding: '1rem', height: "100vh", marginTop: { xs: "2rem", md: "5rem" } }}>
                {/* Heading Section */}
                <Box mb={3}>
                    <Typography
                        sx={{
                            fontSize: '2rem',
                            fontWeight: 700,
                            position: 'relative',
                            display: 'inline-block',
                            pb: 1,
                            color: "#757d87",
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                height: '0.2rem',
                                width: '50%',
                                backgroundColor: '#149ddd',
                            },
                        }}
                    >
                        Resume
                    </Typography>

                    <Typography mt={3}>
                        Seek challenges in life to improve and develop my skills, enhance my knowledge, and use what I have learned.
                        Stepping outside one's comfort zone allows one to develop new abilities, hone current ones,
                        and gain a greater understanding of a range of topics and situations. This proactive strategy develops resilience,
                        adaptability, and inventiveness in addition to enhancing personal and professional qualities.
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default Resume