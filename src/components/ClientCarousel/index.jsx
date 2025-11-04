'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { depoiments } from '../../data/depoiments';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { ContainerCarousel } from './styles'

import Image from "next/image";

export function ClientCarousel() {

    return (
        <ContainerCarousel>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                initialSlide={1}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                }}
                pagination={true}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"

            >
                {depoiments.map((data) => (
                    <SwiperSlide key={data.owner}>
                        <div className='clientCard'>
                            <Image src={data.url} alt="Foto do Cliente" />
                            <p><b>{data.company}</b></p>
                            <p>{data.depoiment}</p>
                            <h3>{data.owner} - <span>{data.occupation}</span></h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ContainerCarousel >
    )
}