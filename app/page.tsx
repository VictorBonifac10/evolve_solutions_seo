'use client';

import Image from "next/image";

import { Button, ClientCarousel, Footer, Header, ScrollIndicator, ServicesCards, SupportButton, Title } from "../src/components/index";

import { ContainerBody, Banner, ContainerTop, ContentLeft, ContentRight, FirstDescription, SecondDescription, ContainerMain, ContainerAbout, Text, ContainerServices, ContainerPortfolio, Mask, ContainerClients, ContainerContact, ContactCard, ImageLogo } from "./styles";

export default function Page() {
    return (
        <ContainerBody>
            <Header />
            <SupportButton />
            <ContainerTop>
                <Banner>
                    <video src="/videoBanner.mp4" preload="none" autoPlay muted loop></video>
                    <Mask />
                    <div className="containerBanner">
                        <ContentLeft>
                            <ImageLogo src="/logo.svg" alt="Logo da Empresa" width={400} height={140} />
                            <FirstDescription>
                                Fortaleça sua empresa com nossa experiência especializada.
                            </FirstDescription>
                            <SecondDescription>
                                Desenvolvemos soluções personalizadas com preço acessível para levar sua empresa ao próximo nível.
                            </SecondDescription>
                            <div className="custom-button">
                                <Button href="#services">
                                    Veja mais
                                    <i className="ri-arrow-right-down-long-line"></i>
                                </Button>
                            </div>
                        </ContentLeft>
                        <ContentRight>
                            <i className="ri-whatsapp-line"></i>
                            <i className="ri-google-line"></i>
                            <i className="ri-instagram-line"></i>
                        </ContentRight>
                    </div>
                    <ScrollIndicator />
                </Banner>
            </ContainerTop>
            <ContainerMain>
                <ContainerAbout>
                    <div className="aboutText">
                        <Title>Sobre</Title>
                        <Text>
                            A Evolve Solutions, fundada em 2025, nasceu com um propósito claro: transformar ideias em experiências digitais únicas. Especializada na criação de sites, landing pages e soluções para fortalecer a presença digital de empresas, nossa missão é unir design, tecnologia e estratégia para conectar marcas ao seu público de forma impactante.
                            <br /><br />
                            Mais do que construir páginas, criamos soluções que refletem a essência de cada negócio, proporcionando resultados reais e experiências memoráveis. Na Evolve Solutions, cada projeto é pensado para evoluir junto com você, garantindo autenticidade, inovação e relevância em cada clique.
                        </Text>
                    </div>
                    <div className="aboutImage">
                        <Image src="/desenvolvedor.jpg" alt="Desenvolvedor-de-sites" width={500} height={500} />
                        <div className="rotating-container">
                            <svg viewBox="0 0 300 300" width="200" height="200">
                                <path id="circle-path" d="M 150, 150 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0" fill="none" />
                                <circle cx="150" cy="150" r="80" className="inner-circle" />
                                <text id="text-on-path">
                                    <textPath href="#circle-path" startOffset="0%">
                                        • PERFORMANCE • GROWTH • SOLUTIONS • TRENDING
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </ContainerAbout>

                <ContainerServices id="services">
                    <Title>Porque escolher nossa equipe?</Title>
                    <ServicesCards />
                </ContainerServices>

                <ContainerPortfolio>
                    <video src="/videoPortfolio.mp4" preload="none" autoPlay muted loop></video>
                    <Mask />
                    <div className="content">
                        <Title>Portfólio</Title>
                        <Text>
                            Clique em Veja mais e tenha acesso a todos os nossos serviços, desde sites institucionais e landing pages até estratégias para fortalecer sua presença online. Cada projeto é desenvolvido com atenção aos detalhes, design moderno e funcionalidade, garantindo que sua marca se destaque e conquiste resultados reais.
                            <br /><br />
                            Explore nosso portfólio e descubra como podemos impulsionar sua presença digital de forma autêntica e eficiente.
                            <br /><br />
                        </Text>
                    </div>
                    <div className="custom-button">
                        <Button href="/Portfolio">Veja mais <i className="ri-arrow-right-down-long-line"></i></Button>
                    </div>
                </ContainerPortfolio>

                <ContainerClients>
                    <Title>Clientes</Title>
                    <ClientCarousel />
                </ContainerClients>

                <ContainerContact id="contact">
                    <div className="content">
                        <Title>Contato</Title>
                        <Text>Seja para tirar dúvidas, solicitar um orçamento ou iniciar um projeto, nossa equipe está sempre pronta para ouvir suas ideias e oferecer o ideal para o seu negócio.
                            <br /><br />
                            Portanto, envie-nos uma mensagem e agarre agora mesmo a oportunidade de criar experiências digitais únicas e que conectam sua marca ao público certo.
                            <br /><br />
                            Vamos juntos rumo à evolução da sua presença online!</Text>
                    </div>
                    <div className="content-contact-card">
                        <ContactCard>
                            <div>
                                <i className="ri-whatsapp-line"></i>
                                <h3>WhatsApp</h3>
                            </div>
                            <p>+55(16)9908-3476</p>
                        </ContactCard>
                        <ContactCard>
                            <div>
                                <i className="ri-google-line"></i>
                                <h3>Email</h3>
                            </div>
                            <p>evolvesolutions@gmail.com</p>
                        </ContactCard>
                        <ContactCard>
                            <div>
                                <i className="ri-instagram-line"></i>
                                <h3>Instagram</h3>
                            </div>
                            <p>@evolvesolutions</p>
                        </ContactCard>
                    </div>
                </ContainerContact>
            </ContainerMain>
            <Footer />
        </ContainerBody>
    );
}
