import { MailIcon, HomeIcon, PhoneCall, MapPin } from "lucide-react";
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section id="contact-section">
      <div className="pt-16 container mx-auto">
        {/* Text & Illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text  */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Get in touch.</h1>
            <p className="subtitle max-w-[400px]">
              Always open to opportunities and fresh ideas. Feel free to connect with me through email, phone, or social media. Let's make something amazing happen!
            </p>
          </div>
          {/* illustration  */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info text & form  */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text  */}
          <div className="flex flex-col gap-y-8 xl:gap-y-4 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* address  */}
            <div className="flex items-center gap-x-8">
              <MapPin size={18} className="text-primary" />
              <div>
                Shantinagar, Dhaka
              </div>
            </div>
            {/* mail  */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <a href="mailto:sarwar76200@gmail.com">sarwar76200@gmail.com</a>
            </div>
            {/* phone  */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <a href="tel:008801874116935">+880 187411 6935</a>
            </div>
          </div>
          <Form />
        </div>
      </div>

    </section>
  );
};

export default Contact;
