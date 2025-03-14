import { redirect } from "next/navigation";

export function redirectToHomepage() {
  redirect("/dashboard");
}
