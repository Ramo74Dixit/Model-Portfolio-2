import HeroText from './HeroText'
import HeroImage from './HeroImage'
import Footer from './Footer'
export default function MainPage() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-grow">
        <div className="w-[89%] h-[80%]   mt-3 flex">
          <div className="w-[49%] items-center justify-center  p-8 ">
          <HeroText />
          </div>
          <div className="w-[51%]  bg-orange-400 bg-cover">
          <HeroImage />
          </div>
        </div>
        <div className="w-[10%]  ml-auto bg-[#F7D9C4]"></div>
      </div>
      <Footer/>
    </div>
  );
}
