import Card from "../../molecules/Card/Card";
import nissanImage from "../../../assets/nissan.jpg";
import mcdonaldImage from "../../../assets/mcdonald.jpg";
import vid from "../../../assets/video.mp4";
import './CardComponent.css';

const CardComponent = ({variant='variant1'}) => {
  return (
    <>
      <div className="cards">
        <div className="card-container">
          <Card
            title={"Nissan"}
            description={
              "and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letra"
            }
            imageSource={nissanImage}
            textColor={variant == 'variant1' ? "black" : 'white'}
          ></Card>
        </div>
        <div className="card-container">
          <Card
            title={"MCD"}
            description={
              "and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letra"
            }
            imageSource={variant == 'variant1' ? mcdonaldImage : vid }
            textColor={variant == 'variant1' ? "black" : 'white'}
            isVideo={variant == 'variant1' ? false : true}
          ></Card>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
