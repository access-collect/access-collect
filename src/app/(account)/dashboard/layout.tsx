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
  console.log(session);
  if (!session?.user) return null;

  return (
    <ClientLayout session={session}>
      <div className="flex">
        <DashboardLinks session={session} />
        {children}
      </div>
    </ClientLayout>
  );
}
