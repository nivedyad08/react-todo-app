import React from "react";
import { Checkbox } from "@mui/material";

export default ({ checkClass, onChange, checked }) => {
  return (
    <Checkbox
      checked={checked.checked}
      disabled={checked.disabled_status}
      className={checkClass}
      sx={{
        color: "#9c27af",
        "&.Mui-checked": {
          color: "secondary",
        },
      }}
      onChange={onChange}
    />
  );
};
