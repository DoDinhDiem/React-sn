"use client";
import React from "react";
import Layout from "@/app/ShareLayout/layout";
import { Box, Button, Typography, Switch } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1, headerAlign: "center", align: "center" },
    { field: "tenLoai", headerName: "Tên loại", flex: 1, headerAlign: "center", align: "center" },
    {
        field: "trangThai",
        headerName: "Trạng thái",
        flex: 1,
        headerAlign: "center",
        align: "center",
        renderCell: (params) => <Switch checked={params.value} color="primary" />,
    },
    {
        field: "action",
        headerName: "Hành động",
        flex: 1,
        headerAlign: "center",
        align: "center",
        renderCell: (params) => (
            <Button variant="contained" color="primary">
                Action
            </Button>
        ),
    },
];

const fetchLoaiData = async () => {
    const response = await axios.get("https://localhost:44363/api/Loai/GetAll_Loai");
    return response.data;
};

function LoaiSanPham() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["loaiData"],
        queryFn: fetchLoaiData,
    });

    if (isLoading) return <Typography>Loading...</Typography>;
    if (error instanceof Error) return <Typography>Error: {error.message}</Typography>;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <div>
                <DataGrid
                    rows={data}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            </div>
        </Box>
    );
}

export default function Page() {
    const breadcrumbs = [
        <Link key="1" color="inherit" href="/">
            Dashboard
        </Link>,
        <Typography key="3" color="text.primary">
            Loại sản phẩm
        </Typography>,
    ];

    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="h6" fontWeight={600} color={"#6c757d"}>
                        Loại sản phẩm
                    </Typography>
                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                        {breadcrumbs}
                    </Breadcrumbs>
                </Box>

                <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px", marginBottom: "10px" }}>
                    <Button variant="contained">Tạo mới</Button>
                    <Button variant="contained" sx={{ backgroundColor: "#0F7F45" }}>
                        Xuất excel
                    </Button>
                </Box>

                <LoaiSanPham />
            </Layout>
        </QueryClientProvider>
    );
}
