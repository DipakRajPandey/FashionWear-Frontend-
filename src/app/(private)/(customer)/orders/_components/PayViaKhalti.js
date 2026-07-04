import Image from "next/image";
import khalti from "../../../../../../src/assets/images/khalti-ime-logo.png";
import { payViaKhalti } from "@/api/orders";

const PayViaKhalti = ({ orderId }) => {
  const handlePayVaiKhalti = () => {
    payViaKhalti(orderId).then((res) => {
      console.log(res.data)
    });
  };
  return (
    <>
      <button
        onClick={handlePayVaiKhalti}
        className="bg-white text-white px-4 py-2 rounded-md shadow flex gap-2 items-center"
      >
        <Image
          src={khalti}
          height={40}
          alt="pay with khalti"
          width={100}
          className="h-5 w-auto"
        />
      </button>
    </>
  );
};
export default PayViaKhalti;
