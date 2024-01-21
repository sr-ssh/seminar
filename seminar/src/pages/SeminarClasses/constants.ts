import { GridColDef } from "@mui/x-data-grid";
import { MenuItem } from "../../hooks/useGlobalLocales/GlobalLocalesType";
import { convertLocale } from "../../hooks/useGlobalLocales/useGlobalLocales";

export const TeacherMenuItem: MenuItem[] = [
  { title: "دانشجویان", link: "/students" },
  { title: "کلاسها", link: "/classes" },
  { title: "نمایندگی تحصیلات تکمیلی", link: "" },
  { title: "درخواست‌ها", link: "" },
];

export const columns: GridColDef[] = [
  {
    field: "className",
    headerName: convertLocale({ key: "CLASS_LIST_GRID_CLASS_NAME" }).text,
    flex: 1,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
  },
  {
    field: "members",
    flex: 0.6,
    headerName: convertLocale({ key: "CLASS_LIST_GRID_MEMBERS" }).text,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "area",
    flex: 0.6,
    headerName: convertLocale({ key: "CLASS_LIST_GRID_AREA" }).text,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "entranceYear",
    headerName: convertLocale({ key: "CLASS_LIST_GRID_ENTRANCE_YEAR" }).text,
    type: "number",
    flex: 0.5,
    align: "center",
    headerAlign: "center",
  },
];
