import type { Metadata } from "next";
import "../../globals.css";
import DashboardLinks from "./_components/DashboardLinks";

export const metadata: Metadata = {
  title: "Access Collect",
  description: "",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <DashboardLinks />
      {children}
    </div>
  );
}
