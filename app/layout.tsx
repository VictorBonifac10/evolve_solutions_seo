// app/layout.jsx
import GlobalStyles from "../src/styles/GlobalStyles"; // se exporta um componente
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Evolve Solutions",
    description: "Site migrado para Next.js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

        <html lang="pt-br">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
                    rel="stylesheet"
                />
            </head>
            <body>
                <GlobalStyles />{children}
            </body>
        </html>


    );
}
