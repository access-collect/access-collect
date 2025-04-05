import Image from "next/image";
import LoginForm from "../../../components/loginForm";

const LoginPage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl mt-10 text-midnightBlue font-bold">
        {"Bienvenue sur AccessCollect"}
      </h1>
      <div className="flex flex-wrap gap-x-4 justify-around gap-y-8 mb-8 mt-8">
        <div>
          <Image
            src="/tri.svg"
            alt="Illustration bacs de tri"
            width={500}
            height={1}
          />
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
