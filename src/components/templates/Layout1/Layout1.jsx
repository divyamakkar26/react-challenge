import Text from "../../atoms/Text/Text";
import Tag from "../../molecules/Tag/Tag";
import "./Layout1.css";
import logo from "../../../assets/agata-logo.svg";
import CardComponent from "../../organisms/CardComponent/CardComponent";

const Layout1 = () => {
  return (
    <div className="page1-container">
      <div className="header-container">
        <Tag
          textColor="white"
          text="ESTUDIO AGATA"
          backColor="black"
          textPadding="0"
          logo={logo}
        ></Tag>
        <Text className="header" size="24px" weight="normal" color="black">
          ES HORA DE QUE DEJES
        </Text>
      </div>
      <Text size="30px" weight="bold">
        Lorem Ipsum is simply dummy text{" "}
      </Text>
      <Text>
        ext ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letra
      </Text>
     <CardComponent variant="variant1"></CardComponent>
    </div>
  );
};

export default Layout1;
