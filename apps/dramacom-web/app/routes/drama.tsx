import { Outlet } from "@remix-run/react";
import MainLayout from "~/components/templates/layout/MainLayout";

export function Layout() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
