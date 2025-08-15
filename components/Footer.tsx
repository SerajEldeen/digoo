import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-6  bg-gray-500 w-full  text-white  flex flex-col justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={100}
            height={100}
            alt="LogoImg"
          />
        </Link>
        <h2 className="italic font-bold pt-4">أنت تأخذ قطعة صنعت لك بحب</h2>
      </div>
      <hr className="border-t-2  border-gray-200 w-full my-6" />
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-5 pb-2.5">
          <Link
            href="https://www.facebook.com/khadigaamohamed2"
            target="_blank"
            className="transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-110"
          >
            <Image
              src="/images/facebook.png"
              width={40}
              height={40}
              alt="facebook"
            />
          </Link>
          <Link
            href="https://www.instagram.com/khadigaa071/"
            target="_blank"
            className="transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-110"
          >
            <Image
              src="/images/instagram.png"
              width={40}
              height={40}
              alt="instagram"
            />
          </Link>
          <Link
            href="https://www.tiktok.com/@digoo512"
            target="_blank"
            className="transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-110"
          >
            <Image
              src="/images/tiktok.png"
              width={40}
              height={40}
              alt="tiktok"
            />
          </Link>
        </div>
        <p className="text-sm mt-2 opacity-80">جميع حقوق النشر محفوظة © 2030</p>
      </div>
    </footer>
  );
}

export default Footer;
