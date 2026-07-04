"use client";

import { ROLE_ADMIN, ROLE_MERCHANT } from "@/constants/roles";
import { HOME_ROUTE, LOG_IN } from "@/constants/routes";
import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Sidebar from "./_components/Sidebar";



const MerchantLayout = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore.getState();

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      // redirect to login page
      return router.replace(LOG_IN);
    }

    if (
      !user.role.includes(ROLE_MERCHANT) &&

      !user.role.includes(ROLE_ADMIN)
    ) {
      return router.push(HOME_ROUTE);
    }
  }, []);

  if (!isAuthenticated) return;

  return (
    <>
      <Sidebar />
      <div className="p-6 sm:ml-64 min-h-screen dark:bg-gray-800">{children}</div>
    </>
  );
};

export default MerchantLayout;
