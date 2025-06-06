import { redirect } from "next/navigation";

export default async function Redirect() {
  // Redirect to the home page
  redirect("/");
}
