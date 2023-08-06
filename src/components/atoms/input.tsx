interface optionListType {
  value: string | number;
  name: string;
}

interface InputSelectHType {
  title: string;
  optionList: optionListType[];
}

export const InputSelectH = ({ title, optionList }: InputSelectHType) => {
  return (
    <div className='flex flex-col gap-[10px]'>
      <label htmlFor={title}>{title}</label>
      <select id={title}>
        {optionList.map((el) => (
          <option key={el.value} value={el.value}>
            {el.name}
          </option>
        ))}
      </select>
    </div>
  );
};

interface InputTextHType {
  title: string;
  placeholder: string;
  disabled?: boolean;
}

export const InputTextH = ({
  title,
  placeholder,
  disabled,
}: InputTextHType) => {
  return (
    <div className='flex flex-col gap-[10px]'>
      <label htmlFor={title}>{title}</label>
      <input
        id={title}
        placeholder={placeholder}
        type='text'
        disabled={disabled}
      />
    </div>
  );
};
