import { useAuthContext } from "@/components/AuthProvider";
import { MainNav } from "@/components/MainNav";
import { Redirect } from "@/components/Redirect";
import { Toaster } from "@/components/ui/toaster";
import { UserNav } from "@/components/UserNav";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  const { authContext } = useAuthContext();

  if (!authContext || !authContext?.url) {
    return <Redirect to={`${import.meta.env.BASE_URL}/auth`} />;
  }

  return (
    <>
      <Helmet>
        <title>Vangard CGM</title>
      </Helmet>
      <div className="h-full w-full flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center justify-end gap-6 px-4">
            <MainNav />
            <div className="flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Outlet />
          <Toaster />
        </div>
      </div>
    </>
  );
}
