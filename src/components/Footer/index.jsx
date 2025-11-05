'use client';

import Image from "next/image";
import Link from "next/link";

import { ContainerFooter, Text } from "./styles";

export function Footer() {
    return (

        <ContainerFooter>
            <Image src="/Logo.svg" alt='Logo da Empresa' width={250} height={90} />
            <Text>
                Leve sua marca para o próximo nível e conquiste sua presença online de forma única!
            </Text>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/Portfolio">Portfólio</Link>

                </li>
                <li>
                    <Link href="#">Termos e Condições</Link>
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