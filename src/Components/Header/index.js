import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
                <Typography variant="h6">
                    Travel Booking
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
