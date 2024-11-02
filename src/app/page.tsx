import Image from "next/image";
import Navbar from "./component/Navbar"
import Slider from "./component/Slider"
import Uk from "./component/Uk"
import Ue from "./component/Ue"
import Ul from "./component/Ul"
import Ua from "./component/Ua"
import Zu from "./component/Zu"
import Head from "./component/Head"
import Footer from "./component/Footer"
import Css from "./component/Css"



function Home() {
  return (
    <div className="">
      <Navbar />
      <Slider />
      <Uk />
      <Ul />
      <Ue />
      <Zu />
      <Ua />
      <Head />
      <Css />
      <Footer />

    </div>
  );
}
export default Home