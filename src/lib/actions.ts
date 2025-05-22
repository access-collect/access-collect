import { redirect } from "next/navigation";

export function redirectToHomepage() {
  redirect("/");
}

export function redirectToLogin() {
  redirect("/login");
}

export function redirectToDashboard() {
  redirect("/dashboard");
}

export function redirectToForgottenPassword() {
  redirect("/forgotten-password");
}
