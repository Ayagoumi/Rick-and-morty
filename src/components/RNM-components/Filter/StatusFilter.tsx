import { FormControl, InputLabel, Select } from "@mui/material";
import { STATUS_OPTION } from "../../../constants/sidebar";

export default function StatusFilter() {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select label="Status" native>
          <optgroup label="Status">
            {STATUS_OPTION.map((status) => (
              <option key={status.label} value={status.value}>
                {status.value}
              </option>
            ))}
          </optgroup>
        </Select>
      </FormControl>
    </>
  );
}
