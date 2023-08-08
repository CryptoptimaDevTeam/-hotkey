import styled from 'styled-components';

interface optionListType {
  value: string | number;
  name: string;
}

interface InputSelectHType {
  title: string;
  optionList: optionListType[];
  width?: string;
}

interface StyledSelectType {
  cursor?: string;
  width?: string;
}

const StyledSelect = styled.select<StyledSelectType>`
  width: ${(props) => props.width || 'auto'};
  cursor: ${(props) => props.cursor || 'none'};
`;

export const InputSelectH = ({
  title,
  optionList,
  width,
}: InputSelectHType) => {
  return (
    <div className='flex flex-col gap-5'>
      <label htmlFor={title} className='text-center font-semibold'>
        {title}
      </label>
      <StyledSelect
        id={title}
        width={width}
        defaultValue={'none'}
        cursor={'pointer'}
      >
        <option value='none' disabled>
          미지정
        </option>
        {optionList.map((el) => (
          <option key={el.value} value={el.value}>
            {el.name}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
};

interface InputTextHType {
  title: string;
  placeholder: string;
  disabled?: boolean;
  width?: string;
}

const StyledInputText = styled.input`
  width: ${(props) => props.width || '100%'};
`;

export const InputTextH = ({
  title,
  placeholder,
  disabled,
  width,
}: InputTextHType) => {
  return (
    <div className='flex flex-col gap-5'>
      <label htmlFor={title} className='text-center font-semibold'>
        {title}
      </label>
      <StyledInputText
        id={title}
        placeholder={placeholder}
        type='text'
        disabled={disabled}
        width={width}
      />
    </div>
  );
};
