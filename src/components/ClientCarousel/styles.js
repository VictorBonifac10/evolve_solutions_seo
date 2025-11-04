'use client';

import styled from "styled-components";

export const ContainerCarousel = styled.div`
  width: 100%;
  padding: 0 150px; 
  margin: 0 auto;
  
  @media (max-width: 850px) {
    padding: 10px 10px; 
  }

.mySwiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
  background-position: center;
  background-size: cover;
  width: 450px;
  
  @media (max-width: 650px) {
    width: 90%; 
    max-width: 350px; 
  }
}

.swiper-button-next,
  .swiper-button-prev {
      color: #fff;
      
      @media (max-width: 650px) {
          top: 35%;
          &::after {
              font-size: 1.5rem !important;
          }
      }
  }

.mySwiper .swiper-button-next:hover,
.mySwiper .swiper-button-prev:hover {
  color: #00fbff96;
}

.mySwiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.clientCard{
  max-width: 400px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.29);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  transition: 1s;
  background: linear-gradient(318deg, #2814da2b, #c012a627, #00aaff34, #1b1b1b3e, #0000002b);
  background-size: 1000% 1000%;
  
-webkit-animation: Coolgradient 41s linear infinite;
-moz-animation: Coolgradient 41s linear infinite;
-o-animation: Coolgradient 41s linear infinite;
animation: Coolgradient 41s linear infinite;

@-webkit-keyframes Coolgradient {
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
}
@-moz-keyframes Coolgradient {
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
}
@-o-keyframes Coolgradient {
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
}
@keyframes Coolgradient { 
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
}

&:hover{
      transform: scale(1.05);
      border: 1px solid #fff;
}

  img{
    width: 110px;
    height: 110px;
    padding: 5px;
    border-radius: 50%;
    margin-bottom: 15px;

    @media (max-width: 650px) {
      width: 55%;
      padding: 10px;
    }
  }

  p{
    color: #fff;
    text-align: center;
    font-size: 14px;

    @media (max-width: 650px) {
      padding: 10px;
    }
  }

  h3{

    font-size: 14px;
    color: #fff;
    
      span{
        font-weight: bold;
      }
  }

  @media (max-width: 850px) {
    padding: 0 20px;
  }
}

`;