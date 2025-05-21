export const InputPasswordHome = ({
  name,
  label,
}: {
  name: string;
  label: string;
}) => {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={name} className="text-midnightBlue text-base">
          {label}
        </label>
        <input
          data-testid="input-password-home"
          className="p-2 bg-transparentLightOrange rounded-md  w-72 h-8 md:w-96"
          type="password"
          name={name}
          minLength={8}
          required
        />
      </div>
    </>
  );
};
