import image1 from "../../assets/images/AndeanAlmond.png";
import image2 from "../../assets/images/BaliBliss.png";
import image3 from "../../assets/images/BreezyBeans.png";
import image4 from "../../assets/images/EthiopianYirgacheffe.png";
import image5 from "../../assets/images/GoldenSunrise.png";
import image6 from "../../assets/images/HarvestMoon.png";
import image7 from "../../assets/images/Indo-VietRoast.png";
import image8 from "../../assets/images/LazyDays.png";
import image9 from "../../assets/images/SavannaNoir.png";
import image10 from "../../assets/images/WalnutWonder.png";
import image11 from "../../assets/images/WildFire.png";

export const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
];
console.log(images[0].src);

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
