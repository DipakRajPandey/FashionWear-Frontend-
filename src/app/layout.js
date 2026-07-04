import Header from "@/components/Header";
import "./globals.css";
import { ToastContainer } from "react-toastify";
export const metadata = {
  title: {
    default: "E-fashion",
    template: "%s | E-fashion",
  },
  description: "Online ecommerce platform for clothes and shoes.",
  keywords: "Online shopping in Nepal, Best clothing items",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="light">
        
         <Header />
      {children}
      <ToastContainer position="top-center" autoClose={2000} />
        </body>
    </html>
  );
}
