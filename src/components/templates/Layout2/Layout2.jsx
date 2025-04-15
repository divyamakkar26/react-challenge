import Text from "../../atoms/Text/Text";
import Card from "../../molecules/Card/Card";
import Tag from "../../molecules/Tag/Tag";
import "./Layout2.css";
import nissanImage from "../../../assets/nissan.jpg";
import vid from "../../../assets/video.mp4";
import logo from "../../../assets/carraci-logo.svg";
import CardComponent from "../../organisms/CardComponent/CardComponent";

const Layout2 = () => {
  return (
    <>
      <div className="page2-container">
        <div className="header2-container">
          <Tag
            logo={logo}
            textColor="black"
            text="ESTUDIO AGATA"
            backColor="white"
            textPadding="0"
          ></Tag>
        </div>
        <Text textAlignment="end" color="white" size="30px" weight="bold">
          Lorem Ipsum is simply dummy text{" "}
        </Text>
        <Text color="white">
          ext ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letra
        </Text>
        <CardComponent variant="variant2"/>
      </div>
    </>
  );
};

export default Layout2;
