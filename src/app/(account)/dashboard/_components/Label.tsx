const Label = async ({ label, value }: { label: string; value: string }) => {
  return (
    <>
      <p className="mt-6 text-oliveGreen font-title">
        {label + " : "}
        <span className="text-midnightBlue font-body">{value}</span>
      </p>
    </>
  );
};

export default Label;
