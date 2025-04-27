import React, { useEffect, useState } from 'react';
import Appportfolio from '../../Appportfolio';
import { Box, IconButton, Typography, Button } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const images = [
    '/dashboard/GrocerEaseStoreAdmin.png',
    '/dashboard/admin2.png',
    '/dashboard/admin3.png',
    '/dashboard/admin4.png',
];

function Grocereasedash() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000); // every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Appportfolio />

            <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", md: "row" }, padding: "2rem", gap: "1rem" }}>
                <Box sx={{ width: '100%', mt: 4, position: 'relative', overflow: 'hidden' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            width: `${images.length * 100}%`,
                            transform: `translateX(-${currentSlide * (100 / images.length)}%)`,
                            transition: 'transform 0.6s ease-in-out'
                        }}
                    >
                        {images.map((src, index) => (
                            <Box key={index} sx={{ width: `${100 / images.length}%`, flexShrink: 0 }}>
                                <img
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'cover'
                                    }}
                                />
                            </Box>
                        ))}
                    </Box>

                    {/* Bullets */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        {images.map((_, index) => (
                            <IconButton
                                key={index}
                                size="small"
                                onClick={() => setCurrentSlide(index)}
                            >
                                <FiberManualRecordIcon
                                    fontSize="small"
                                    sx={{
                                        color: index === currentSlide ? '#1976d2' : '#ccc'
                                    }}
                                />
                            </IconButton>
                        ))}
                    </Box>
                </Box>

                <Box sx={{ width: { xs: "100%", md: "50%" }, display: "flex", justifyContent: "space-between", flexDirection: "column", gap: "2rem" }}>
                    <Box sx={{
                        padding: 2,
                        borderRadius: '8px',
                        boxShadow: '2px 3px 3px 5px rgba(0, 0, 0, 0.1)',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        flexDirection: "column",
                        gap: "1rem"
                    }}>
                        <Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>Project information</Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: "1rem" }}>
                            <Typography sx={{ fontSize: "15px" }}><strong>Categories:</strong> Website Dashboard</Typography>
                            <Typography sx={{ fontSize: "15px" }}><strong>Client:</strong> Grocer Ease Store Dashboard</Typography>
                            <Typography sx={{ fontSize: "15px" }}><strong>Project date:</strong> 2023</Typography>
                            <Typography sx={{ fontSize: "15px" }}><strong>Project URL:</strong>
                                <a
                                    href="https://yourprojectlink.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#1976d2", textDecoration: "none", cursor: "pointer", marginLeft: "5px" }}
                                >
                                    View
                                </a>
                            </Typography>
                            <Typography sx={{ fontSize: "15px" }}><strong>Tools:</strong> HTML, CSS, JavaScript, PHP, MySQL, Bootstrap</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1rem" }}>GrocerEase Store Dashboard</Typography>
                        <Typography>
                            GrocerEase Store Dashboard is designed to efficiently monitor income and manage product inventory, allowing seamless tracking
                            of stock levels. It enables users to check, update, and remove items while ensuring accurate availability status.
                            With its intuitive management system, businesses can optimize operations, reduce stock discrepancies, and improve
                            overall efficiency.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Grocereasedash;
