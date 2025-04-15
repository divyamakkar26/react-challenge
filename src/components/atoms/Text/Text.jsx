import "./Text.css";

const Text = ({
  children,
  size = "20px",
  weight = "normal",
  color = "black",
  textAlignment = "",
}) => {
  const styles = {
    fontSize: size,
    fontWeight: weight,
    color,
    textAlign: textAlignment,
  };

  return (
    <span className="text-text" style={styles}>
      {children}
    </span>
  );
};

export default Text;
