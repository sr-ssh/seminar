import { Button, CircularProgress } from "@mui/material";
import { ReactNode, useState } from "react";

const LoadingButton = ({
  onSubmit,
  children,
  buttonProps,
}: {
  onSubmit: Function;
  children: ReactNode;
  buttonProps?: any;
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    await onSubmit();
    setLoading(false);
  };

  return (
    <Button
      variant="contained"
      size="large"
      fullWidth
      onClick={handleClick}
      disabled={loading}
      {...buttonProps}
    >
      {loading ? <CircularProgress size={25} /> : <>{children}</>}
    </Button>
  );
};

export default LoadingButton;
