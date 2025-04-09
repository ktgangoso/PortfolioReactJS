import * as React from 'react';
import { Box, Typography, Tabs, Tab, Link as MuiLink } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';


function Portfolio() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div id='portfolio'>
            <Box sx={{ padding: '1rem', minHeight: "100vh", marginTop: { xs: "0", md: "5rem" } }}>
                <Box>
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
                        Portfolio
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexDirection: "column" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        centered
                        TabIndicatorProps={{ style: { display: 'none' } }}
                        sx={{ borderBottom: 'none' }}
                    >
                        {["All", "Website", "Dashboard", "Personal Project"].map((label, index) => (
                            <Tab
                                key={index}
                                label={label}
                                sx={{
                                    textTransform: 'none',
                                    fontSize: "1rem",
                                    color: '#757d87',
                                    display: "flex", justifyContent: "center", alignItems: "center",
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        color: '#149ddd',
                                    },
                                    '&.Mui-selected': {
                                        color: '#149ddd',
                                    },
                                    '&.Mui-focusVisible': {
                                        outline: 'none',
                                    },
                                }}
                            />
                        ))}
                    </Tabs>

                    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "1rem", justifyContent: "space-between" }}>

                        {/* Web1 */}
                        <MuiLink
                            component={RouterLink}
                            to="/portfoliopage/Grocerease"
                            underline="none"
                            sx={{ display: 'inline-block' }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    overflow: 'hidden',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    '&:hover .image': {
                                        transform: 'scale(1.1)',
                                    },
                                    '&:hover .overlay': {
                                        background: 'rgba(0, 0, 0, 0.6)',
                                    },
                                    '&:hover .title': {
                                        opacity: 1,
                                    },
                                }}
                            >
                                {/* Image */}
                                <Box
                                    className="image"
                                    component="img"
                                    src="/web1/GrocerEaseStore.png"
                                    alt="GrocerEase Store"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease',
                                    }}
                                />

                                {/* Overlay */}
                                <Box
                                    className="overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'transparent',
                                        transition: 'background-color 0.3s ease',
                                    }}
                                />

                                {/* Title */}
                                <Typography
                                    className="title"
                                    variant="subtitle1"
                                    sx={{
                                        position: 'absolute',
                                        bottom: 10,
                                        left: 0,
                                        right: 0,
                                        textAlign: 'center',
                                        color: '#fff',
                                        fontWeight: 600,
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                    }}
                                >
                                    GrocerEase Store
                                </Typography>
                            </Box>
                        </MuiLink>


                        {/* Dashboard */}
                        <MuiLink
                            href="https://your-project-url.com"
                            underline="none"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ display: 'inline-block' }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    overflow: 'hidden',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    '&:hover .image': {
                                        transform: 'scale(1.1)',
                                    },
                                    '&:hover .overlay': {
                                        background: 'rgba(0, 0, 0, 0.6)',
                                    },
                                    '&:hover .title': {
                                        opacity: 1,
                                    },
                                }}
                            >
                                {/* Image */}
                                <Box
                                    className="image"
                                    component="img"
                                    src="/dashboard/GrocerEaseStoreAdmin.png"
                                    alt="GrocerEase Store"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease',
                                    }}
                                />

                                {/* Overlay */}
                                <Box
                                    className="overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'transparent',
                                        transition: 'background-color 0.3s ease',
                                    }}
                                />

                                {/* Title */}
                                <Typography
                                    className="title"
                                    variant="subtitle1"
                                    sx={{
                                        position: 'absolute',
                                        bottom: 10,
                                        left: 0,
                                        right: 0,
                                        textAlign: 'center',
                                        color: '#fff',
                                        fontWeight: 600,
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                    }}
                                >
                                    GrocerEase Store
                                </Typography>
                            </Box>
                        </MuiLink>

                        {/* Personal Project */}
                        <MuiLink
                            href="https://your-project-url.com"
                            underline="none"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ display: 'inline-block' }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    overflow: 'hidden',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    '&:hover .image': {
                                        transform: 'scale(1.1)',
                                    },
                                    '&:hover .overlay': {
                                        background: 'rgba(0, 0, 0, 0.6)',
                                    },
                                    '&:hover .title': {
                                        opacity: 1,
                                    },
                                }}
                            >
                                {/* Image */}
                                <Box
                                    className="image"
                                    component="img"
                                    src="/web1/GrocerEaseStore.png"
                                    alt="GrocerEase Store"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease',
                                    }}
                                />

                                {/* Overlay */}
                                <Box
                                    className="overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'transparent',
                                        transition: 'background-color 0.3s ease',
                                    }}
                                />

                                {/* Title */}
                                <Typography
                                    className="title"
                                    variant="subtitle1"
                                    sx={{
                                        position: 'absolute',
                                        bottom: 10,
                                        left: 0,
                                        right: 0,
                                        textAlign: 'center',
                                        color: '#fff',
                                        fontWeight: 600,
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                    }}
                                >
                                    GrocerEase Store
                                </Typography>
                            </Box>
                        </MuiLink>

                    </Box>

                </Box>
            </Box>
        </div>
    )
}

export default Portfolio