import React from "react";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";

interface ModalComponentProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Paper>
        <>{children}</>
      </Paper>
    </Modal>
  );
};
