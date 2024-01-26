import { GridColDef } from "@mui/x-data-grid";
import { MenuItem } from "../../hooks/useGlobalLocales/GlobalLocalesType";
import { convertLocale } from "../../hooks/useGlobalLocales/useGlobalLocales";

export const TeacherMenuItem: MenuItem[] = [
  { title: "دانشجویان", link: "/students" },
  { title: "کلاسها", link: "/classes" },
  { title: "نمایندگی تحصیلات تکمیلی", link: "/agent" },
  { title: "درخواست‌ها", link: "" },
];
export const columns: GridColDef[] = [
  {
    field: "title",
    headerName: convertLocale({ key: "DATA_GRID_TITLE_COLUMN" }).text,
    flex: 1,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
  },
  {
    field: "student",
    flex: 0.6,
    headerName: convertLocale({ key: "DATA_GRID_STUDENT_COLUMN" }).text,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "supervisor",
    flex: 0.6,
    headerName: convertLocale({ key: "DATA_GRID_SUPERVISOR_COLUMN" }).text,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "createdAt",
    headerName: convertLocale({ key: "DATA_GRID_DATE_COLUMN" }).text,
    type: "number",
    flex: 0.5,
    align: "center",
    headerAlign: "center",
  },
];
