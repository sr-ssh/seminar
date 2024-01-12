import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const user = createDraftSafeSelector(
  (state: RootState) => state["user"],
  (state) => state,
);

const token = createDraftSafeSelector(
  (state: RootState) => state["token"],
  (state) => state,
);

export const userSelectors = {
  user,
  token,
};
