import Text from "../../atoms/Text/Text";

const Tag = ({
  backColor = "red",
  text = "default",
  imageSvg = "",
  textColor = "white",
  textPadding = "0",
  logo = "",
}) => {
  const styles = {
    backgroundColor: backColor,
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    borderRadius: "45px",
    padding: "10px",
  };
  return (
    <>
      <div style={styles}>
        <img
          width="20px"
          height="20px"
          style={{ padding: "10px" }}
          src={logo}
        ></img>
        <Text textPadding={textPadding} color={textColor}>
          {text}
        </Text>
      </div>
    </>
  );
};

export default Tag;
