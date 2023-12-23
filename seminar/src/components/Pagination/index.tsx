import { PaginationItem } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const PrevButton = () => (
  <img src="/assets/images/prev-button.svg" alt="previous-button" />
);

const NextButton = () => (
  <img src="/assets/images/next-button.svg" alt="next-button" />
);

export default function PaginationRounded() {
  return (
    <Pagination
      count={10}
      shape="rounded"
      color="primary"
      dir="rtl"
      renderItem={(item) => (
        <PaginationItem
          slots={{
            previous: NextButton,
            next: PrevButton,
          }}
          {...item}
        />
      )}
    />
  );
}
