import React from 'react';
import { Box, Typography, List, ListItem, Divider } from '@mui/material';

function Resume() {
    return (
        <div>
            <Box sx={{
                padding: '1rem',
                height: { xs: "100%", md: "100%" },
                marginTop: { xs: "2rem", md: "5rem" },
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
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
                        Resume
                    </Typography>
                </Box>

                {/* Work Experience */}
                <Box sx={{ display: "flex", justifyContent: "space-around", flexDirection: "row", width: "100%" }}>
                    <Box sx={{ width: "100%" }}>
                        <Typography variant="h5" fontWeight={700} color="#333" mb={3}>
                            Work Experience
                        </Typography>

                        {/* Conti’s Specialty Foods Inc. Internship */}
                        <Box mb={4}>
                            <Typography variant="h6" fontWeight={600} color="#007BFF" sx={{ letterSpacing: '0.5px' }}>
                                Conti’s Specialty Foods Inc. (Internship)
                            </Typography>
                            <Typography variant="body2" color="#757d87" mb={1}>
                                January 2024 - April 2024
                            </Typography>

                            <Box mt={2}>
                                <Typography variant="body1" fontWeight={600} color="#333" mb={1}>Network Support Intern</Typography>
                                <List sx={{ pl: 2, color: '#333' }}>
                                    <ListItem>- Network Troubleshooting: Resolved internet connection issues for each store, addressing concerns about unstable connections.</ListItem>
                                    <ListItem>- CCTV Configuration: Tested and configured the IP addresses for CCTV systems.</ListItem>
                                    <ListItem>- Network Monitoring: Developed a map to monitor internet connectivity for Wendy’s and Conti’s stores.</ListItem>
                                </List>
                            </Box>

                            <Box mt={2}>
                                <Typography variant="body1" fontWeight={600} color="#333" mb={1}>Web Developer Intern</Typography>
                                <List sx={{ pl: 2, color: '#333' }}>
                                    <ListItem>- Payment Separation: Developed code to help accountants separate payments across Conti’s stores.</ListItem>
                                    <ListItem>- Display Unique Codes: Added unique codes to each store to streamline payment segregation.</ListItem>
                                </List>
                            </Box>
                        </Box>

                        {/* Teleperformance Makati Ayala */}
                        <Box mb={4}>
                            <Typography variant="h6" fontWeight={600} color="#007BFF" sx={{ letterSpacing: '0.5px' }}>
                                Teleperformance Makati Ayala
                            </Typography>
                            <Typography variant="body2" color="#757d87" mb={1}>
                                September 2024 - January 2025
                            </Typography>

                            <Box mt={2}>
                                <Typography variant="body1" fontWeight={600} color="#333" mb={1}>Operations Customer Expert I</Typography>
                                <List sx={{ pl: 2, color: '#333' }}>
                                    <ListItem>- Assisted customers with order placement, ensuring efficiency and accuracy.</ListItem>
                                    <ListItem>- Analyzed customer concerns and identified optimal solutions to ensure satisfaction and maintain positive relationships.</ListItem>
                                    <ListItem>- Managed multiple customer interactions with professionalism, ensuring timely resolution of issues and assisting with order placement.</ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Box>

                    {/* Education */}
                    <Box sx={{ width: "100%" }}>
                        <Box>
                            <Typography variant="h5" fontWeight={700} color="#333" mb={3}>
                                Education, and Certifications
                            </Typography>

                            <Box mb={4}>
                                <Typography variant="h6" fontWeight={600} color="#007BFF" sx={{ letterSpacing: '0.5px' }}>
                                    Information and Communication Technology (ICT)
                                </Typography>
                                <Typography variant="body1" fontWeight={600} mb={1}>
                                    STI College Alabang
                                </Typography>
                                <Typography variant="body2" color="#757d87" mb={1}>
                                    2018-2020
                                </Typography>

                                <Box mb={4}>
                                    <Typography variant="h6" fontWeight={600} color="#007BFF" sx={{ letterSpacing: '0.5px' }}>
                                        Bachelor of Information Systems
                                    </Typography>
                                    <Typography variant="body1" fontWeight={600} mb={1}>
                                        Taguig City University
                                    </Typography>
                                    <Typography variant="body2" color="#757d87" mb={1}>
                                        2020-2024
                                    </Typography>
                                </Box>

                                <Box mb={4}>
                                    <Typography variant="h6" fontWeight={600} color="#007BFF" sx={{ letterSpacing: '0.5px' }}>
                                        Certifications
                                    </Typography>
                                    <Typography variant="body1" fontWeight={600} mb={1}>
                                        Cybersecurity in Action: Real-world Case Studies
                                    </Typography>
                                    <Typography variant="body2" color="#757d87" mb={1}>
                                        Xaltius, 23 February 2025
                                    </Typography>
                                </Box>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Resume;
