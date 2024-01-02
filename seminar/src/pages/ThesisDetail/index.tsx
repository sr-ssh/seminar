import { Box, Container, Typography, styled } from "@mui/material";
import CustomChip from "../../components/Chip";
import ThesisForm from "./components/Form";
import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";

const ContainerStyle = styled(Box)({
  display: "flex",
  gap: 24,
  flexDirection: "column",
  textAlign: "start",
  borderRadius: 8,
  backgroundColor: "#fff",
  padding: "11px 34px",
  margin: "11px 34px",
  position: "relative",
  left: 300,
  top: 72,
  width: "calc(100% - 400px)",
});

const BoxStyles = styled(Box)({
  display: "flex",
  gap: 12,
  flexDirection: "column",
});

const studentPanelMenuItems = [
  { title: "انتخاب استاد راهنما و کلاس سمینار", link: "" },
  { title: "جلسات دفاع", link: "" },
  { title: "جلسات ثبت نام شده", link: "" },
  { title: "گواهی نامه‌ها", link: "" },
];

const ThesisDetail = () => {
  return (
    <>
      <Header />
      <div>
        <SideBar menuItems={studentPanelMenuItems} />
      </div>
      جزئیات جلسه دفاع
      <Typography variant="lg">جزئیات جلسه دفاع</Typography>
      <ContainerStyle>
        <BoxStyles>
          <Typography variant="lg">عنوان:</Typography>
          <Typography variant="md">
            مدل‌سازی تحلیل‌پذیر سکوی سیستم‌های بی‌درنگ بر اساس MARTE: یک مطالعه
            موردی در حوزه خودرو مدل‌سازی تحلیل‌پذیر سکوی سیستم‌های بی‌درنگ بر
            اساس MARTE: یک مطالعه موردی در حوزه خودرو
          </Typography>
        </BoxStyles>
        <BoxStyles>
          <Typography variant="lg">عنوان انگلیسی:</Typography>
          <Typography variant="md">
            Analyzable Platform Modeling of real-time systems using MARTE: A
            case-study in the automotive domain Analyzable Platform Modeling of
            real-time systems using MARTE: A case-study in the automotive domain
          </Typography>
        </BoxStyles>
        <BoxStyles>
          <Typography variant="lg">دانشجو:</Typography>
          <Typography variant="md">حسین رحیمی</Typography>
        </BoxStyles>
        <BoxStyles>
          <Typography variant="lg">استاد راهنما:</Typography>
          <Typography variant="md">دکتر مهدی کارگهی</Typography>
        </BoxStyles>
        <BoxStyles>
          <Typography variant="lg">گرایش:</Typography>
          <Typography variant="md">نرم‌افزار</Typography>
        </BoxStyles>
        <BoxStyles>
          <Typography variant="lg">تاریخ و مکان دفاع:</Typography>
          <Typography variant="md">
            1402/1/1 ساعت 4:30 بعدازظهر اتاق جلسات 801
          </Typography>
        </BoxStyles>
        <BoxStyles>
          <Typography variant="lg">نماینده تحصیلات تکمیلی:</Typography>
          <Typography variant="md">دکتر مهدی کارگهی</Typography>
        </BoxStyles>
        <BoxStyles>
          <Typography variant="lg">تگ‌ها:</Typography>
          <Box display={"flex"} gap={2}>
            <CustomChip label="سیستم‌‌های نهفته" color="primary" />
            <CustomChip label="سامانه‌های سایبر فیزیکی" color="primary" />
            <CustomChip label="سامانه‌های سایبر فیزیکی" color="primary" />
            <CustomChip label="MARTE" color="primary" />
            <CustomChip label="مدلسازی" color="primary" />
          </Box>
        </BoxStyles>
        <BoxStyles>
          <Typography variant="lg">چکیده: </Typography>
          <Typography variant="md">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم
            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
            از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
            می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
            تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
            می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
            فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
            برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
            فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
            موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
            نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
            دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </Typography>
        </BoxStyles>
        <ThesisForm />
      </ContainerStyle>
    </>
  );
};

export default ThesisDetail;
