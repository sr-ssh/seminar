import React, { useRef, useState, ChangeEvent, KeyboardEvent } from "react";
import { TextField, Box, styled } from "@mui/material";

const BoxStyle = styled(Box)({
  direction: "rtl",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: 8,
  marginBlockEnd: 24,
});

const AutoAdvanceInput: React.FC = () => {
  const fieldCount: number = 5;
  const inputRefs = useRef<HTMLInputElement[]>(Array(fieldCount).fill(null));
  const [formFields, setFormFields] = useState<string[]>(
    Array(fieldCount).fill(""),
  );

  const handleChange =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const newFields = [...formFields];
      const inputValue = event.target.value.slice(-1);

      newFields[index] = inputValue;
      setFormFields(newFields);

      if (inputValue && index < fieldCount - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

  const handleBackspaceAndEnter = (
    e: KeyboardEvent<HTMLDivElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "Enter" && index < fieldCount - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <BoxStyle>
      {formFields.map((value, index) => (
        <TextField
          key={index}
          inputRef={(el) => (inputRefs.current[index] = el)}
          onChange={handleChange(index)}
          onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
          value={value}
          variant="outlined"
          size="small"
          sx={{ borderRadius: 8 }}
          inputProps={{
            style: {
              textAlign: "center",
              width: 14,
              height: 24,
              padding: 16,
            },
          }}
        />
      ))}
    </BoxStyle>
  );
};

export default AutoAdvanceInput;
