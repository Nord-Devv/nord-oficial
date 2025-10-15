"use client";

import Image from "next/image";

import bgAboutMobile from "../../assets/images/bg-about-mobile.png";
import bgAboutDesktop from "../../assets/images/bg-about-desktop.png";
import imageAbout from "../../assets/images/banner-new.png";
import imageAboutResponsive from "../../assets/images/banner-responsive.png"
import imgDesktop from "../../assets/images/home-desktop.png";
import bgDesktop from "../../assets/images/Vector-5.png";
import bgNotebook from "../../assets/images/Vector-3.png";

import { ButtonDefault } from "../../components/ButtonDefault";
import { ImageServicesDefault } from "../../components/ImageServicesDefault";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PartnerCompanies } from "@/components/PartnerCompanies";

import design from "../../assets/images/design.png";
import software from "../../assets/images/desenv.png";
import suporte from "../../assets/images/support.png";
import automocao from "../../assets/images/automacao_de_processos.png";
import integracao from "../../assets/images/integracao.png";
import manutencao from "../../assets/images/manutencao_sistemas.png";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [aboutAosAnimation, setAboutAosAnimation] = useState("fade-down");

  useEffect(() => {
    Aos.init();

    const handleResize = () => {
      if (window.innerWidth >= 950) {
        setAboutAosAnimation("fade-right");
      } else {
        setAboutAosAnimation("fade-down");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <section id="inicio" className="py-[4rem] tabletLG:py-[15rem]">
        <Image
          src={bgDesktop}
          className="absolute top-10 z-[-10] tabletLG:bottom-[-15rem] tabletLG:left-0 tabletLG:top-auto tabletLG:block"
          alt=""
        />

        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center overflow-hidden text-center tabletLG:flex tabletLG:flex-row tabletLG:items-center laptopSM:gap-[2.5rem]">
          <div
            className="w-[680px] min-w-[335px] max-w-full px-[5px] pr-[8px] tabletLG:text-left"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="mb-[2.4rem] text-[4.5rem] font-bold text-white tabletSM:mx-auto tabletSM:max-w-[520px] tabletSM:text-[6rem] tabletMD:max-w-[590px] tabletMD:text-[6.5rem] tabletLG:text-[5.4rem] laptopSM:ml-0 laptopSM:max-w-full laptopSM:text-[5.6rem] laptopMD:text-[7rem] laptopLG:text-[7.1rem]">
              Bem-vindos a <span className="text-yellow-500">Nord Dev</span>
            </h1>
            <p className="text-[1.3rem] tabletSM:text-[1.8rem] tabletMD:text-[2.4rem] tabletLG:text-[1.6rem] laptopSM:text-[1.8rem] laptopMD:text-[2rem] laptopLG:text-[2.1rem]">
              Transformando ideias em soluções digitais que unem tecnologia e
              criatividade, moldando o futuro e impulsionando o amanhã com
              inovação e excelência.
            </p>

            <div className="flex items-center justify-center gap-[2rem] pt-[2.4rem] tabletMD:gap-[4.4rem] tabletLG:justify-start">
              <ButtonDefault
                className="rounded-[4px] border-[1px] border-transparent bg-yellow-500 px-[1.3rem] py-[0.9rem] text-[1.5rem] font-[600] text-nord-neutral-10 transition-all hover:border-[1px] hover:border-yellow-500 hover:bg-transparent hover:text-yellow-500 tabletSM:rounded-[9px] tabletSM:text-[2rem] tabletMD:px-[2rem] tabletLG:text-[1.8rem] laptopMD:text-[2.1rem]"
                target="https://api.whatsapp.com/send/?phone=5585992004530&text=Quero+ser+NORDDEV!&type=phone_number&app_absent=0"
              >
                Entre em Contato
              </ButtonDefault>
            </div>
          </div>

          <Image
            className="mt-[5rem] w-[680px] min-w-[340px] max-w-full pl-[1.5rem] tabletLG:mt-0 tabletLG:pl-0"
            src={imgDesktop}
            alt=""
            data-aos="zoom-in"
            data-aos-duration="1000"
          />
        </div>

        <Image
          src={bgNotebook}
          className="absolute bottom-[-20rem] right-0 z-[-10] tabletLG:bottom-[10rem] tabletLG:right-0 tabletLG:z-[-1] tabletLG:block"
          alt=""
        />
      </section>

      <section
        className="relative flex max-w-[2000px] flex-col overflow-hidden tabletLG:flex-row tabletLG:justify-between laptopSM:mx-auto laptopSM:items-center laptopLG:justify-between"
        id="quem-somos"
      >
        <div
          className="relative flex h-[460px] w-full items-center justify-center border-t-[1rem] border-yellow-500 tabletMD:h-[480px] tabletLG:h-[550px] tabletLG:w-[60%] tabletLG:justify-start tabletLG:border-l-[1.3rem] tabletLG:border-t-0 laptopSM:relative laptopLG:h-[633px] laptopLG:w-[60%]"
          data-aos={aboutAosAnimation}
          data-aos-duration="1000"
        >
          <Image
            className="border-top -z-10 block h-full w-full tabletLG:hidden"
            src={bgAboutMobile}
            alt=""
          />
          <Image
            className="absolute hidden h-full tabletLG:block"
            src={bgAboutDesktop}
            alt=""
            data-aos-duration="1000"
          />

          <div className="absolute flex max-w-[656px] flex-col justify-center gap-[1.3rem] px-[2rem] pb-[3.5rem] tabletSM:pl-[2rem] tabletLG:w-full tabletLG:pr-[8rem] laptopSM:pb-0 laptopMD:ml-[3rem] laptopMD:w-full laptopMD:px-0 laptopMD:pr-[5rem] laptopLG:ml-[8rem] laptopLG:max-w-[656px] laptopLG:pr-0">
            <h2 className="mb-[1.3rem] flex items-center justify-center gap-[1.9rem] text-center text-[1.5rem] font-[400] before:h-[1px] before:w-[3rem] before:bg-white after:h-[1px] after:w-[3rem] after:bg-white tabletSM:text-[1.6rem] tabletMD:text-[2.3rem] tabletLG:text-[2rem] laptopMD:text-[2.3rem] laptopLG:text-[2.9rem]">
              SOBRE
            </h2>

            <p className="text-[1.5rem] font-[600] tabletSM:text-[1.9rem] tabletMD:text-[2.5rem] laptopMD:text-[3rem] laptopLG:text-[3.9rem]">
              Criando e melhorando sistemas com{" "}
              <span className="text-key">TECNOLOGIA</span>,{" "}
              <span className="text-key">INOVAÇÃO</span> &{" "}
              <span className="text-key">SEGURANÇA</span>
            </p>

            <p className="text-[1.4rem] tabletSM:text-[1.6rem] tabletMD:text-[1.8rem] tabletLG:text-[1.9rem] laptopMD:text-[1.9rem] laptopLG:text-[1.9rem]">
              A Nord Dev é sua parceira estratégica na criação de soluções
              digitais completas. Mais do que desenvolver tecnologia, nosso foco
              é resolver desafios de negócio com projetos de alta performance.
            </p>
            <p className="text-[1.4rem] tabletSM:text-[1.6rem] tabletMD:text-[1.8rem] tabletLG:text-[1.9rem] laptopMD:text-[1.8rem] laptopLG:text-[1.9rem]">
              Combinamos criatividade, conhecimento técnico e visão de mercado
              para impulsionar a presença online e construir o futuro digital da
              sua empresa.
            </p>
          </div>
        </div>

        <Image
          className="relative top-[-90px] -z-20 block w-full tabletMD:top-[-100px] tabletLG:hidden laptopSM:top-[-130px]"
          src={imageAboutResponsive}
          alt=""
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <Image
          className="absolute right-0 -z-10 hidden h-[550px] max-w-[1200px] object-cover tabletLG:block tabletLG:w-[60%] laptopLG:h-[633px] laptopLG:w-[60%]"
          src={imageAbout}
          alt=""
          data-aos="fade-left"
          data-aos-duration="1000"
        />
      </section>

      {/* /// Sessão Empresas Parceiras */}
      <section className="flex w-full justify-center py-[2rem]">
        <PartnerCompanies />
      </section>

      <section
        className="mx-auto my-[2.5rem] flex max-w-[1440px] flex-col items-center justify-center tabletSM:flex-wrap"
        id="servicos"
      >
        <h1 className="flex items-center justify-center gap-[1.5rem] text-[3.4rem] font-[200] before:h-[1px] before:w-[4.5rem] before:bg-white after:h-[1px] after:w-[4.5rem] after:bg-white laptopSM:text-[5.9rem]">
          Nossos
        </h1>
        <h3 className="mb-[2.4rem] text-[3.5rem] font-bold laptopSM:text-[6rem]">
          Serviços
        </h3>

        <div className="flex flex-col items-center justify-center pt-[4rem] tabletSM:flex-row tabletSM:flex-wrap tabletSM:gap-[8%]">
          <ImageServicesDefault
            src={software}
            title="Desenvolvimento de Software"
            description="Desenvolvemos soluções sob medida com sistemas robustos, seguros e intuitivos, conectando você aos seus clientes."
          ></ImageServicesDefault>

          <ImageServicesDefault
            src={design}
            title="Design UX/UI"
            description="Transformamos ideias em experiências visuais marcantes, com interfaces modernas, intuitivas e envolventes."
          ></ImageServicesDefault>

          <ImageServicesDefault
            src={manutencao}
            title="Manutenção de Sistemas"
            description="Cuidamos da atualização, estabilidade e desempenho dos seus sistemas, garantindo um funcionamento eficiente."
          ></ImageServicesDefault>

          <ImageServicesDefault
            src={automocao}
            title="Automação de Processos"
            description="Otimização e automação de fluxos de trabalho para aumentar a produtividade e reduzir erros operacionais."
          ></ImageServicesDefault>

          <ImageServicesDefault
            src={integracao}
            title="Integração de Sistemas"
            description="Conectamos diferentes plataformas e sistemas para que sua empresa funcione de forma integrada e inteligente."
          ></ImageServicesDefault>

          <ImageServicesDefault
            src={suporte}
            title="Suporte Técnico"
            description="Atendimento ágil e especializado para resolver problemas e manter suas operações em pleno funcionamento."
          ></ImageServicesDefault>
        </div>
      </section>

      <section className="relative flex w-full items-center justify-center bg-bg-request bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative flex max-w-[1330px] flex-col items-center justify-center px-[3.5rem] py-[100px] text-center">
          <h3
            className="mb-[2rem] flex items-center justify-center gap-[1.5rem] text-[1.3rem] font-[300] before:h-[1px] before:w-[3rem] before:bg-white after:h-[1px] after:w-[3rem] after:bg-white tabletSM:text-[2rem] tabletMD:text-[2.5rem] laptopLG:text-[4rem]"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Vamos solicitar o seu orçamento
          </h3>
          <h2
            className="pb-[5rem] text-[3.6rem] font-[700] tabletSM:px-[6rem] tabletSM:text-[5rem] tabletMD:px-[3rem] laptopSM:text-[7rem]"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            E garantir o{" "}
            <span className="text-yellow-500">sucesso da sua empresa</span> no
            mundo digital
          </h2>

          <ButtonDefault
            className="rounded-[5px] border-[1px] border-transparent bg-yellow-500 px-[1.9rem] py-[1rem] text-[1.4rem] font-[600] text-black transition-all hover:border-[1px] hover:border-yellow-500 hover:bg-transparent hover:text-yellow-500 tabletSM:text-[2rem] tabletMD:text-[2.3rem] laptopLG:px-[3.5rem] laptopLG:text-[2.7rem]"
            target="https://api.whatsapp.com/send/?phone=5585992004530&text=Quero+ser+NORDDEV!&type=phone_number&app_absent=0"
          >
            Solicitar orçamento
          </ButtonDefault>
        </div>
      </section>
      <Footer />
    </>
  );
}
