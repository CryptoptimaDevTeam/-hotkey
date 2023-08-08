import React from 'react';
import styled from 'styled-components';

const InputWrapperDiv = styled.div`
  & > ul {
    padding: 20px 0;
    margin: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;

    & > li {
      flex-basis: 100%;
    }
  }
`;

const OrderConditionInputs: React.FC = ({ children }) => {
  return (
    <InputWrapperDiv className='input-wrapper'>
      <ul className='border-b-[1px] border-borderColor'>{children}</ul>
    </InputWrapperDiv>
  );
};

export default OrderConditionInputs;
