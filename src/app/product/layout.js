import ProductBanner from "./_components/Banner";
export const metadata = {
  title: { default: "E-Fashion", template: "%s | E-Fashion" },
  description: "This is online based e-commerce  ",
};
const ProductLayOut = ({ children }) => {
  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <ProductBanner />
        <div> {children}</div>
      </div>
    </>
  );
};
export default ProductLayOut;
