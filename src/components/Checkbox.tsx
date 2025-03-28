type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <div className="flex w-full justify-between items-center py-2 pl-[22px] pr-[15px]">
      <label htmlFor={label} className="cursor-pointer text-sm text-[#1F2128]">
        {label}
      </label>

      <input
        id={label}
        title={label}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Checkbox;
