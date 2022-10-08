import { FormControl, InputLabel, Select } from "@mui/material";
import { STATUS_OPTION } from "../../../constants/sidebar";
import { useAppDispatch, useAppSelector } from "../../../store";
import { getStatus, setStatus } from "../../../store/charachterSlice";

export default function StatusFilter() {
  const dispatch = useAppDispatch();
  const defaultValue = useAppSelector(getStatus);
  return (
    <>
      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select
          onChange={(e) => {
            dispatch(setStatus(e.target.value as string));
          }}
          label="Status"
          native
          defaultValue={defaultValue}
        >
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
