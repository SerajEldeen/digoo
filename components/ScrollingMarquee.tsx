"use client";
import Marquee from "react-fast-marquee";
function ScrollingMarquee() {
  const phrases: string[] = [
    "✨ أصنع محفظتك الخاصة",
    "جودة عالية",
    "شغل يدوي 100%",
    "توصيل لكل المحافظات",
    "خصومات خاصة للكميات ✨",
  ];
  const Elements: string[] = [...phrases, ...phrases];
  return (
    <div className="bg-amber-950 p-2.5">
      <Marquee pauseOnHover speed={60} loop={0} className="bg-[#8B5E3C]">
        {Elements.map((phrase, index) => (
          <div key={index} className="my-0 mx-10 text-white">
            {phrase}
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default ScrollingMarquee;
