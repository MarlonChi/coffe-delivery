import styled from "styled-components";

export const AddressFormContainer = styled.div`
  > h3 {
    font-size: 1.8rem;
    line-height: 130%;
  }
`;

export const AddressForm = styled.form`
  padding: 4rem;
  border-radius: 0.6rem;
  background: ${(props) => props.theme["base-card"]};
`;

export const CardHeader = styled.div`
  display: flex;
  gap: 0.8rem;

  h3 {
    font-family: "Roboto";
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const InputGroup = styled.div`
  margin-top: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  input {
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme["base-button"]};
    background: ${(props) => props.theme["base-input"]};
    padding: 1.2rem;

    font-family: "Roboto";
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};

    width: 200px;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;

export const InputRow = styled.div`
  display: flex;
  gap: 1.2rem;
`;
