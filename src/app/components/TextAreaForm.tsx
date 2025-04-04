export const TextAreaForm = ({
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
        <label
          htmlFor={name}
          className="text-oliveGreen uppercase font-title text-sm"
        >
          {label}
        </label>
        <textarea
          className={`p-2 bg-transparentLightOrange text-midnightBlue text-sm rounded-md w-72 h-auto md:w-96`}
          name={name}
          placeholder={placeholder}
          required
          rows={5}
        />
      </div>
    </>
  );
};
