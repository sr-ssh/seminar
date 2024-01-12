import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";

const DataGridSkeleton = () => {
  return (
    <div id="skeleton" style={{ width: "100%", height: "100%" }}>
      {Array.from({ length: 9 }, (_, index) => (
        <Box key={index} mb="12px">
          <Skeleton
            key={index}
            variant="rectangular"
            width="100%"
            height={56}
          />
        </Box>
      ))}
    </div>
  );
};
export default DataGridSkeleton;
