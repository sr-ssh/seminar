import { GridColDef } from "@mui/x-data-grid";
import { MenuItem } from "../../hooks/useGlobalLocales/GlobalLocalesType";
import { convertLocale } from "../../hooks/useGlobalLocales/useGlobalLocales";

export const TeacherMenuItem: MenuItem[] = [
  { title: "دانشجویان", link: "/students" },
  { title: "کلاسها", link: "" },
  { title: "نمایندگی تحصیلات تکمیلی", link: "" },
  { title: "درخواست‌ها", link: "" },
];

export const columns: GridColDef[] = [
  {
    field: "firstName",
    headerName: convertLocale({ key: "STUDENTS_LIST_GRID_STUDENT_NAME" }).text,
    flex: 1,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
  },
  {
    field: "SID",
    flex: 0.6,
    headerName: convertLocale({ key: "STUDENTS_LIST_GRID_SID" }).text,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "area",
    flex: 0.6,
    headerName: convertLocale({ key: "STUDENTS_LIST_GRID_AREA" }).text,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "entranceYear",
    headerName: convertLocale({ key: "STUDENTS_LIST_GRID_YEAR" }).text,
    type: "number",
    flex: 0.5,
    align: "center",
    headerAlign: "center",
  },
];
