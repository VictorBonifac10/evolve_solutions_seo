'use client';

import Link from 'next/link';
import Image from 'next/image';
import { alertFunction } from '../../src/utils/alertFunction';


import { products } from "../../src/data/products";
import { Button, Footer, Header, ScrollIndicator, SupportButton, Title } from "../../src/components/index";
import { PortfolioContainer, CardContainer, ProductCard, Mask, Text, BenefitsContainer } from "./styles";

export default function Portifolio() {
    return (
        <PortfolioContainer>
            <Header />
            <SupportButton />
            <Title style={{ fontSize: '40px' }}>Portifólio</Title>
            <p className="introduction">Cada negócio tem uma história única e o seu site precisa refletir isso. Oferecemos soluções digitais sob medida para cada objetivo, veja abaixo ▼
            </p>
            <ScrollIndicator />
            <CardContainer>
                {products.map((data) => (
                    <ProductCard key={data.name} >
                        <video src="/videoPortfolio3.mp4" preload="none" autoPlay muted loop></video>
                        <Mask />
                        <div className="content">
                            <Title>{data.name}</Title>
                            <Text>{data.description}</Text>
                            <BenefitsContainer>
                                <div className="benefits">
                                    {data.benefits.map((benefit, i) => (
                                        <div className="benefit-icon" key={i}>
                                            <i className={data.iconBenefits[i]}></i>
                                            <p>{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </BenefitsContainer>
                            <div className="custom-button">
                                <Button onClick={alertFunction}>
                                    Ver modelo
                                    <i className="ri-arrow-right-down-long-line"></i>
                                    <Link href={data.link}></Link>
                                </Button>
                                <Button onClick={alertFunction} variant="secondary">
                                    <i className="ri-whatsapp-line"></i>
                                    Orçamento
                                    <Link href="#"></Link>
                                </Button>
                            </div>
                        </div>
                        <div className="content-img">
                            <Image src={data.url} alt="page" width={350} height={400} />
                        </div>
                    </ProductCard>
                ))}
            </CardContainer>
            <Footer />
        </PortfolioContainer >
    )
}