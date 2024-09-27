import { Avatar, AvatarGroup, Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../styles/theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase, array }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // console.log(array);
  return (
    <Box width="100%" m="0 10px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <AvatarGroup total={array.length}>
            {array.slice(0, 3).map((item, i) => (
              <Avatar
                key={i}
                alt="Remy Sharp"
                src={item["img"] === undefined ? item?.service_pic : item?.img}
              />
            ))}
          </AvatarGroup>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h8" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h9"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
