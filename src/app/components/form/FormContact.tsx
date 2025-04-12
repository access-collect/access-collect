"use client";

import React, { useRef, useState } from "react";
import CheckboxForm from "../CheckboxForm";
import { InputFormRequired } from "../inputs/InputFormRequired";
import { TextAreaForm } from "../TextAreaForm";
import ReCAPTCHA from "react-google-recaptcha";

const FormContact = () => {
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
    } catch (e) {
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
      <div className="mx-6 mt-10 px-4 py-10 shadow-md shadow-lightOliveGreen rounded-lg flex flex-col items-start justify-center gap-5 w-1/4 mx-auto">
        <form action={handleSubmit}>
          <div>
            <InputFormRequired
              type="text"
              name="name"
              label="Nom"
              placeholder="Nom"
            />
          </div>
          <div>
            <InputFormRequired
              type="email"
              name="email"
              label="Adresse mail"
              placeholder="Adresse mail"
            />
          </div>
          <div>
            <TextAreaForm
              name="message"
              label="Message"
              placeholder="Votre message ici..."
            />
          </div>
          <div>
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
            data-size="compact"
          />
          <button type="submit" disabled={!isVerified}>Valider</button>
        </form>
      </div>
    </>
  );
};

export default FormContact;
