export const InputForm = ({
  name,
  label,
  placeholder,
  type,
  isRequired = true,
  minLength = 1,
}: {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  isRequired?: boolean;
  minLength?: number;
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
          minLength={minLength}
          required={isRequired}
        />
      </div>
    </>
  );
};
