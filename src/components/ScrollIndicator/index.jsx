'use client';

import { ScrollContainer } from './styles'

export function ScrollIndicator() {
    return (
        <ScrollContainer>
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </ScrollContainer>
    )
}