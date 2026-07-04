'use client'
import { ROLE_CUSTOMER } from "@/constants/roles";
import { HOME_ROUTE, LOG_IN } from "@/constants/routes";
import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CustomerLayout = ({ children}) => {
  const { isAuthenticated,user} = useAuthStore.getState();
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      return route.push(LOG_IN);
    }
      if (!user.role.includes(ROLE_CUSTOMER)) {
      return router.push(HOME_ROUTE);
    }
  }, []);
  
  
 if (!isAuthenticated) return;

  return <>{children}</>;
};
export default CustomerLayout;

