import styled from "styled-components/macro";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 768px) {
    height: 1300px;
  }
`;
export const ServicesWrapper = styled.div`
  // max-width: 1000px;
  margin: 0 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 1rem;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const ServicesCard = styled.ul`
  background-color: #fff;
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2 ease-in-out;
  cursor: pointer;
  &:hover {
    transition: scale(1.02);
  }
`;
export const ServicesIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-bottom: 10px;
`;

export const ServicesTitle = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 4rem;
  @media screen and (max-width: 480px) {
    margin-bottom: 4rem;
  }
`;

export const ServicesSubtitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;
export const ServucesText = styled.p`
  font-size: 1rem;
  text-align: center;
`;
