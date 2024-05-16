import React from "react";
import Sections from "./Sections";
import { Badge } from "./ui/badge";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <Sections className="flex flex-col gap-4 items-start">
      <Badge variant={"outline"}>Get in Touch</Badge>
      <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Contact me
      </h2>
      <div className="flex max-md:flex-col  gap-4 w-full">
        <ContactCard
          url="https://twitter.com/Moknine8"
          name="@Moknine8 "
          image="https://mk-portfolio-psi.vercel.app/assets/mok-9SYK2rEW.jpg"
          mediumImg="https://imgs.search.brave.com/TDgu_cz9I26MyeLNkxtVfTIfcKI-oJn5pn01FkecRq8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmVjdGV1cnMtbGli/cmUvYXBwbGljYXRp/b24tdHdpdHRlci1u/b3V2ZWF1LWxvZ28t/eC1mb25kLW5vaXJf/MTAxNy00NTQyNS5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw"
          description="1200"
        />
        <ContactCard
          url="https://www.linkedin.com/in/mokenineelhadj/"
          name="Moknine"
          image="https://mk-portfolio-psi.vercel.app/assets/mok-9SYK2rEW.jpg"
          mediumImg="https://imgs.search.brave.com/0onedxgdJWLsAOrzVTbco23TxXLuDJGb_uBUL74bc7k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
          description="450"
        />
        <ContactCard
          url="mailto:mokninemoknine999@gmail.com"
          name="mokninemoknine999@gmail.com "
          image="https://mk-portfolio-psi.vercel.app/assets/mok-9SYK2rEW.jpg"
          mediumImg="https://imgs.search.brave.com/MxyOJIm4f_WmW3ohVu_WPqHiFZvWOAwS-Psd26TVWHk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZmF2cG5nLmNvbS83/LzgvNy9nbWFpbC1s/b2dvLWVtYWlsLWdv/b2dsZS1wbmctZmF2/cG5nLUo3dUhCSlMw/cHF0eTFuUTljVGV3/MnlkNkpfdC5qcGc"
          description="Shoot me a text for any service"
        />
      </div>
    </Sections>
  );
};

export default Contact;
