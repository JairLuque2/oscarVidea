import { Link as RouterLink } from "react-router-dom";
import { AppBar, Box, Button, Divider, Drawer, Grid, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { useState } from "react";
import { NavLink } from 'react-router-dom';

const drawerWidth = 300;


export const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box >

            <AppBar
                component="nav"
                position="fixed"
                className="navbar"
            >
                <Toolbar>
                    <IconButton
                        display="block"
                        position="absolute"
                        color="inherit"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuOutlined />
                    </IconButton>
                    <Grid
                        px={{ sm: 35 }}
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ display: { xs: "none", sm: "flex" }, height: "100%" }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{ height: "100%", width: "20%" }}
                        >
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `link ${isActive ? 'active' : ''}`
                                }
                            >
                                INICIO
                            </NavLink>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{ height: "100%", width: "20%" }}
                        >
                            <NavLink
                                to="/taquiraris"
                                className={({ isActive }) =>
                                    `link ${isActive ? 'active' : ''}`
                                }
                            >
                                TAQUIRARIS
                            </NavLink>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{ height: "100%", width: "20%" }}
                        >
                            <NavLink
                                to="/morenada"
                                className={({ isActive }) =>
                                    `link ${isActive ? 'active' : ''}`
                                }
                            >
                                MORENADA
                            </NavLink>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{ height: "100%", width: "20%" }}
                        >
                            <NavLink
                                to="/cuecas"
                                className={({ isActive }) =>
                                    `link ${isActive ? 'active' : ''}`
                                }
                            >
                                CUECAS
                            </NavLink>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{ height: "100%", width: "20%" }}
                        >
                            <NavLink
                                to="/chuntunqui"
                                className={({ isActive }) =>
                                    `link ${isActive ? 'active' : ''}`
                                }
                            >
                                CHUNTUNQUI Y CH'UTAS
                            </NavLink>
                        </Box>
                    </Grid>
                </Toolbar>
            </AppBar >
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

                    }}
                >
                    <Grid
                        container
                        direction="column"
                        onClick={handleDrawerToggle}
                        justifyContent="space-around"
                        sx={{
                            textAlign: 'center',
                            backgroundColor: "#353535",
                            height: "100%"
                        }}
                    >
                        <Typography variant="h6" sx={{ my: 2 }} color="white">
                            Oscar Videa
                        </Typography>
                        <Link
                            component={RouterLink}
                            color="white"
                            to="/"
                            underline="none"
                        >
                            Inicio
                        </Link>
                        <Link
                            component={RouterLink}
                            color="white"
                            to="/taquiraris"
                            underline="none"
                        >
                            Taquiraris
                        </Link>
                        <Link
                            component={RouterLink}
                            color="white"
                            to="/morenada"
                            underline="none"
                        >
                            Morenada
                        </Link>
                        <Link
                            component={RouterLink}
                            color="white"
                            to="/cuecas"
                            underline="none"
                        >
                            Cuecas
                        </Link>
                    </Grid>
                </Drawer>
            </Box>
        </Box>

    )
}