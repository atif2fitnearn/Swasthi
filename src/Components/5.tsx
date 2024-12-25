import { Timeline } from "./ui/timeline.tsx";
import { forwardRef } from "react";

interface ContentType {
    title: string;
    heading: string;  
    description: string;
    image: string;
}

const Data: ContentType[] = [
    {
        title: "Download App",
        heading: "",
        description: "Download Swasthi on your favourite device. Available on both iOS and Android platforms.",
        image: "Frame 2608478.png",
    },
    {
        title: "Create Account",
        heading: "7 days free trial",
        description: "Sign up easily using your email or social accounts like Google or Apple. Enjoy a 7-day free trial with full access to all premium features.",
        image: "Frame 2608479.png",
    },
    {
        title: "You're Done",
        heading: "Enjoy the Experience",
        description: "Explore the app's amazing features, track your progress, and share Swasthi with friends and family to inspire their health journey.",
        image: "Frame 2608479 (1).png",
    },
];

const HowitWorksMobile = forwardRef<HTMLElement>((_, ref) => {
  return (
  <>
    <section ref={ref} className="block md:hidden w-full">
      <Timeline data={Data} />
    </section>
  </>
  );
});


export default HowitWorksMobile;
