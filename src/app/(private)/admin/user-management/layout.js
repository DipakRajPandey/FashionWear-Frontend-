"use client";

import useAuthStore from "@/stores/authStore";
import { HOME_ROUTE, LOG_INE } from "@/constants/routes";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ROLE_ADMIN } from "@/constants/roles";

const UserMangementLayout = ({ children }) => {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      return router.replace(LOG_IN);
    }

    if (!user.role.includes(ROLE_ADMIN)) return router.replace(HOME_ROUTE);
  }, []);

  return <div>{children}</div>;
};

export default UserMangementLayout;
