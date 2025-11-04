'use client';

import { ContainerTitle } from './styles'

export function Title({ children, ...props }) {
    return (
        <ContainerTitle {...props}>{children}</ContainerTitle>
    )
}