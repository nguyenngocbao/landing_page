import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How does TapLink's NFC technology work?",
    answer: "TapLink uses near-field communication (NFC) that allows devices to instantly connect and communicate when tapped together or brought within a few centimeters.",
  },
  {
    question: "What devices and systems can I use with TapLink?",
    answer: "TapLink is compatible with any device enabled with NFC technology, including smartphones, tablets, laptops, and NFC tags. It also integrates with access control systems, transit stations, and more.",
  },
  {
    question: "How far apart can two devices be for TapLink connection?",
    answer:
      "Devices need to be within about 4 centimeters or 1.5 inches to connect via NFC. The close proximity provides security.",
  },
  {
    question: "What are some example uses for TapLink in daily life?",
    answer:
      "TapLink allows you to access transit, buildings, and services; share contacts or links; make purchases, and more with just a quick tap. It streamlines nearly any daily task.",
  },
];

export default Faq;