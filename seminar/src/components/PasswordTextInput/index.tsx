import { ButtonBase, InputAdornment } from "@mui/material";
import { TextInput } from "../TextInput";
import { Localizer } from "../../hooks/useGlobalLocales/Localizer";
import { useState } from "react";

const PasswordTextInput = ({ options }: { options: any }) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <TextInput
      id="password"
      type={showPass ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <ButtonBase onClick={() => setShowPass(!showPass)}>
              <Localizer localeKey="LOGIN_SHOW_PASSWORD" />
            </ButtonBase>
          </InputAdornment>
        ),
      }}
      fullWidth
      {...options}
    />
  );
};

export default PasswordTextInput;
