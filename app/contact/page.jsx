import { RiChat1Line, RiSmartphoneLine } from "react-icons/ri";
import Socials from "@/components/Socials";
import { fadeIn } from "@/variants";

const Contact = () => {
  return (
    <section className="min-h-screen pt-[225px]" id="contact">
      <div
        className="container mx-auto"
      >
        <div className="w-full xl:h-[700px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px]">
          <div className="flex flex-col md:flex-row h-full gap-[40px] md:gap-[60px] xl:gap-[90px]">
            {/* info */}
            <div className="w-full xl:pr-[70px] h-full">
              <h4 className="text-[26px] font-semibold font-primary uppercase  mb-6">
                Contact Us
              </h4>
              <p className="mb-9">
              Let’s build something great!
              </p>
              {/* contact items */}
              <div className="flex flex-col gap-[40px] mb-16">
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiChat1Line className="text-[28px] text-primary" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold uppercase  font-primary leading-none mb-2">
                      Chat to us
                    </h5>
                    <p className="mb-4">
                    Whether it’s a new extension or a full period restoration, we’re here to make the process seamless. Contact us now to get started on your next project.
                    </p>
                    <a
                      href="mailto:jc@form-construction.com"
                      className="text-primary hover:font-semibold transition-colors"
                    >
                      jc@form-construction.com
                    </a>
                  </div>
                </div> 
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiSmartphoneLine className="text-[28px] text-primary" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold uppercase  font-primary leading-none mb-2">
                      Phone
                    </h5>
                    <p className="mb-4">Mon-Sat from 7am to 6pm.</p>
                    <a
                      href="https://wa.me/353833131875"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-primary  hover:font-semibold transition-colors"
                    >
                      +353 (083) 313 1875
                    </a>
                  </div>
                </div>
              </div>
              <Socials
                containerStyles="flex gap-[40px]"
                iconStyles="text-primary text-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
