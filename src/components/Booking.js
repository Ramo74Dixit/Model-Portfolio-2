import HeroImage from './HeroImage';
import Footer from './Footer';
function Booking() {
  return (
    <div className="h-screen flex flex-col  ">
      <div className="flex flex-grow">
        <div className="w-[89%] h-[80%] mt-3 flex">
          <div className="w-[49%] mt-0  items-center justify-center ">
            <div className="relative ml-12">
              <h3 className="nunito-prof !font-[600] pb-4">Book Model</h3>
              <form className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <label className="w-48" htmlFor="date">Select Date*</label>
                  <input
                    className="input-field border-[#D9D9D9]"
                    type="date"
                    id="date"
                  />
                </div>
                <div className="flex gap-4">
                  <label className="w-48" htmlFor="time">Select Time*</label>
                  <input
                    className="input-field border-[#D9D9D9]"
                    type="time"
                    id="time"
                  />
                </div>
                <div className="flex gap-4">
                  <label className="w-48" htmlFor="pname">Photographer Name</label>
                  <input
                    className="input-field border-[#D9D9D9]"
                    type="text"
                    id="pname"
                  />
                </div>
                <div className="flex gap-4">
                  <label className="w-48" htmlFor="email">Email Address</label>
                  <input
                    className="input-field border-[#D9D9D9]"
                    type="email"
                    id="email"
                  />
                </div>
                <div className="flex gap-4">
                  <label className="w-48" htmlFor="phone">Phone Number</label>
                  <input
                    className="input-field border-[#D9D9D9]"
                    type="number"
                    id="phone"
                  />
                </div>
                <div className="flex gap-4">
                  <label className="w-48" htmlFor="place">Shooting Place*</label>
                  <input
                    className="input-field border-red-700"
                    type="text"
                    id="place"
                  />
                </div>
                <div className="flex gap-4">
                  <label className="w-48" htmlFor="location">Shooting Location*</label>
                  <input
                    className="input-field border-[#D9D9D9]"
                    type="text"
                    id="location"
                  />
                </div>
                <div className="flex gap-4">
                  <label className="w-48" htmlFor="meet">Meeting Point*</label>
                  <input
                    className="input-field border-[#D9D9D9] border-solid"
                    type="text"
                    id="meet"
                  />
                </div>
                <div className="flex gap-4">
                  <label className="w-48" htmlFor="shoot">Shooting Concept</label>
                  <input
                    className="input-field border-[#D9D9D9]"
                    type="text"
                    id="shoot"
                  />
                </div>
                <div className="flex gap-4">
                  <label className="w-48" htmlFor="cloth">Clothing Type</label>
                  <input
                    className="input-field border-[#D9D9D9]"
                    type="text"
                    id="cloth"
                  />
                </div>
                <div className="flex gap-4">
                  <label className="w-48" htmlFor="shoes">Shoes Type</label>
                  <input
                    className="input-field border-[#D9D9D9]"
                    type="text"
                    id="shoes"
                  />
                </div>
                <div className="flex gap-4">
                  <label className="w-48" htmlFor="items">Items Type</label>
                  <input
                    className="input-field border-[#D9D9D9]"
                    type="text"
                    id="items"
                  />
                </div>
                <div className="flex gap-4">
                  <label className="w-48" htmlFor="makeup">Makeup Type</label>
                  <input
                    className="input-field border-[#D9D9D9]"
                    type="text"
                    id="makeup"
                  />
                </div>
                <div className="flex gap-4">
                  <label className="w-48" htmlFor="other">Others</label>
                  <input
                    className="input-field border-[#D9D9D9]"
                    type="text"
                    id="other"
                  />
                </div>
                <button type="submit" className="submit-btn bg-cyan-950 text-white w-[100px]">Submit</button>
              </form>
            </div>
          </div>
          <div className="w-[51%] bg-orange-400 bg-cover">
            <HeroImage />
          </div>
        </div>
        <div className="w-[10%] ml-auto bg-[#F7D9C4]"></div>
      </div>
      <div className='mt-3'>
          <Footer/>
        </div>
    </div>
  );
}

export default Booking;
