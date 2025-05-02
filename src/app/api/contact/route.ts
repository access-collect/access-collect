import { creationOfTransporter } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const transporter = creationOfTransporter();
    const formData = await req.formData();
    const data = Object.fromEntries(formData);

    const mailBodyHtml: string = `
        <h3>Bonjour, </h3>
        <p>Une personne souhaite vous contacter pour des renseignements.<br><br>
        Voici les informations envoyées:<br>
        - Nom de la personne: ${data.name}<br>
        - Email de la personne: ${data.email}<br>
        - Contenu du message: ${data.message}<br><br>
        A recontacter au plus vite!
        </p>
      `;

    const mailData = {
      from: process.env.MAIL_USER,
      to: "synowski.jessica@hotmail.fr",
      subject: `Formulaire de contact: vous avez reçu un message de la part de ${data.name}`,
      html: mailBodyHtml,
    };

    (await transporter).sendMail(mailData);

    return NextResponse.json({
      success: true,
      message: "Email send with success",
    });
  } catch (error) {
    console.error("Recaptcha verification error:", error);
    return NextResponse.json(
      { success: false, error: "Error sending" },
      { status: 500 },
    );
  }
}
