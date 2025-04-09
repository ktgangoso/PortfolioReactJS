import { useState } from "react";
import { Box, Typography, TextField, Button } from '@mui/material'


function Contact() {
    // Submit btn
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
            // Reset form after submit (optional)
            setForm({ name: '', email: '', subject: '', message: '' });
        }
    };


    return (
        <div id='contact'>
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
                        Contact Me
                    </Typography>
                </Box>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        height: "100%",
                        border: "1px solid black",
                        width: "30rem",
                        padding: "1rem",
                        margin: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Box sx={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", gap: "1rem" }}>
                        <TextField
                            name="name"
                            label="Name"
                            variant="outlined"
                            value={form.name}
                            onChange={handleChange}
                            required
                            error={errors.name}
                            helperText={errors.name ? "Name is required" : ""}
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
                            helperText={errors.email ? "Email is required" : ""}
                            fullWidth
                        />
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <TextField
                            name="subject"
                            label="Subject"
                            variant="outlined"
                            value={form.subject}
                            onChange={handleChange}
                            required
                            error={errors.subject}
                            helperText={errors.subject ? "Subject is required" : ""}
                        />
                        <TextField
                            name="message"
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={form.message}
                            onChange={handleChange}
                            required
                            error={errors.message}
                            helperText={errors.message ? "Message is required" : ""}
                        />
                    </Box>

                    <Button
                        variant="contained"
                        type="submit"
                        sx={{ borderRadius: "1.5rem", padding: ".5rem" }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default Contact