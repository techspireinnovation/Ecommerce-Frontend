import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "@/features/admin/components/Layout/Sidebar";

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen w-full">
        <SidebarProvider>
          <div className="flex h-screen w-full bg-[#f6f7f7]">
            <AdminSidebar />

            <main className="h-screen w-full">
              <SidebarTrigger />
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}

{
  /* <header className="flex h-[72px] shrink-0 items-center gap-2 bg-white border-b border-gray-200 px-8">
                
                <div className="flex flex-1 items-center gap-2">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                </div>
                <div className="flex items-center gap-4">
                  <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                    <Bell className="w-5 h-5 text-gray-600" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
                      AU
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-gray-900">
                        Admin User
                      </div>
                      <div className="text-xs text-gray-500">Administrator</div>
                    </div>
                  </div>
                </div>
              </header> */
}
