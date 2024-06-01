import React, { useState } from "react";
import AccordionItem from "./FaqAccordion";
import { BiQuestionMark } from "react-icons/bi";

const Faq = () => {
  const [isExpertFaq,setIsExpertFaq] = useState(true);
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-12 dark:bg-dark lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20 relative ">
              <h2 className="mb-4 text-4xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Frequently asked questions
              </h2>
              <BiQuestionMark className="text-[7rem] absolute -top-9 max-md:-top-12 -right-9 max-md:-right-12 text-purple-900" />

              <p className="text-base text-body-color dark:text-dark-6 mt-10">
                <button className={`rounded-full p-2 w-28 border-2 m-2  text-white transform active:scale-90 transition-transform ${isExpertFaq?'bg-purple-950':'bg-gray-500'}`} onClick={()=>setIsExpertFaq(true)}>
                  Experts
                </button>
                <button className={`rounded-full p-2 w-28 border-2 m-2  text-white transform active:scale-90 transition-transform ${!isExpertFaq?'bg-purple-950':'bg-gray-500'}`} onClick={()=>setIsExpertFaq(false)}>
                  Attendees
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className={`grid lg:grid-cols-2 -mx-4 flex flex-wrap ${isExpertFaq?'visible':'hidden'}`}>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
        </div>
        <div className={`grid lg:grid-cols-2 -mx-4 flex flex-wrap ${!isExpertFaq?'visible':'hidden'}`}>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your second blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your second blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your second blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your second blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your second blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your second blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg p-2 max-md:text-sm">Can't find the answer you are looking for?</p>
          <a href="/" className="text-purple-900 font-bold lg:mr-52 max-md:text-center">Reach out to us</a>
        </div>
      </div>
    </section>
  );
};
export default Faq;
