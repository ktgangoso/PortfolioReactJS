import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const InfoItem = ({ label, value }: { label: string; value: string }) => (
    <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <ArrowForwardIosIcon sx={{ fontSize: 14, mr: 1, color: "#149ddd" }} />
        <strong>{label}:</strong>&nbsp;{value}
    </Typography>
);

const About = () => {
    return (
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
                    About
                </Typography>

                <Typography mt={3}>
                    Seek challenges in life to improve and develop my skills, enhance my knowledge, and use what I have learned.
                    Stepping outside one's comfort zone allows one to develop new abilities, hone current ones,
                    and gain a greater understanding of a range of topics and situations. This proactive strategy develops resilience,
                    adaptability, and inventiveness in addition to enhancing personal and professional qualities.
                </Typography>
            </Box>

            {/* Profile Section */}
            <Box mt={8}>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 3,
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'flex-start',
                    }}
                >
                    <Box
                        component="img"
                        src="/home/profile/my-profile-img.jpg"
                        alt="Profile"
                        sx={{ maxWidth: 200, borderRadius: 2 }}
                    />

                    <Box sx={{ flex: 1 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                justifyContent: 'space-around',
                                gap: 20,
                                mb: 2,
                            }}
                        >
                            <Box>
                                <InfoItem label="Website" value="" />
                                <InfoItem label="City" value="Taguig City" />
                            </Box>
                            <Box>
                                <InfoItem label="Email" value="kevin.gangoso@gmail.com" />
                                <InfoItem label="Phone No." value="09212223818" />
                            </Box>
                        </Box>

                        <Typography sx={{ padding: "2rem" }}>
                            I'm developing a website that enables business support, human connections, and progress by offering a forum for opportunity and cooperation.
                            In addition to helping business owners reach a wider audience, this initiative enables me to improve my web development abilities and expertise.
                            I hope to hone my knowledge of contemporary technology through this experience while developing a significant and influential online environment for both individuals and companies.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default About;
