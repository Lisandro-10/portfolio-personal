import acmeLogo from "@/assests/logo-acme.png";
import quantumLogo from "@/assests/logo-quantum.png";
import echoLogo from "@/assests/logo-echo.png";
import celestialLogo from "@/assests/logo-celestial.png";
import pulseLogo from "@/assests/logo-pulse.png";
import apexLogo from "@/assests/logo-apex.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-4 md:py-10 lg:px-32 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 lg:gap-52 lg:justify-center flex-none">
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="Echo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="Apex Logo"
              className="logo-ticker-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
