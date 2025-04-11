export const InputFormRequired = ({
  name,
  label,
  placeholder,
  type,
}: {
  name: string;
  label: string;
  placeholder: string;
  type: string;
}) => {
  return (
    <>
      <div className="flex flex-col">
        <label
          htmlFor={name}
          className="text-oliveGreen uppercase font-title text-sm"
        >
          {label}
        </label>
        <input
          className={`p-2 bg-transparentLightOrange text-midnightBlue text-sm rounded-md w-72 h-8 md:w-96`}
          type={type}
          name={name}
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
};
