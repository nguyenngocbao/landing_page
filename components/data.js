import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/service.png";
import benefitTwoImg from "../public/img/service1.png";



const benefitOne = {
  title: "A Tap Opens a World of Convenience",
  desc: "TapLink's NFC technology enables instant device connections, allowing a simple tap to unlock seamless, automated conveniences that streamline life.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Smart device connectivity",
      desc: "TapLink's NFC technology enables instant connections between devices when tapped.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Convenience",
      desc: "With just a simple tap, users can automate tasks and processes.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Smart living",
      desc: "TapLink unlocks a world of instant and seamless experiences.",
      icon: <SunIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Tap to Connect - Brings the Smart Future",
  desc: "TapLink leverages NFC technology and simple tap interactions to streamline connectivity between devices and systems, pioneering an automated, efficient, and seamless smart future.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "TapLink utilizes NFC technology",
      desc: "Integrates NFC chips into everyday objects like phones, keys, cards, etc.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Enables simple tap interactions",
      desc: "Replaces complex actions like swiping, typing, inserting, etc.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Pioneers an automated, smart future",
      desc: "Allows connectivity between devices/systems to automate functions and processes.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
