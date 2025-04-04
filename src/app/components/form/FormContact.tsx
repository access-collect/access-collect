"use client";

import { FormEvent } from "react";
import CheckboxForm from "../CheckboxForm";
import { InputFormRequired } from "../InputFormRequired";
import { TextAreaForm } from "../TextAreaForm";

const FormContact = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("Réponse du serveur :", data);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="mx-6 mt-10 px-4 py-10 shadow-md shadow-lightOliveGreen rounded-lg flex flex-col items-start justify-center gap-5">
        <div>
          <InputFormRequired type="text" name="Nom" label="Nom" placeholder="Nom" />
        </div>
        <div>
          <InputFormRequired type="email" name="Adresse mail" label="Adresse mail" placeholder="Adresse mail" />
        </div>
        <div>
          <TextAreaForm name="Message" label="Message" placeholder="Votre message ici..." />
        </div>
        <div>
          <CheckboxForm
            name="checkbox"
            value="En soumettant ce formulaire, j'accepte que les informations saisies soient utilisées dans le but de me recontacter."
          />
        </div>
        <button type="submit">Valider</button>
      </div>
    </form>
  );
};

export default FormContact;
