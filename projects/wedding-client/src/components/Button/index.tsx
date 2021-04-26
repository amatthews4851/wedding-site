import * as React from "react";

const BaseButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={"rounded-xl px-4 py-2 focus:outline-none "
        .concat(props.className ?? "")
        .trim()}
    />
  );
};

export const PrimaryButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <BaseButton
      {...props}
      className={"bg-primary ".concat(props.className ?? "").trim()}
    />
  );
};

export const SecondaryButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <BaseButton
      {...props}
      className={"bg-white text-black border border-black "
        .concat(props.className ?? "")
        .trim()}
    />
  );
};

const Button = ({
  variant = "primary",
  ...props
}: { variant?: "primary" | "secondary" } & React.ButtonHTMLAttributes<
  HTMLButtonElement
>) => {
  return variant === "primary" ? (
    <PrimaryButton {...props} />
  ) : (
    <SecondaryButton {...props} />
  );
};

export default Button;
