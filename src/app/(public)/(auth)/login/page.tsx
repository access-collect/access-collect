import Image from "next/image";
import LoginForm from "../../../components/loginForm";

const LoginPage = () => {
  return (
    <div className="relative min-h-screen ">
      <div className="absolute inset-0 ">
        <Image src="/background.jpg" alt="background" layout="fill" />
        <div className="relative ">
          <h1 className="text-center text-2xl pt-16 text-midnightBlue font-bold">
            {"Bienvenue sur AccessCollect"}
          </h1>
          <div className="flex flex-wrap gap-x-4 justify-around gap-y-8 mb-8 mt-8 z-10">
            <div>
              <Image
                src="/tri.svg"
                alt="Illustration bacs de tri"
                width={500}
                height={1}
              />
            </div>
            <div className="mt-20">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
