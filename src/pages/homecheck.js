import { Container } from "react-bootstrap";
import BrandsLogo from "../components/BrandsLogo";
import FoodArea from "../components/FoodArea";
import HeroSlider from "../components/HeroSlider";
import SemiBanners from "../components/SemiBanners";

function checkhome() {
  
  return (
    <>
      <div>
        <HeroSlider/>
        <SemiBanners/>
        <FoodArea/>
        <BrandsLogo/>
      </div>
    </>
  )

}

export default checkhome;