import { useEffect, useState } from 'react';
import Appportfolio from '../../Appportfolio';
import { Box, IconButton, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const images = [
    '/vinn/vinn1.png',
    '/vinn/vinn2.png',
    '/vinn/vinn3.png',
    '/vinn/vinn4.png',
];

function Vinn() {
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
                            <Typography sx={{ fontSize: "15px" }}><strong>Categories:</strong> Personal Project</Typography>
                            <Typography sx={{ fontSize: "15px" }}><strong>Client:</strong> Vinn Fitness</Typography>
                            <Typography sx={{ fontSize: "15px" }}><strong>Project date:</strong> March 2025</Typography>
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
                            <Typography sx={{ fontSize: "15px" }}><strong>Tools:</strong> HTML, CSS, React.js, TypeScript, MUI </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem" }}>Vinn Fitness</Typography>
                        <Typography>
                            Vinn Fitness is a dynamic fitness and workout program website designed to help individuals of all levels achieve
                            their health and fitness goals. Whether you're looking to lose weight, build muscle, or improve endurance,
                            Vinn Fitness offers personalized workout routines, expert training plans, and nutrition guidance to keep you
                            on track.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Vinn;
