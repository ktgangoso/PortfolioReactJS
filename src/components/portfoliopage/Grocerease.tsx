import React, { useEffect, useState } from 'react';
import Appportfolio from '../../Appportfolio';
import { Box, IconButton, Typography, Divider } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const images = [
    '/web1/GrocerEaseStore.png',
    '/web1/website2.png',
    '/web1/website3.png',
    '/web1/website4.png',
];

function Grocerease() {
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

                <Box sx={{ width: {xs: "100%", md: "50%"}, display: "flex", justifyContent: "space-between", flexDirection: "column", gap: "2rem" }}>
                    <Box sx={{
                        padding: 2,
                        borderRadius: '8px',
                        boxShadow: '2px 3px 3px 5px rgba(0, 0, 0, 0.1)',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        flexDirection: "column",
                        gap: ".5rem"
                    }}>
                        <Typography sx={{ fontSize: "2rem", fontWeight: "700" }}>Project information</Typography>
                        <Typography><strong>Categories:</strong> Website</Typography>
                        <Typography><strong>Client:</strong> Grocer Ease Store</Typography>
                        <Typography><strong>Project date:</strong> 2023</Typography>
                        <Typography><strong>Project URL:</strong> </Typography>
                        <Typography><strong>Tools:</strong> HTML, CSS, JavaScript, PHP, MySQL, Bootstrap</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: "2rem", fontWeight: "700" }}>Grocer Ease Store</Typography>
                        <Typography>
                            GrocerEase Store is a modern e-commerce website that allows customers to browse and purchase high-quality
                            products online with ease. It offers a seamless shopping experience, ensuring convenience and reliability
                            for every customer. With a user-friendly interface and a wide selection of products, GrocerEase Store is
                            designed to make online grocery shopping effortless and enjoyable.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Grocerease;
