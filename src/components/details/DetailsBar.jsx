import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../Nvbar';

const drawerWidth = 240;

export default function DetailsBar() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Navbar />

            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    zIndex: '0',
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Divider />
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {[
                            { text: 'Personal', link: '/details' },
                            { text: 'Work Experience', link: '/details/workExperience' },
                            { text: 'Education', link: '/details/education' },
                            { text: 'Key Skills', link: '/details/keySkills' },
                        ].map((item, index) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton component={Link} to={item.link}>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {/* <Toolbar /> */}
                <Outlet />
            </Box>
        </Box >
    );
}
