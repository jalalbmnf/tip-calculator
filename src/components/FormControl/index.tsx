import { FC, forwardRef, HTMLAttributes, Ref } from "react";

import { EFormControlType } from "../../ts/enums/formControl";

import "./index.scss";

interface IProps extends HTMLAttributes<HTMLElement> {
  type?: EFormControlType;
  placeholder?: string;
  className?: string;
  label?: string;
  prefix?: string;
  error?: string;
  value?: any;
}

const FormControl: FC<IProps> = forwardRef(
  (
    {
      type = EFormControlType.TEXT,
      placeholder = "0",
      className = "",
      label = "",
      prefix = "",
      error = "",
      value,
      ...others
    },
    ref: Ref<HTMLInputElement | HTMLTextAreaElement | any>
  ) => {
    const textarea = (
      <textarea
        {...{ type, placeholder, ref }}
        {...others}
        className="form-control__field-textarea"
      ></textarea>
    );
    const input = (
      <input
        {...{ type, placeholder, ref, value }}
        {...others}
        className="form-control__field-input"
      />
    );

    return (
      <div className={` ${className} form-control `}>
        <label>
          {label && <span className="form-control__label">{label}</span>}
          {!!error && <span className="form-control__error">{error}</span>}
        </label>
        <div className={` ${!!error ? "error" : ""} form-control__field`}>
          {prefix && (
            <img
              src={prefix}
              alt="prefix"
              className="form-control__field-prefix"
            />
          )}

          {type === EFormControlType.TEXTAREA ? textarea : input}
        </div>
      </div>
    );
  }
);

export default FormControl;
