import Image from "next/image";
import LinkNext from "next/link";

import { Link } from "react-scroll";

import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import logoFooter from "../../assets/images/logo-footer.png";
import logoDesktop from "../../assets/images/logo.png";

export function Footer() {
  return (
    <footer className="bg-bg-secundary py-[5rem] tabletMD:py-[10rem]">
      <div className="mx-auto flex max-w-[1440px] flex-col pl-[4.2rem] tabletMD:flex-row tabletMD:items-center tabletMD:justify-between tabletMD:px-[2rem] laptopSM:px-[10rem]">
        <Link
          to="inicio"
          spy={true}
          duration={100}
          smooth={true}
          offset={-240}
          className="mb-[3rem] cursor-pointer tabletMD:mb-0 laptopLG:absolute laptopLG:hidden"
        >
          <Image src={logoFooter} alt="logo" />
        </Link>
        <Link
          to="inicio"
          spy={true}
          duration={100}
          smooth={true}
          offset={-240}
          className="hidden w-[342px] cursor-pointer laptopLG:block"
        >
          <Image src={logoDesktop} alt="" />
        </Link>
        <nav>
          <ul className="flex flex-col justify-around gap-[1.6rem] text-[1.8rem] font-[600] leading-[3.3rem] tabletMD:flex-row tabletMD:gap-[3.5rem] laptopSM:gap-[5rem]">
            <li className="links cursor-pointer text-white-400">
              <Link
                to="quem-somos"
                spy={true}
                duration={100}
                smooth={true}
                offset={-240}
              >
                Quem somos
              </Link>
            </li>

            <li className="links cursor-pointer text-white-400">
              <Link
                to="servicos"
                spy={true}
                duration={100}
                smooth={true}
                offset={-200}
              >
                Serviços
              </Link>
            </li>

            <li className="links cursor-pointer text-white-400">
              <Link
                to="inicio"
                spy={true}
                duration={100}
                smooth={true}
                offset={-240}
              >
                © NORDDEV
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-[5rem] flex gap-[2.1rem] tabletMD:mt-0 tabletMD:gap-[1.5rem]">
          <LinkNext
            href="https://www.linkedin.com/company/93205029/admin/feed/posts/"
            target="true"
          >
            <FaLinkedin className="social" />
          </LinkNext>
          <LinkNext href="https://www.instagram.com/nord.devv/" target="true">
            <FaInstagram className="social" />
          </LinkNext>
          <LinkNext href="https://github.com/Nord-Devv" target="true">
            <FaGithub className="social" />
          </LinkNext>
          <LinkNext
            href="https://api.whatsapp.com/send/?phone=5585992004530&text=Quero+ser+NORDDEV!&type=phone_number&app_absent=0"
            target="true"
          >
            <FaWhatsapp className="social" />
          </LinkNext>
        </div>
      </div>
    </footer>
  );
}
