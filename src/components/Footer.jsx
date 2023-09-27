import React from "react";
import { RxGithubLogo } from "react-icons/rx";
import { BiLogoInstagram } from "react-icons/bi";
import { LiaTelegramPlane } from "react-icons/lia";

function Footer() {
  return (
    <div>
      <footer className="footer bg-base-300 items-center p-4 border-2xl text-neutral-content flex justify-between flex-grow">
        <aside className="items-center grid-flow-col text-primary text-[17px]">
          <p>Crud App with Json Server
 © 2023 - <span className="font-bold">by Sharifov Abdusalom</span></p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-3xl text-primary">
          <a href="https://github.com/Abdusalom05">
            <RxGithubLogo />
          </a>
          <a href="https://www.instagram.com/shar1fov_off/">
            <BiLogoInstagram />
          </a>
          <a href="https://t.me/Sharifov_Abdusalom">
            <LiaTelegramPlane />
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
