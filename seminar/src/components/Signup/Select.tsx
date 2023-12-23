import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { SelectChangeEvent } from "@mui/material/Select";
import { useTheme } from "@mui/material";
import { Label } from "../Label";
import { Localizer } from "../../hooks/useGlobalLocales/Localizer";
import { CustomSelect } from "../Select";

const BasicSelect = ({
  labelLocalKey,
  placeHolder,
  onChange,
}: {
  labelLocalKey: string;
  placeHolder: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}) => {
  const [age, setAge] = React.useState("");
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
    onChange(event as any);
  };

  return (
    <FormControl fullWidth>
      <Label htmlFor={labelLocalKey}>
        <Localizer localeKey={labelLocalKey} />
      </Label>
      <CustomSelect
        displayEmpty
        id={labelLocalKey}
        value={age}
        onChange={(e: any) => handleChange(e)}
        renderValue={(selected: any) => {
          if (selected.length === 0) {
            return (
              <em style={{ color: theme.palette.trunks.light }}>
                <Localizer localeKey={placeHolder} />
              </em>
            );
          }
          return selected;
        }}
      >
        <MenuItem disabled value="">
          <em>
            <Localizer localeKey={placeHolder} />
          </em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomSelect>
    </FormControl>
  );
};

export default BasicSelect;
