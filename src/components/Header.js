import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const [anchorEl3, setAnchorEl3] = React.useState(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };
    const handleClose = () => {
        setAnchorEl(null);
        setAnchorEl2(null);
        setAnchorEl3(null);
    };

    return (
        // <div>Header</div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ background: '#732C02'}}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    FLAIME
                </Typography>

                {/* Menu Buttons */}
                <Button
                    id="tools"
                    // aria-controls={open ? "tools-menu" : undefined}
                    aria-haspopup="true"
                    // aria-expanded={open ? "true" : undefined}
                    onClick={e=>setAnchorEl(e.currentTarget)}
                    color="inherit"
                    
                >
                    tools
                </Button>
                <Menu
                    id="tools-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    MenuListProps={{
                    "aria-labelledby": "tools-button"
                    }}
                >
                    <MenuItem onClick={handleClose}>Product Browser</MenuItem>
                    <MenuItem onClick={handleClose}>Batch Browser</MenuItem>
                    <MenuItem onClick={handleClose}>Report Builder</MenuItem>
                </Menu>

                <Button
                    id="reports"
                    // aria-controls={open ? "reports-menu" : undefined}
                    aria-haspopup="true"
                    // aria-expanded={open ? "true" : undefined}
                    onClick={e=>setAnchorEl2(e.currentTarget)}
                    color="inherit"
                    
                >
                    Reports
                </Button>
                <Menu
                    id="reports-menu"
                    anchorEl={anchorEl2}
                    open={Boolean(anchorEl2)}
                    onClose={handleClose}
                    MenuListProps={{
                    "aria-labelledby": "reports-button"
                    }}
                >
                    <MenuItem onClick={handleClose}>By Store</MenuItem>
                    <MenuItem onClick={handleClose}>By Category</MenuItem>
                    <MenuItem onClick={handleClose}>By Nutrient</MenuItem>
                </Menu>

                <Button
                    id="data"
                    // aria-controls={open ? "tools-menu" : undefined}
                    aria-haspopup="true"
                    // aria-expanded={open ? "true" : undefined}
                    onClick={e=>setAnchorEl3(e.currentTarget)}
                    color="inherit"
                    
                >
                    Data
                </Button>
                <Menu
                    id="data-menu"
                    anchorEl={anchorEl3}
                    open={Boolean(anchorEl3)}
                    onClose={handleClose}
                    MenuListProps={{
                    "aria-labelledby": "data-button"
                    }}
                >
                    <MenuItem onClick={handleClose}>Quality</MenuItem>
                    <MenuItem onClick={handleClose}>Download</MenuItem>
                    <MenuItem onClick={handleClose}>Visualizations</MenuItem>
                </Menu>

                <Button
                    id="about"
                    // aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    // aria-expanded={open ? "true" : undefined}
                    // onClick={handleClick}
                    color="inherit"
                    sx={{ mr: 2 }}
                >
                    About
                </Button>

                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="login"
                >
                    <AccountCircleIcon />
                </IconButton>
                

                
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header