import type { Metadata } from "next";
import "../../globals.css";
import DashboardLinks from "./_components/DashboardLinks";
import { auth } from "@/lib/auth";
import ClientLayout from "./user/ClientLayout";
export const metadata: Metadata = {
  title: "Access Collect",
  description: "",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session?.user) return <div>{"Vous n'êtes pas authentifié"}</div>;

  return (
    <ClientLayout session={session}>
      <div className="flex">
        <DashboardLinks />
        {children}
      </div>
    </ClientLayout>
  );
}
