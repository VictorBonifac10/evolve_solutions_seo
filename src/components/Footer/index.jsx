'use client';

import { ContainerFooter, Text } from "./styles";

import Image from "next/image";
 
export function Footer() {
    return (

        <ContainerFooter>
            <Image src="/Logo.svg" alt='Logo da Empresa' width={250} height={90} />
            <Text>
                Leve sua marca para o próximo nível e conquiste sua presença online de forma única!
            </Text>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="/portfolio">Portfólio</a>

                </li>
                <li>
                    <a href="#">Termos e Condições</a>
                </li>
            </ul>
            <div>
                <i className="ri-whatsapp-line"></i>
                <i className="ri-google-line"></i>
                <i className="ri-instagram-line"></i>
            </div>
            <Text>
                © 2025 evolve solutions - All rights reserved.
            </Text>
        </ContainerFooter>

    )
}