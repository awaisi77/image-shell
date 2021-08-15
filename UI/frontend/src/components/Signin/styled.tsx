import styled from 'styled-components/macro';
import { Link as LinkRouter } from 'react-router-dom';
export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and(max-width: 400px) {
    height: 80%;
  }
`;
export const Icon = styled(LinkRouter)`
  margin: 2rem 0 0 2rem;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    margin: 1rem 0 0 1rem;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  display: grid;
  padding: 80px 2rem;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 480px) {
    padding: 2rem 2rem;
  }
`;

export const FormTitle = styled.h1`
  margin-bottom: 2.5rem;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 400;
  text-align: center;
`;
export const FormLabel = styled.label`
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 1rem 1rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 1rem 0;
  border: none;
  border-radius: 4px;
`;

export const FormText = styled.span`
  text-align: center;
  margin-top: 1.5rem;
  color: #fff;
  font-size: 14px;
`;
