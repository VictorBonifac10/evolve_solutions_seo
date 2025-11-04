'use client';

import styled from "styled-components";

export const PortfolioContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 200px;

  .introduction {
      color: #fff;
      font-size: 25px;
      text-align: center;
      max-width: 770px;
      margin: 30px 30px 80px 30px;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 90px;
    width: 100%;
    margin: 160px 0px;
`;

export const ProductCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15%;
  width: 85%;
  position: relative; 
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 40px;
  overflow: hidden;
  padding: 25px;
  color: #fff;
  transition: 1s;

  @media(max-width: 870px){
    flex-direction: column;
    text-align: center;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .content {
    position: relative;
    z-index: 2;
    max-width: 550px;

    @media(max-width: 870px){
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
  }
  }

  img{
    position: relative;
    z-index: 2;
    
    @media(max-width: 870px){
      width: 300px;
      margin-top: 20px;
      padding: 20px;
    }
  }

  .custom-button{
    display: flex;
    gap: 10px;
    width: 70%;

  @media(max-width: 870px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } 
  }

  &:hover{
    transform: scale(1.02);
    border: 1px solid #fff;
}
  
`;

export const Mask = styled.div`
  background: linear-gradient(
    109deg,
    rgba(10, 12, 16, 0.9) 15%,
    rgba(10, 12, 16, 0.21) 50%,
    rgba(10, 12, 16, 0.9) 85%
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Text = styled.p`  
  color: #fff;
  max-width: 500px;
`;

export const ImageProduct = styled.img`
  width: 400px;
`;

export const BenefitsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 30px 0px 30px 0px;

.benefits {
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  gap: 20px;

  @media(max-width: 870px){
    justify-content: center;
    align-items: center;
    max-width: 100%;
  } 
}

.benefit-icon {
  display: flex;
  align-items: center;
  gap: 6px;


    i{
      border: 1px solid #fff;
      border-radius: 50px;
      padding: 4px 8px;
    }

    p{
      margin: 0;
    }

  }

`;