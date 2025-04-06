import React from 'react';
import { Typography, Box } from '@mui/material';


const images = [
    { src: '/skills/html.webp', title: 'HTML' },
    { src: '/skills/css.webp', title: 'CSS' },
    { src: '/skills/js.webp', title: 'JavaScript' },
    { src: '/skills/bootstrap.png', title: 'Bootstrap' },
    { src: '/skills/mui.webp', title: 'MUI' },
    { src: '/skills/mysql.png', title: 'MySQL' },
    { src: '/skills/php.png', title: 'PHP' },
    { src: '/skills/react.png', title: 'React.JS' },
];

function Skills() {
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
                        Skills
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: 10,
                        mt: 3,
                        textAlign: 'center',
                    }}
                >
                    {images.map(({ src, title }, index) => (
                        <Box key={index}>
                            <Box
                                component="img"
                                src={src}
                                alt={title}
                                sx={{ width: 80, height: 80, objectFit: 'contain', margin: '0 auto', mb: 1 }}
                            />
                            <Typography variant="body2" fontWeight={500}>
                                {title}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </div>
    )
}

export default Skills