import { Link } from "react-scroll";

import LinkNext from "next/link";

import Image from "next/image";

import logo from "../../assets/images/logo.png";

import { ButtonDefault } from "../ButtonDefault";

export function Header() {
  return (
    <header className="sticky top-0 z-10 w-full bg-bg-secundary">
      <div className="mx-auto flex max-w-[1440px] flex-col px-[1.4rem] pb-[1.5rem] tabletSM:px-[3rem] tabletLG:flex-row tabletLG:items-center tabletLG:justify-between tabletLG:pb-0">
        <LinkNext className="links" href="/">
          <Image
            src={logo}
            alt=""
            className="w-[25rem] px-[1.4rem] py-[4.6rem]"
          />
        </LinkNext>

        <nav className="max-w-full px-[1.4rem]">
          <ul className="flex items-center justify-between text-[1.3rem] text-white-400 tabletSM:text-[1.8rem] tabletLG:gap-[6rem]">
            <li>
              <Link
                activeClass="active"
                className="links"
                to="inicio"
                spy={true}
                duration={100}
                smooth={true}
                offset={-240}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="links"
                to="quem-somos"
                spy={true}
                duration={100}
                smooth={true}
                offset={-240}
              >
                Quem somos?
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="links"
                to="servicos"
                spy={true}
                duration={100}
                smooth={true}
                offset={-200}
              >
                Serviços
              </Link>
            </li>
          </ul>
        </nav>

        <ButtonDefault
          className="links hidden rounded-[6px] border-[1px] border-transparent bg-yellow-500 px-[21px] py-[7px] text-[1.8rem] text-black transition-all hover:border-[1px] hover:border-yellow-500 hover:bg-transparent hover:text-yellow-500 laptopMD:block"
          target="https://api.whatsapp.com/send/?phone=5585992004530&text=Quero+ser+NORDDEV!&type=phone_number&app_absent=0"
        >
          Solicite um orçamento
        </ButtonDefault>
      </div>
    </header>
  );
}
