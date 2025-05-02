"use client";

import React, { useRef, useState } from "react";
import CheckboxForm from "../inputs/CheckboxForm";
import { InputForm } from "../inputs/InputForm";
import { TextAreaForm } from "../inputs/TextAreaForm";
import ReCAPTCHA from "react-google-recaptcha";
import OrangeButton from "../button/orangeButton";
import Image from "next/image";

const ContactForm = () => {
  const handleSubmit = (formData: FormData) => {
    fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
  };

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api/recaptcha", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch (error) {
      console.error("[Recaptcha] An error occurred while verifying token:", {
        token,
        error,
      });
      setIsVerified(false);
    }
  }

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }

  return (
    <>
      <div className="lg:flex lg:justify-around lg:items-center lg:mt-32 xl:mt-48">
        <div className="hidden lg:block">
          <Image
            src="/contact.png"
            alt="image décoratif pour nous contacter"
            width={600}
            height={1}
            className="rounded-lg"
          />
        </div>
        <div>
          <form action={handleSubmit}>
            <div className="mt-8 px-4 py-4 shadow-md shadow-lightOliveGreen bg-white rounded-lg flex flex-col items-center justify-center gap-4 w-[90%] mx-auto lg:w-full lg:px-16 lg:py-10 xl:px-36">
              <div>
                <InputForm
                  type="text"
                  name="name"
                  label="Nom"
                  placeholder="Nom *"
                />
              </div>
              <div>
                <InputForm
                  type="email"
                  name="email"
                  label="Adresse mail"
                  placeholder="Adresse mail*"
                />
              </div>
              <div>
                <TextAreaForm
                  name="message"
                  label="Message"
                  placeholder="Votre message ici...*"
                />
              </div>
              <div className="flex flex-col gap-10">
                <div>
                  <div className="mb-4 max-w-72 md:max-w-96">
                    <CheckboxForm
                      name="checkbox"
                      value="En soumettant ce formulaire, j'accepte que les informations saisies soient utilisées dans le but de me recontacter."
                    />
                  </div>
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                    ref={recaptchaRef}
                    onChange={handleChange}
                    onExpired={handleExpired}
                  />
                </div>
                <OrangeButton
                  label="Valider"
                  type="submit"
                  disabled={!isVerified}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
