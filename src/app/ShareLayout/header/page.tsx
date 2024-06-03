import React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { Avatar, Badge, Box, InputBase, Menu, MenuItem, Tooltip } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";

interface HeaderProps {
    open?: boolean;
    handleDrawerOpen?: () => void;
    drawerWidth?: number;
}

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== "open" })<HeaderProps>(({ theme, open, drawerWidth }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "10px",
    border: "1px solid #999",
    background: "#f7f8f9",
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "rgba(73, 80, 87, 0.75)",
    width: "100%",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        [theme.breakpoints.up("sm")]: {
            width: "30ch",
        },
        "&::placeholder": {
            color: "#666",
            opacity: 1,
        },
    },
}));

export default function Header({ open, handleDrawerOpen, drawerWidth }: HeaderProps) {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar className="!bg-white" position="absolute" open={open} drawerWidth={drawerWidth}>
                <Toolbar>
                    <IconButton aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon sx={{ color: "#666" }} />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box>
                        <IconButton size="large">
                            <Badge variant="dot" color="error">
                                <EmailOutlinedIcon />
                            </Badge>
                        </IconButton>
                        <IconButton size="large" sx={{ mr: 2 }}>
                            <Badge variant="dot" color="error">
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar
                                    alt="User Avatar"
                                    src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-1/441950896_2218937058498660_2315248548843303098_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NoTMl9j_6OsQ7kNvgHpePSh&_nc_ht=scontent.fhan14-5.fna&oh=00_AYAmYpekm3PWWF71HUI2bcPv95lsJBePHJwqwcdXaCEMQQ&oe=6660F182"
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}>
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}
