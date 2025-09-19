import { products, productTypes } from '@/lib/data';
import ProductList from './components/product-list';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
          Our Plywood Catalog
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore our wide range of high-quality plywood products. Use the
          filters to find the perfect material for your project.
        </p>
      </div>
      <ProductList allProducts={products} productTypes={productTypes} />
    </div>
  );
}
