import React from "react";

type ButtonProps = {
  buttonType?: string;
  children?: string;
  src?: string;
  target?: string;
  gaCategory?: string;
  gaLabel?: boolean;
  id?: string;
  dataTest?: string;
};

type CallOutProps = {
  title?: string;
  divider?: boolean;
  body?: string;
  backgroundColor?: string;
  buttons?: ButtonProps[];
};

const CallOut: React.FC<CallOutProps> = ({
  title = "This is a CallOut component",
  divider = false,
  body = [],
  backgroundColor = "grey-00",
  buttons = [],
}) => {
  return (
    <div style={{ backgroundColor }} className="callout">
      <h2>{title}</h2>
      {divider && <hr />}
      {body && body.length > 0 && (
        <div dangerouslySetInnerHTML={{ __html: body }} />
      )}
      <div className="buttons">
        {buttons.map((button, index) => (
          <a
            key={index}
            href={button.src || "#"}
            target={button.target || "_self"}
            className={`btn ${button.buttonType || "primary"}`}
            id={button.id}
            data-test={button.dataTest}
          >
            {button.children || "Click me"}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CallOut;
