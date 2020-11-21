import React from "react";

const BlurView = ({ style, ...props }: React.AllHTMLAttributes<any>) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.4)",
        borderRadius: 5,
        backdropFilter: "blur(4px)",
        padding: "1em",
        ...(style ?? {}),
      }}
      {...props}
    />
  );
};

export default BlurView;
