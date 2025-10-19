import React from "react";
import TopButton from "../../components/button-tab-sections/TopButton";
import CustomButton from "../../components/button-tab-sections/CustomButton";
const ContactForm = () => {
  return (
    <div className="bg-color">
      <main>
        {/* --------------- logo and get in touch section start------------- */}
        <section className="mt-5">
          <div className="text-center text-2xl mt-7">
            <h3>
              <span className="text-white">Get in</span>{" "}
              <span className="text-blue-600">To</span>
              <span className="text-blue-500">u</span>
              <span className="text-blue-400">ch</span>
            </h3>

            <p className="mt-2 text-slate-400 text-sm">
              Have feedback or need some help?
            </p>
          </div>
        </section>
        {/* --------------- logo and get in touch section end------------- */}

        {/* --------------- card section start------------- */}
        <section className="flex justify-center items-center mt-14">
          <div className="card bg-gradient-to-r from-indigo-900 to-blue-700  rounded-lg text-white p-16">
            <div className="flex justify-around">
              <div>
                <label
                  className="text-sm text-slate-300 m-5"
                  htmlFor="username"
                >
                  Name
                </label>
                <br />
                <input
                  className="bg-color w-60 h-8 rounded-full mt-2 m-5 p-5 text-xs font-thin"
                  type="text"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label
                  className="text-sm text-slate-300 m-5"
                  htmlFor="username"
                >
                  E-MAIL
                </label>
                <br />
                <input
                  className="bg-color w-60 h-8 rounded-full mt-2 p-5 text-xs font-thin m-5"
                  type="text"
                  placeholder="Your E-Mail"
                />
              </div>
            </div>
            <div className="flex justify-around mt-7">
              <div>
                <label
                  className="text-sm text-slate-300 m-5"
                  htmlFor="username"
                >
                  SERVICES
                </label>
                <br />
                <input
                  className="bg-color w-60 h-8 rounded-full mt-2 p-5 text-xs font-thin m-5"
                  type="text"
                  placeholder="Select Services"
                />
              </div>

              <div>
                <label
                  className="text-sm text-slate-300 m-5"
                  htmlFor="username"
                >
                  PHONE
                </label>
                <br />
                <input
                  className="bg-color w-60 h-8 rounded-full mt-2 p-5 text-xs font-thin m-5"
                  type="text"
                  placeholder="Your E-Mail"
                />
              </div>
            </div>
            <div className="mt-7">
              <label className="text-sm text-slate-300 m-5" htmlFor="username">
                MESSAGE
              </label>
              <br />
              <input
                className="bg-color message-width h-32 rounded-3xl mt-2 px-10 text-xs font-thin m-5"
                type="text"
                placeholder="Type here..."
              />
            </div>

            <div className="flex justify-center mt-11">
              <CustomButton text="Send Message" type="secondary" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactForm;
