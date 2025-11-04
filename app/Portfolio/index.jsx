'use client';

import { products } from "../../src/data/products";

import { Button, Footer, Header, ScrollIndicator, SupportButton, Title } from "../../src/components/index";
import { PortfolioContainer, CardContainer, ProductCard, Mask, Text, ImageProduct, BenefitsContainer } from "./styles";

export default function Portfolio() {

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
                        <video src="../../public/videoPortfolio3.mp4" preload="none" autoPlay muted loop></video>
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
                                <Button>
                                    Ver modelo
                                    <i className="ri-arrow-right-down-long-line"></i>
                                    <a href={data.link}></a>
                                </Button>
                                <Button variant="secondary">
                                    <i class="ri-whatsapp-line"></i>
                                    Orçamento
                                    <a href="#"></a>
                                </Button>
                            </div>
                        </div>
                        <div className="content-img">
                            <ImageProduct src={data.url} alt="page" />
                        </div>
                    </ProductCard>
                ))}
            </CardContainer>
            <Footer />
        </PortfolioContainer >
    )
}