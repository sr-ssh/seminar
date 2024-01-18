import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import { styled } from "@mui/material";
import { convertLocale } from "../../hooks/useGlobalLocales/useGlobalLocales";
import PaginationRounded from "../Pagination";
import DataGridSkeleton from "./Skeleton";
import React from "react";

const DataGridStyle = styled(DataGrid)(({ theme }) => ({
  border: "none",
  gap: 24,
  "& .MuiDataGrid-main": {
    gap: 24,
    backgroundColor: theme.palette.goku.light,
  },
  "& .MuiDataGrid-columnHeaders ": {
    borderRadius: 8,
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    ...theme.typography.xs,
  },
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: "#E0DFED",
  },
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    gap: "12px",
    backgroundColor: theme.palette.goku.light,
  },
  "& .MuiDataGrid-row": {
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  "& .MuiDataGrid-cellContent": {
    ...theme.typography.xs,
    fontWeight: 400,
  },
  "& .MuiDataGrid-withBorderColor": { border: "none" },
  "& .MuiDataGrid-virtualScrollerContent": {
    height: "600px !important",
  },
  "& .MuiDataGrid-footerContainer": {
    justifyContent: "center",
  },
}));

const sampleColumns: GridColDef[] = [
  {
    field: "title",
    headerName: convertLocale({ key: "DATA_GRID_TITLE_COLUMN" }).text,
    flex: 1,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
  },
  {
    field: "firstName",
    flex: 0.6,
    headerName: convertLocale({ key: "DATA_GRID_STUDENT_COLUMN" }).text,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "lastName",
    flex: 0.6,
    headerName: convertLocale({ key: "DATA_GRID_SUPERVISOR_COLUMN" }).text,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "age",
    headerName: convertLocale({ key: "DATA_GRID_DATE_COLUMN" }).text,
    type: "number",
    flex: 0.5,
    align: "center",
    headerAlign: "center",
  },
];

const sampleRows = [
  {
    id: 1,
    title: "مدلسازی سیستم‌های اتکاپذیر در سام...",
    lastName: "دکتر حسین حسینی",
    firstName: "حسین حسینی",
    age: "1402/15/11",
  },
  {
    id: 2,
    title: "مدلسازی سیستم‌های اتکاپذیر در سام...",
    lastName: "دکتر حسین حسینی",
    firstName: "حسین حسینی",
    age: "1402/15/11",
  },
  {
    id: 3,
    title: "مدلسازی سیستم‌های اتکاپذیر در سام...",
    lastName: "دکتر حسین حسینی",
    firstName: "حسین حسینی",
    age: "1402/15/11",
  },
  {
    id: 4,
    title: "مدلسازی سیستم‌های اتکاپذیر در سام...",
    lastName: "دکتر حسین حسینی",
    firstName: "حسین حسینی",
    age: "1402/15/11",
  },
  {
    id: 5,
    title: "مدلسازی سیستم‌های اتکاپذیر در سام...",
    lastName: "دکتر حسین حسینی",
    firstName: "حسین حسینی",
    age: "1402/15/11",
  },
  {
    id: 6,
    title: "مدلسازی سیستم‌های اتکاپذیر در سام...",
    lastName: "دکتر حسین حسینی",
    firstName: "حسین حسینی",
    age: "1402/15/11",
  },
  {
    id: 7,
    title: "مدلسازی سیستم‌های اتکاپذیر در سام...",
    lastName: "دکتر حسین حسینی",
    firstName: "حسین حسینی",
    age: "1402/15/11",
  },
  {
    id: 8,
    title: "مدلسازی سیستم‌های اتکاپذیر در سام...",
    lastName: "دکتر حسین حسینی",
    firstName: "حسین حسینی",
    age: "1402/15/11",
  },
  {
    id: 9,
    title: "مدلسازی سیستم‌های اتکاپذیر در سام...",
    lastName: "دکتر حسین حسینی",
    firstName: "حسین حسینی",
    age: "1402/15/11",
  },
];

interface Props {
  columns: GridColDef[];
  rows: any;
  loading?: boolean;
  numberOfPages?: number;
  currentPage?: number;
  onRowClick?: (e: GridRowParams<any>) => void;
}

export const CustomDataGrid: React.FC<Props> = ({
  columns = sampleColumns,
  rows = sampleRows,
  loading = false,
  numberOfPages = 0,
  currentPage,
  onRowClick,
}) => {
  return (
    <Box sx={{ height: "auto", width: "100%" }}>
      <DataGridStyle
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 9,
            },
          },
        }}
        slots={{
          pagination: () => (
            <PaginationRounded
              count={numberOfPages}
              defaultPage={currentPage}
            />
          ),
          loadingOverlay: DataGridSkeleton,
        }}
        pageSizeOptions={[5]}
        rowHeight={56}
        loading={loading}
        disableRowSelectionOnClick
        onRowClick={onRowClick}
      />
    </Box>
  );
};
