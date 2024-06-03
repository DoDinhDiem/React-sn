"use client";
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import Layout from "@/app/ShareLayout/layout";
export default function page() {
    return (
        <>
            <Layout>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" alignItems={"center"} display={"flex"} justifyContent={"start"} fontWeight={600} color={"#6c757d"}>
                        Dashboard
                    </Typography>
                </Box>
                <Box className="mt-3">
                    <Grid container spacing={3}>
                        <Grid item className="lg:w-1/4 md:w-1/2 sm:w-full">
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item className="lg:w-1/4 md:w-1/2 sm:w-full">
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item className="lg:w-1/4 md:w-1/2 sm:w-full">
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item className="lg:w-1/4 md:w-1/2 sm:w-full">
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Layout>
        </>
    );
}
