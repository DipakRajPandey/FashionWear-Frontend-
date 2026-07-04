import Link from "next/link";
import useAuthStore from "@/stores/authStore";
import { FaPencil } from "react-icons/fa6";

import { USER_MANAGEMENT_ROUTE } from "@/constants/routes";
import { ROLE_ADMIN } from "@/constants/roles";

const EditUser = ({ userId }) => {
  const user = useAuthStore((state) => state.user);

  if (!user.role.includes(ROLE_ADMIN)) return;

  return (
    <div className="flex gap-2">
      <Link href={`${USER_MANAGEMENT_ROUTE}/${userId}/edit`}>
        <FaPencil className="text-blue-600" />
      </Link>
    </div>
  );
};

export default EditUser;
