import { TextareaHTMLAttributes } from "react";

interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  onChange?: (value: string) => void;
  label: string;
  columnClass?: string;
  id?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  onChange,
  label,
  columnClass,
  id,
  ...textareaProps
}: TextAreaProps) => {
  return (
    <div className={`field column ${columnClass}`}>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <div className="control">
        <textarea
          className="textarea"
          id={id}
          {...textareaProps}
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
