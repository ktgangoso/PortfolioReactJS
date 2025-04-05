import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
    Typography,
    useMediaQuery,
} from '@mui/material';


function Home() {

    const typedEl = useRef(null); // ✅ Moved inside App

    useEffect(() => {
        const typed = new Typed(typedEl.current, {
            strings: ['Web Developer', 'Front End Developer', 'Web Designer', 'Fitness Coach'],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1500,
            loop: true,
        });

        return () => typed.destroy(); // ✅ Clean up properly
    }, []);

    return (
        <div>
            {/* Main Content */}
            <Box
                component="main"
                sx={{
                    p: 2,
                    height: '100vh',
                    backgroundImage: 'url(/home/hero-bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Typography sx={{ fontSize: "3rem", fontWeight: "700" }}>I'm Kevin Gangoso</Typography>
                <Typography variant="h4" gutterBottom>
                    <span ref={typedEl}></span>
                </Typography>
            </Box>

        </div>
    )
}

export default Home


