import { InputHTMLAttributes } from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (value: string) => void;
  label: string;
  columnClass?: string;
  id?: string;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  label,
  columnClass,
  id,
  ... inputProps
}: InputProps) => {
  return (
    <div className={`field column ${columnClass}`}>
      <label className="label" htmlFor="inputSku">
        {label}
      </label>
      <div className="control">
        <input
          type="text"
          className="input"
          id={id}
          {...inputProps}
          onChange={(event) => {
            if (onChange) {
              onChange(event.target.value);
            }
          }}     
        />
      </div>
    </div>
  );
};
