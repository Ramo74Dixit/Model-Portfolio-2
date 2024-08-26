import HeroImage from './HeroImage';
import Footer from './Footer';

function Booking() {
  return (
    <div className="h-screen flex flex-col mt-[60px] md:mt-0 relative z-10">
      <div className="flex flex-grow">
        <div className="w-full h-auto mt-3 flex">
          <div className="md:w-[39vw] w-full mt-0 items-center justify-center">
            <div className="sm:items-center sm:w-full sm:p-15 relative min-h-screen flex items-center justify-center bg-[white] p-6">
              <div className="w-full max-w-lg bg-white shadow-md p-6">
                <h3 className="nunito-prof !font-semibold pb-4 text-xl text-gray-800 text-center">Book Model</h3>
                <form className="flex flex-col gap-4">
                  {/* Form fields */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="date">Select Date*</label>
                    <input className="input-field border border-gray-500 p-2 shadow-sm" type="date" id="date" required />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="time">Select Time*</label>
                    <input className="input-field border border-gray-500 p-2 shadow-sm" type="time" id="time" required />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="pname">Photographer Name</label>
                    <input className="input-field border border-gray-500 p-2 shadow-sm" type="text" id="pname" />
                  </div>
                  {/* More form fields */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="email">Email Address</label>
                    <input className="input-field border border-gray-500 p-2 shadow-sm" type="email" id="email" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="phone">Phone Number</label>
                    <input className="input-field border border-gray-500 p-2 shadow-sm" type="number" id="phone" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="place">Shooting Place*</label>
                    <input className="input-field border border-gray-500 p-2 shadow-sm" type="text" id="place" required />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="location">Shooting Location*</label>
                    <input className="input-field border border-gray-500 p-2 shadow-sm" type="text" id="location" required />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="meet">Meeting Point*</label>
                    <input className="input-field border border-gray-500 p-2 shadow-sm" type="text" id="meet" required />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="shoot">Shooting Concept</label>
                    <input className="input-field border border-gray-500 p-2 shadow-sm" type="text" id="shoot" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="cloth">Clothing Type</label>
                    <input className="input-field border border-gray-500 p-2 shadow-sm" type="text" id="cloth" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="shoes">Shoes Type</label>
                    <input className="input-field border border-gray-500 p-2 shadow-sm" type="text" id="shoes" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="items">Items Type</label>
                    <input className="input-field border border-gray-500 p-2 shadow-sm" type="text" id="items" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="makeup">Makeup Type</label>
                    <input className="input-field border border-gray-500 p-2 shadow-sm" type="text" id="makeup" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="other">Others</label>
                    <input className="input-field border border-gray-500 p-2 shadow-sm" type="text" id="other" />
                  </div>
                  <button type="submit" className="submit-btn bg-cyan-950 text-white w-full sm:w-[100px] py-2 hover:bg-cyan-800 transition">Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div className="hidden sm:block md:bg-white md:w-[60vw] md:h-full md:bg-cover md:overflow-hidden p-4">
            <HeroImage className="md:w-full md:h-full md:p-10 md:object-cover" />
          </div>
        </div>
        <div className="md:w-[10%] md:ml-auto md:bg-[#F7D9C4]"></div>
      </div>
      <div className="mt-3">
        <Footer />
      </div>
    </div>
  );
}

export default Booking;
