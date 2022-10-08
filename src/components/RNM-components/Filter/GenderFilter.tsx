import { FormControl, InputLabel, Select } from "@mui/material";
import { GENDER_OPTION } from "../../../constants/sidebar";

export default function GenderFilter() {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel>Gender</InputLabel>
        <Select label="Gender" native>
          <optgroup label="Gender">
            {GENDER_OPTION.map((gender) => (
              <option key={gender.label} value={gender.value}>
                {gender.value}
              </option>
            ))}
          </optgroup>
        </Select>
      </FormControl>
    </>
  );
}
