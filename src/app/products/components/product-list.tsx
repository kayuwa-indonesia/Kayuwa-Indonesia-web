'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type Product = {
  id: number;
  name: string;
  type: string;
  imageId: string;
  description: string;
  specs: {
    thickness: string;
    size: string;
    grade: string;
    finish: string;
  };
};

type ProductListProps = {
  allProducts: Product[];
  productTypes: string[];
};

export default function ProductList({
  allProducts,
  productTypes,
}: ProductListProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFilterChange = (type: string) => {
    setActiveFilters((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const filteredProducts =
    activeFilters.length > 0
      ? allProducts.filter((product) => activeFilters.includes(product.type))
      : allProducts;

  return (
    <div className="grid md:grid-cols-4 gap-8">
      <aside className="md:col-span-1">
        <div className="sticky top-24">
          <h2 className="text-xl font-semibold mb-4 font-headline">
            Filter by Type
          </h2>
          <div className="space-y-3">
            {productTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={type}
                  checked={activeFilters.includes(type)}
                  onCheckedChange={() => handleFilterChange(type)}
                />
                <Label
                  htmlFor={type}
                  className="text-base font-normal cursor-pointer"
                >
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </aside>
      <main className="md:col-span-3">
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === product.imageId
              );
              return (
                <Card
                  key={product.id}
                  className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader className="p-0">
                    <div className="relative aspect-square w-full">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 flex flex-col flex-grow">
                    <Badge variant="secondary" className="mb-2 w-fit">
                      {product.type}
                    </Badge>
                    <CardTitle className="text-lg mb-2 font-headline">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-sm flex-grow mb-4">
                      {product.description}
                    </CardDescription>
                    <div className="text-xs text-muted-foreground space-y-1 border-t pt-2 mt-auto">
                      <p>
                        <strong>Thickness:</strong> {product.specs.thickness}
                      </p>
                      <p>
                        <strong>Size:</strong> {product.specs.size}
                      </p>
                      <p>
                        <strong>Grade:</strong> {product.specs.grade}
                      </p>
                      <p>
                        <strong>Finish:</strong> {product.specs.finish}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-20 border-2 border-dashed rounded-lg">
            <h3 className="text-xl font-semibold">No Products Found</h3>
            <p className="text-muted-foreground mt-2">
              Try adjusting your filters or check back later.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
