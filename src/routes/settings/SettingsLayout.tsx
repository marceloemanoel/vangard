import { Separator } from "@/components/ui/separator";
import { Helmet } from "react-helmet-async";
import { FormattedMessage } from "react-intl";
import { Outlet } from "react-router-dom";
import { SidebarNav } from "../../components/SidebarNav";

const sidebarNavItems = [
  {
    title: (
      <FormattedMessage
        defaultMessage="General Settings"
        description="General Settings link on settings page sidebar navigation"
      />
    ),
    href: `${import.meta.env.BASE_URL}/settings/general`,
  },
  {
    title: "Profile",
    href: `${import.meta.env.BASE_URL}/settings/profile`,
  },
  {
    title: (
      <FormattedMessage
        defaultMessage="Appearance"
        description="Appearance link on settings page sidebar navigation"
      />
    ),
    href: `${import.meta.env.BASE_URL}/settings/appearance`,
  },
  {
    title: "Notifications",
    href: `${import.meta.env.BASE_URL}/settings/notifications`,
  },
  {
    title: "Display",
    href: `${import.meta.env.BASE_URL}/settings/display`,
  },
];

export function SettingsLayout() {
  return (
    <>
      <Helmet>
        <title>Settings</title>
        <meta
          name="description"
          content="Manage your account settings and set e-mail preferences."
        />
      </Helmet>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
