"use client";

import CheckboxForm from "../CheckboxForm";
import { InputFormRequired } from "../inputs/InputFormRequired";
import { TextAreaForm } from "../TextAreaForm";

const FormContact = () => {
  const handleSubmit = (formData: FormData) => {
    fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
  };

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
          <button type="submit">Valider</button>
        </form>
      </div>
    </>
  );
};

export default FormContact;
