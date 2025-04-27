import { Box, Typography, Link as MuiLink } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';


function Portfolio() {


    return (
        <div id='portfolio'>
            <Box sx={{ padding: '1rem', minHeight: "100vh", marginTop: { xs: "1rem", md: "5rem" } }}>
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
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexDirection: "column", marginTop: {xs: "1rem", md: "2rem"} }}>
        
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
                            component={RouterLink}
                            to="/portfoliopage/Grocereasedash"
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
                                    src="/dashboard/GrocerEaseStoreAdmin.png"
                                    alt="GrocerEase Store Dashboard"
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
                                    GrocerEase Store Dashboard
                                </Typography>
                            </Box>
                        </MuiLink>

                        {/* Personal Project */}
                        <MuiLink
                            component={RouterLink}
                            to="/portfoliopage/Vinn"
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
                                    src="/vinn/vinn1.png"
                                    alt="Vinn Fitness"
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
                                    Vinn Fitness
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