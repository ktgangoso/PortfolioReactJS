import { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        subject: false,
        message: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: false }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            name: !form.name.trim(),
            email: !form.email.trim(),
            subject: !form.subject.trim(),
            message: !form.message.trim(),
        };

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(Boolean);
        if (!hasErrors) {
            console.log("✅ Form submitted successfully!", form);
            setForm({ name: '', email: '', subject: '', message: '' });
        }
    };

    return (
        <div id="contact">
            <Box
                sx={{
                    padding: '2rem 1rem',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#f5f7fa',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        position: 'relative',
                        display: 'inline-block',
                        pb: 1,
                        color: "#2c3e50",
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            height: '0.25rem',
                            width: { xs: "25%", md: '5%' },
                            backgroundColor: '#149ddd',
                            borderRadius: '1rem',
                        },
                    }}
                >
                    Contact Me
                </Typography>


                <Box sx={{
                    display: "flex", flexDirection: { xs: "column", md: "row" },
                    gap: "1rem", padding: "1rem", justifyContent: "space-between", width: "auto",
                }}>
                    <Box sx={{ width: { xs: "100%", md: "70%" } }}>
                        <Paper
                            elevation={3}
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                mt: 4,
                                padding: '2rem',
                                borderRadius: '1rem',
                                backgroundColor: '#ffffff',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                            }}
                        >
                            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem", alignItems: "center" }}>
                                <LocationPinIcon />
                                <Box>
                                    <Typography>Address</Typography>
                                    <Typography>Taguig City</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem", alignItems: "center" }}>
                                <CallIcon />
                                <Box>
                                    <Typography>Contact</Typography>
                                    <Typography>09212223818</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem", alignItems: "center" }}>
                                <EmailIcon />
                                <Box>
                                    <Typography>Email</Typography>
                                    <Typography>kevin.gangoso@gmail.com</Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>

                    <Box sx={{ width: "100%" }}>
                        <Paper
                            elevation={3}
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                mt: 4,
                                padding: '2rem',
                                borderRadius: '1rem',
                                backgroundColor: '#ffffff',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                            }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: '1rem' }}>
                                <TextField
                                    name="name"
                                    label="Name"
                                    variant="outlined"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    error={errors.name}
                                    helperText={errors.name ? 'Name is required' : ''}
                                    fullWidth
                                />
                                <TextField
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    error={errors.email}
                                    helperText={errors.email ? 'Email is required' : ''}
                                    fullWidth
                                />
                            </Box>

                            <TextField
                                name="subject"
                                label="Subject"
                                variant="outlined"
                                value={form.subject}
                                onChange={handleChange}
                                required
                                error={errors.subject}
                                helperText={errors.subject ? 'Subject is required' : ''}
                                fullWidth
                            />

                            <TextField
                                name="message"
                                label="Message"
                                variant="outlined"
                                multiline
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                required
                                error={errors.message}
                                helperText={errors.message ? 'Message is required' : ''}
                                fullWidth
                            />

                            <Button
                                variant="contained"
                                type="submit"
                                sx={{
                                    backgroundColor: '#149ddd',
                                    padding: '0.75rem',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    borderRadius: '2rem',
                                    textTransform: 'none',
                                    transition: '0.3s',
                                    '&:hover': {
                                        backgroundColor: '#0e76a8',
                                    },
                                }}
                            >
                                Send Message
                            </Button>
                        </Paper>
                    </Box>
                </Box>

            </Box>
        </div>
    );
}

export default Contact;
