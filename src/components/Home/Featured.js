

import { getProducts } from "@/api/productapi";
import Card from "@/app/product/_components/Card";

const Featured = async () => {
  const products = await getProducts({ category: "Mobile", limit: 4 });

  return (
    <section id="featured" className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-8 font-bold text-2xl dark:bg-gray-500 dark:text-white">
          Featured products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products?.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
