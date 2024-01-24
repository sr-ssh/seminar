import { GridColDef } from "@mui/x-data-grid";
import { MenuItem } from "../../hooks/useGlobalLocales/GlobalLocalesType";
import { convertLocale } from "../../hooks/useGlobalLocales/useGlobalLocales";

export const TeacherMenuItem: MenuItem[] = [
  { title: "دانشجویان", link: "/students" },
  { title: "کلاسها", link: "/classes" },
  { title: "نمایندگی تحصیلات تکمیلی", link: "" },
  { title: "درخواست‌ها", link: "" },
];

export const TRANSLATIONS = {
  pageTitle: (title: string, code: string) =>
    `لیست دانشجویان کلاس ${title} با کد ${code}`,
};

export const columns: GridColDef[] = [
  {
    field: "name",
    headerName: convertLocale({ key: "CLASS_DETAILS_STUDENT_NAME" }).text,
    flex: 1,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
  },
  {
    field: "SID",
    flex: 0.6,
    headerName: convertLocale({ key: "CLASS_DETAILS_SID" }).text,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "area",
    flex: 0.6,
    headerName: convertLocale({ key: "CLASS_DETAILS_AREA" }).text,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "entranceYear",
    headerName: convertLocale({ key: "CLASS_DETAILS_ENTRANCE_YEAR" }).text,
    type: "number",
    flex: 0.5,
    align: "center",
    headerAlign: "center",
  },
];
