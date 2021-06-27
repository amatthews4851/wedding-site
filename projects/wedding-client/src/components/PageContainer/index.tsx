import * as React from "react";

const PageContainer = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={"w-full pt-16 py-8 px-8".concat(props.className ?? "").trim()}
    />
  );
};

export default PageContainer;
