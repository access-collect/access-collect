const logButton = ({
  label,
  route,
  padding,
}: {
  label: string;
  route: string;
  padding: number;
}) => {
  const paddingClasses: Record<number, string> = {
    1: "px-1 py-1",
    2: "px-2 py-2",
    3: "px-3 py-3",
    4: "px-4 py-4",
    5: "px-5 py-5",
  };

  return (
    <>
      <a
        href={route}
        className={`c-btn c-btn--orange w-84 font-title text-normal ${paddingClasses[padding] || "px-4 py-4"} md:text-2xl`}
        aria-label={`Cliquer sur le bouton ${label}`}
      >
        <span>{label}</span>
      </a>
    </>
  );
};
export default logButton;
