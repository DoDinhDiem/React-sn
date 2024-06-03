"use client";

import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import List from "@mui/material/List";

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

interface DrawerComponentProps {
    open: boolean;
    drawerWidth: number;
}

export default function SideMenu({ open, drawerWidth }: DrawerComponentProps) {
    const theme = useTheme();

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    backgroundColor: "#313a46",
                    color: "#8391a2",
                    fontSize: "15px !important",
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}>
            <DrawerHeader>
                <img src="logo/logo-white-lg.png" className="h-10 m-auto" />
            </DrawerHeader>
            <Divider />
            <List>
                <small className="ml-2 mb-1">Home</small>
                <Link href={"/dashboard"}>
                    <ListItemButton>
                        <ListItemIcon sx={{ color: "#8391a2" }}>
                            <HomeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="DashBoard" />
                    </ListItemButton>
                </Link>
            </List>
            <List>
                <small className="ml-2 mb-1">Navigation</small>
                <Link href={"/loaisanpham"}>
                    <ListItemButton>
                        <ListItemIcon sx={{ color: "#8391a2" }}>
                            <WidgetsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Loại sản phẩm" />
                    </ListItemButton>
                </Link>
            </List>
        </Drawer>
    );
}
