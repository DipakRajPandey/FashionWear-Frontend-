'use client'
import { LOG_IN } from "@/constants/routes";
import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const PrivateLayout = ({ children }) => {
  const { isAuthenticated } = useAuthStore.getState();
  const route = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      return route.push(LOG_IN);
    }
  }, []);
 if (!isAuthenticated) return;

  return <>{children}</>;
};
export default PrivateLayout;
