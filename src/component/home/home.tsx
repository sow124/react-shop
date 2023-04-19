import Comp from "../Carousel/Carousel";
import FashionProduct from "../items/fationproductList"
import AccessoryProduct from"../items/accessoryproductList"
import DegitalProduct from "../items/degitalproductList";

function Home() {
  return (
    <>
      <Comp/>
      <FashionProduct/>
      <AccessoryProduct/>
      <DegitalProduct/>
    </>
  );
}

export default Home;