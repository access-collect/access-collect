import LogButton from "@/app/components/button/logButton";

export default function LoginCollectButton() {
  return (
    <>
      <div className="block mt-10 flex justify-center md:hidden">
        <div className="flex mx-6 items-center gap-5">
          <p className="text-midnightBlue text-center text-sm">
            {"Vous êtes collecteur ?"}
          </p>
          <div className="flex justify-center mt-1">
            <LogButton label={"SE CONNECTER"} route="/login" padding={2} />
          </div>
        </div>
      </div>
    </>
  );
}
