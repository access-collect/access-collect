const CheckboxForm = ({ name, value }: { name: string; value: string }) => {
  return (
    <>
      <div className="flex items-start">
        <input
          className={`mt-1 mr-2 rounded-md h-auto`}
          type="checkbox"
          name={name}
          value={value}
          required
        />
        <label htmlFor={name} className="text-midnightBlue text-sm w-62">
          {value}
        </label>
      </div>
    </>
  );
};

export default CheckboxForm;
