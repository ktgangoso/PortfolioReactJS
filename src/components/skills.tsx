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
    { src: '/skills/network.jpg', title: 'Network Troubleshooting' },
    { src: '/skills/prtg.jpg', title: 'PRTG Monitoring' },
    { src: '/skills/zabbix.png', title: 'Zabbix' },
    { src: '/skills/msoffice.jpg', title: 'MS Office' },
];

function Skills() {
    return (
        <div id='skills'>
            <Box sx={{ padding: '1rem', minHeight: "100vh", marginTop: { xs: "2rem", md: "2rem" } }}>
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
                        gridTemplateColumns: {
                            xs: '1fr 1fr', // 2 columns on extra small (mobile)
                            sm: '1fr 1fr', // keep 2 columns on small
                            md: 'repeat(4, 1fr)', // 4 columns on medium and up
                        },
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
                                sx={{ width: 50, height: 50, objectFit: 'contain', margin: '0 auto', mb: 1 }}
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