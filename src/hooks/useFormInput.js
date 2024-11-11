import { useState } from "react";

export default function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (ev) => {
    setValue(ev.target.value);
  };

  const inputProps = {
    value: value,
    onChange: handleChange,
  };

  return inputProps;
}
