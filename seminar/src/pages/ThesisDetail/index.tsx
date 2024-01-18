import { Box, Container, Typography, styled } from "@mui/material";
import CustomChip from "../../components/Chip";
import ThesisForm from "./components/Form";
import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import {
  StudentMenuItem,
  UNIVERSITY_URL,
  initThesis,
} from "../../constants/global";
import { thesisTransformer } from "../../utils/dataTransformers";
import { useEffect, useState } from "react";
import UseApi from "../../hooks/useApi";
import { ThesisDetailType } from "../../types/thesis";
import { Localizer } from "../../hooks/useGlobalLocales/Localizer";
import { useParams } from "react-router";

const ContainerStyle = styled(Box)({
  display: "flex",
  gap: 24,
  flexDirection: "column",
  textAlign: "start",
  borderRadius: 8,
  backgroundColor: "#fff",
  padding: "11px 34px",
  margin: "11px 34px",
});

const BoxStyles = styled(Box)({
  display: "flex",
  gap: 12,
  flexDirection: "column",
});

const ThesisDetail = () => {
  const { id } = useParams();
  const { apiCall, loading } = UseApi();
  const [thesis, setThesis] = useState<ThesisDetailType>(initThesis);

  const onThesisDetailsSuccess = (res: any) => {
    setThesis(thesisTransformer(res.data));
  };

  const studentDetails = () => {
    apiCall({
      url: UNIVERSITY_URL.THESIS + `/${id}`,
      method: "get",
      successCallback: onThesisDetailsSuccess,
    });
  };

  useEffect(() => {
    studentDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <div>
        <SideBar menuItems={StudentMenuItem}>
          <Box>
            <Typography variant="lg">
              <Localizer localeKey="THESIS_DETAILS_PAGE_TITLE" />
            </Typography>
            <ContainerStyle>
              <BoxStyles>
                <Typography variant="lg">
                  <Localizer localeKey="THESIS_DETAILS_TITLE" />
                </Typography>
                <Typography variant="md">{thesis.title}</Typography>
              </BoxStyles>
              <BoxStyles>
                <Typography variant="lg">
                  <Localizer localeKey="THESIS_DETAILS_EN_TITLE" />
                </Typography>
                <Typography variant="md">
                  Analyzable Platform Modeling of real-time systems using MARTE:
                  A case-study in the automotive domain Analyzable Platform
                  Modeling of real-time systems using MARTE: A case-study in the
                  automotive domain
                </Typography>
              </BoxStyles>
              <BoxStyles>
                <Typography variant="lg">
                  <Localizer localeKey="THESIS_DETAILS_STUDENT" />
                </Typography>
                <Typography variant="md">{thesis.student}</Typography>
              </BoxStyles>
              <BoxStyles>
                <Typography variant="lg">
                  <Localizer localeKey="THESIS_DETAILS_SUPERVISOR" />
                </Typography>
                <Typography variant="md">
                  {thesis.supervisors.map((item) => item.id)}
                </Typography>
              </BoxStyles>
              <BoxStyles>
                <Typography variant="lg">
                  <Localizer localeKey="THESIS_DETAILS_AREAS" />
                </Typography>
                <Typography variant="md">{thesis.area.title}</Typography>
              </BoxStyles>
              <BoxStyles>
                <Typography variant="lg">
                  <Localizer localeKey="THESIS_DETAILS_DATE_AND_PLACE" />
                </Typography>
                <Typography variant="md">
                  1402/1/1 ساعت 4:30 بعدازظهر اتاق جلسات 801
                </Typography>
              </BoxStyles>
              <BoxStyles>
                <Typography variant="lg">
                  <Localizer localeKey="THESIS_DETAILS_AGENT" />
                </Typography>
                <Typography variant="md">{thesis.agent.id}</Typography>
              </BoxStyles>
              <BoxStyles>
                <Typography variant="lg">
                  <Localizer localeKey="THESIS_DETAILS_TAGS" />
                </Typography>
                <Box display={"flex"} gap={2}>
                  {thesis.tags.map((tag) => (
                    <CustomChip
                      key={tag.title}
                      label={tag.title}
                      color="primary"
                    />
                  ))}
                </Box>
              </BoxStyles>
              <BoxStyles>
                <Typography variant="lg">
                  <Localizer localeKey="THESIS_DETAILS_SUMMERY" />
                </Typography>
                <Typography variant="md">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
                  ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                  طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون
                  و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
                  و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                  کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                  جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                  برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو
                  در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام
                  و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
                  رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                  سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                  گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                  روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                  فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                  حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
                  نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
                  ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                  طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون
                  و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
                  و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                  کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                  جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                  برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو
                  در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام
                  و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
                  رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                  سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                  گیرد.
                </Typography>
              </BoxStyles>
              <ThesisForm />
            </ContainerStyle>
          </Box>
        </SideBar>
      </div>
    </>
  );
};

export default ThesisDetail;
