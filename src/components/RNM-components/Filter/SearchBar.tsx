import { TextField, InputAdornment, Box } from "@mui/material";
import { Icon } from "@iconify/react";
import searchFill from "@iconify/icons-eva/search-fill";

export default function SearchBar() {
  return (
    <>
      <TextField
        fullWidth
        placeholder="Search..."
        label="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Box
                component={Icon}
                icon={searchFill}
                sx={{ color: "text.disabled", width: 20, height: 20 }}
              />
            </InputAdornment>
          ),
          type: "number",
        }}
      />
    </>
  );
}
