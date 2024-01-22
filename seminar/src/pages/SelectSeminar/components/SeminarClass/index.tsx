import { FormControl } from "@mui/material";
import BasicSelect from "../../../../components/Signup/Select";
import { useEffect, useState } from "react";
import { UNIVERSITY_URL } from "../../../../constants/global";
import UseApi from "../../../../hooks/useApi";
import { selectSeminarClassTransformer } from "../../../../utils/dataTransformers";

const SeminarClass = () => {
  const [options, setOptions] = useState([]);
  const { apiCall } = UseApi();

  useEffect(() => {
    const getSeminarClasses = () => {
      apiCall({
        url: UNIVERSITY_URL.SEMINAR_CLASS,
        method: "get",
        successCallback: ({ data }) => {
          console.log(
            data.data.map((item: any) => selectSeminarClassTransformer(item)),
          );
          setOptions(
            data.data.map((item: any) => selectSeminarClassTransformer(item)),
          );
        },
      });
    };

    getSeminarClasses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormControl variant="standard" sx={{ flex: 1 }}>
      <BasicSelect
        labelLocalKey="SELECT_SEMINAR_CLASS_LABEL"
        placeHolder="SELECT_SEMINAR_CLASS_PLACEHOLDER"
        options={options}
        onChange={(e) => console.log("classes", e.target.value)}
      />
    </FormControl>
  );
};
export default SeminarClass;
