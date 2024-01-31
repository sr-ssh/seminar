import { Autocomplete, FormControl } from "@mui/material";
import { Label } from "../../../../components/Label";
import { Localizer } from "../../../../hooks/useGlobalLocales/Localizer";
import { TextInput } from "../../../../components/TextInput";
import { convertLocale } from "../../../../hooks/useGlobalLocales/useGlobalLocales";
import UseApi from "../../../../hooks/useApi";
import { UNIVERSITY_URL } from "../../../../constants/global";
import { useCallback, useState } from "react";
import { selectProfessorTransformer } from "../../../../utils/dataTransformers";

const SupervisorSelect = ({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) => {
  const [options, setOptions] = useState<{ id: string; user: string }[]>([]);
  const { apiCall, loading } = UseApi();

  const callProfessors = useCallback(
    (value: string) => {
      apiCall({
        url: UNIVERSITY_URL.PROFESSOR_BY_NAME + value,
        method: "get",
        successCallback: ({ data }) => {
          console.log(
            data.data.map((item: any) => selectProfessorTransformer(item)),
          );
          setOptions(
            data.data.map((item: any) => selectProfessorTransformer(item)),
          );
        },
      });
    },
    [apiCall],
  );

  const changeHandler = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    callProfessors(value);
    console.log(e.target);
    onSelect(value);
  };

  return (
    <FormControl variant="standard" sx={{ flex: 1 }}>
      <Label htmlFor="supervisor">
        <Localizer localeKey="SELECT_SEMINAR_SUPERVISOR_LABEL" />
      </Label>
      <Autocomplete
        disablePortal
        id="supervisor"
        loading={loading}
        loadingText="در حال جستجو..."
        noOptionsText=""
        onInputChange={changeHandler}
        options={options}
        sx={{
          marginBlockStart: "6px",
          ".MuiOutlinedInput-root": { borderRadius: 2 },
          ".MuiAutocomplete-endAdornment": { zIndex: 1 },
          ".MuiOutlinedInput-input": { height: ".8rem" },
        }}
        renderInput={(params) => (
          <TextInput
            {...params}
            placeholder={
              convertLocale({
                key: "SELECT_SEMINAR_SUPERVISOR_PLACEHOLDER",
              }).text
            }
          />
        )}
      />
    </FormControl>
  );
};

export default SupervisorSelect;
