import { Label, Input } from "./StyledComponents";

export default function LabeledTextInput({ name, value, setValue, inputType }) {
  return (
    <div className="Form-InputWrapper">
      <Label htmlFor={name}>{name}</Label>
      <Input
        name={name}
        type={inputType || "text"}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}