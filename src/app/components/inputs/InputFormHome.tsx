export const InputFormHome = ({
  name,
  label,
  placeholder,
}: {
  name: string;
  label: string;
  placeholder: string;
}) => {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={name} className="text-midnightBlue text-base">
          {label}
        </label>
        <input
          className="p-2 bg-transparentLightOrange text-midnightBlue text-sm rounded-md  w-72 h-8 md:w-96"
          name={name}
          type="text"
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
};
