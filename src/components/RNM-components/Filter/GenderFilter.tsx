import { FormControl, InputLabel, Select } from "@mui/material";
import { GENDER_OPTION } from "../../../constants/sidebar";
import { useAppDispatch, useAppSelector } from "../../../store";
import { getGender, setGender } from "../../../store/charachterSlice";

export default function GenderFilter() {
  const dispatch = useAppDispatch();
  const defaultValue = useAppSelector(getGender);

  return (
    <>
      <FormControl fullWidth>
        <InputLabel>Gender</InputLabel>
        <Select
          onChange={(e) => {
            dispatch(setGender(e.target.value as string));
          }}
          label="Gender"
          native
          defaultValue={defaultValue}
        >
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
