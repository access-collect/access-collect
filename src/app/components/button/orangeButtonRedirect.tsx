const OrangeButtonRedirect = ({
  label,
  onClick,
}: {
  label: string;
  onClick: any;
}) => {
  return (
    <>
      <button
        type={"button"}
        onClick={onClick}
        className={
          "c-btn--orange text-midnightBlue c-btn c-btn--r50 px-16 py-4 font-title uppercase mb-4 text-lg transition-all duration-200 lg:px-32"
        }
      >
        <span>{label}</span>
      </button>
    </>
  );
};
export default OrangeButtonRedirect;
