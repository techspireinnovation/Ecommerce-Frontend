import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/reusable/layout/admin/header";
import { Sidebar } from "@/reusable/layout/admin/sidebar";

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-full">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <Header />
            <main className="flex-1 p-4 md:p-6">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
