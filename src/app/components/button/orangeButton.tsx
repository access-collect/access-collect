const OrangeButton = ({ label, onClick, type = "button", disabled = false }: { label: string; type?: "button" | "submit", onClick?: () => void, disabled?: boolean }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${
          disabled
            ? "bg-gray-400 text-gray-600 cursor-not-allowed"
            : "c-btn--orange text-midnightBlue"
        } c-btn c-btn--r50 px-16 py-4 font-title uppercase mb-4 text-lg transition-all duration-200 lg:px-32`}
      >
        <span>{label}</span>
      </button>
    </>
  );
};
export default OrangeButton;
