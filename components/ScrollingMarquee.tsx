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
  return (
    <div>
      <Marquee pauseOnHover autoFill>
        {phrases.map((phrase, index) => (
          <div key={index} className="my-0 mx-10 text-black ">
            {phrase}
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default ScrollingMarquee;
