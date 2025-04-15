import Text from "../../atoms/Text/Text";
import "./Card.css";

const Card = ({
  imageSource,
  title,
  description,
  textColor = "white",
  isVideo = false,
}) => {
  return (
    <>
      <div style={{height:'338px'}}>
        {isVideo ? (
          <video autoPlay width="600" controls>
            <source src={imageSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img className="card-image" src={imageSource}></img>
        )}
      </div>
      <Text color={textColor}>{title}</Text>
      <Text color={textColor}>{description}</Text>
    </>
  );
};

export default Card;
