import { TextField, InputAdornment, Box } from "@mui/material";
import { Icon } from "@iconify/react";
import searchFill from "@iconify/icons-eva/search-fill";
import { useAppDispatch, useAppSelector } from "../../../store";
import { getName, setName } from "../../../store/charachterSlice";

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const defaultValue = useAppSelector(getName);

  return (
    <>
      <TextField
        fullWidth
        placeholder="Search..."
        label="Search"
        value={defaultValue}
        onChange={(e) => {
          dispatch(setName(e.target.value as string));
        }}
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
          type: "string",
        }}
      />
    </>
  );
}
