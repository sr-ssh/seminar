import React, { useRef, useState, ChangeEvent } from 'react';
import { TextField, Box, styled } from '@mui/material';

const BoxStyle = styled(Box)({
  direction: 'rtl',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 8,
  marginBlockEnd: 24,
});

const AutoAdvanceInput: React.FC = () => {
  const fieldCount: number = 5; // Number of TextField components
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [formFields, setFormFields] = useState<string[]>(
    Array(fieldCount).fill('')
  );

  const handleChange =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const newFields = [...formFields];
      newFields[index] = event.target.value;
      setFormFields(newFields);

      if (event.target.value && index < fieldCount - 1) {
        inputRefs.current[index + 1].focus();
      }
    };

  return (
    <BoxStyle>
      {formFields.map((value, index) => (
        <TextField
          key={index}
          inputRef={(el) => (inputRefs.current[index] = el)} // Assign ref element to the array
          onChange={handleChange(index)}
          value={value}
          variant="outlined"
          size="small"
          sx={{ borderRadius: 8 }}
          inputProps={{
            maxLength: 1, // Maximum one character
            style: {
              textAlign: 'center',
              width: 14,
              height: 24,
              padding: 16,
            }, // Text centered in the input field
          }}
        />
      ))}
    </BoxStyle>
  );
};

export default AutoAdvanceInput;
