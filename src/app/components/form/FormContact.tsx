"use client";

import { sendMailFromContact } from "@/lib/utils";
import CheckboxForm from "../CheckboxForm";
import { InputFormRequired } from "../inputs/InputFormRequired";
import { TextAreaForm } from "../TextAreaForm";
import nodemailer from "nodemailer";


const FormContact = () => {
  const handleSubmit = async (formData: FormData) => {

    await sendMailFromContact(formData);

  }


  return (
    <>
      <div className="mx-6 mt-10 px-4 py-10 shadow-md shadow-lightOliveGreen rounded-lg flex flex-col items-start justify-center gap-5 w-1/4 mx-auto">
        <form action={handleSubmit}>
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
        </form>
      </div>
    </>
  );
};

export default FormContact;
