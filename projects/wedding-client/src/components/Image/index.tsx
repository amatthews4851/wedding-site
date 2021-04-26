const Image = ({
  width,
  height,
  alt,
  src,
  position,
  className,
}: {
  width: number;
  height: number;
  alt: string;
  src: string;
  position?: "left" | "right";
  className?: string;
}) => {
  return (
    <img
      className={"rounded-xl ".concat(className ?? "").trim()}
      style={{
        maxWidth: width,
        maxHeight: height,
        width: "auto",
        height: "auto",
        marginBottom: "1rem",
        marginLeft: position === "right" ? "1rem" : undefined,
        marginRight: position === "left" ? "1rem" : undefined,
      }}
      alt={alt}
      src={src}
    />
  );
};

export default Image;
