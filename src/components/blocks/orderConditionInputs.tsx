import React from 'react';
import styled from 'styled-components';

const InputWrapperDiv = styled.div`
  & > ul {
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 10px;

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
