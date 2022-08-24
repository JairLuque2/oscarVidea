import { Link as RouterLink } from "react-router-dom";
import { Grid, IconButton, Link } from "@mui/material"
import { Box, Container } from "@mui/system"
import { FacebookOutlined, Twitter, Instagram, ArrowRight, Home, LocalPhone, PhoneIphone, Email, AccessTime } from "@mui/icons-material";

export const Footer = () => {

    const TikTokIcon = ({ color = "#000000" }) => {
        return (
            <svg
                fill={color}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="100%"
                height="100%"
            >
                <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
            </svg>
        );
    };


    return (
        <footer className="footer">
            <Box
                px={{ xs: 3, sm: 35 }}
                color="white"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={2}>
                            <Box className="title_footer">RUTA</Box>
                            <Box>
                                <Link to="/" color="white" underline="none" component={RouterLink}>
                                    <IconButton color="action">
                                        <ArrowRight />
                                    </IconButton>
                                    Inicio
                                </Link>
                            </Box>
                            <Box>
                                <Link to="/album" color="white" underline="none" component={RouterLink}>
                                    <IconButton color="action">
                                        <ArrowRight />
                                    </IconButton>
                                    Album
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box className="title_footer">REDES SOCIALES</Box>
                            <Grid display="flex" justifyContent="space-around">
                                <Box
                                    sx={{ margin: 1 }}
                                >
                                    <Link
                                        target="_blank"
                                        href="https://www.facebook.com/oscarvideabolivia"
                                        color="white"
                                        underline="none"
                                        sx={{
                                            padding: 2,
                                            backgroundColor: "#1d9bf0",
                                            borderRadius: "50%",
                                            display: "flex",
                                            border: "4px solid #ab90b9"
                                        }}>
                                        <FacebookOutlined sx={{ fontSize: 60 }} />
                                    </Link>
                                </Box>
                                <Box
                                    sx={{ margin: 1 }}
                                >
                                    <Link
                                        target="_blank"
                                        href="https://vm.tiktok.com/ZMNqUbYk8/"
                                        color="white"
                                        underline="none"
                                        sx={{
                                            padding: 2,
                                            backgroundColor: "#1d9bf0",
                                            borderRadius: "50%",
                                            display: "flex",
                                            border: "4px solid #ab90b9",
                                            width: 100
                                        }}>
                                        <TikTokIcon color="white" />
                                    </Link>
                                </Box>

                                <Box
                                    sx={{ margin: 1 }}
                                >
                                    <Link
                                        target="_blank"
                                        href="https://instagram.com/oscarvideaa?igshid=YmMyMTA2M2Y="
                                        color="white"
                                        underline="none"
                                        sx={{
                                            padding: 2,
                                            backgroundColor: "#1d9bf0",
                                            borderRadius: "50%",
                                            display: "flex",
                                            border: "4px solid #ab90b9"
                                        }}
                                    >
                                        <Instagram sx={{ fontSize: 60 }} />
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box className="title_footer">CONTACTO</Box>
                            <Box>
                                <PhoneIphone />
                                77542706
                            </Box>
                            <Box>
                                <Email />
                                folkloreboliviano@hotmail.com
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box textAlign="center" mt={{ sm: 10 }} py={{ xs: 2 }} className="copyright">
                COPYRIGHT &reg; {new Date().getFullYear()} LIONS-F1
            </Box>
        </footer>
    )
}
