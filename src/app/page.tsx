import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Cpu,
  Layers,
  Wrench,
  Wood,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { articles, products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');
  const catalogImage = PlaceHolderImages.find(
    (img) => img.id === 'catalog-1'
  );
  const aiImage = PlaceHolderImages.find((img) => img.id === 'ai-tool-1');

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            {heroImage && (
              <div className="relative w-full h-64 lg:h-auto rounded-xl overflow-hidden shadow-2xl">
                <Image
                  alt="Plywood stack"
                  className="object-cover"
                  fill
                  src={heroImage.imageUrl}
                  data-ai-hint={heroImage.imageHint}
                />
              </div>
            )}
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                  Your Trusted Partner for Plywood Solutions
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  High-quality plywood for any project. Explore our catalog or
                  let our AI tool suggest the perfect match for your needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/get-offer">
                    Get an AI-Powered Offer
                    <Cpu className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/products">
                    Browse Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                Our Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Why Choose Kayuwa Indonesia?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We combine a vast selection with cutting-edge technology to
                provide you with the best plywood buying experience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 pt-12">
            <div className="grid gap-1 text-center">
              <div className="flex justify-center items-center">
                <Layers className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-bold">Comprehensive Catalog</h3>
              <p className="text-sm text-muted-foreground">
                Browse our extensive collection of plywood, from MDF to HPL,
                with detailed specifications for every product.
              </p>
            </div>
            <div className="grid gap-1 text-center">
              <div className="flex justify-center items-center">
                <Cpu className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-bold">AI Offer Suggestions</h3>
              <p className="text-sm text-muted-foreground">
                Our intelligent tool analyzes your needs to recommend the best
                and most cost-effective plywood options.
              </p>
            </div>
            <div className="grid gap-1 text-center">
              <div className="flex justify-center items-center">
                <Wrench className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-bold">Expert Resources</h3>
              <p className="text-sm text-muted-foreground">
                Read our articles to learn more about plywood applications,
                finishing techniques, and industry best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
              Explore Our Product Catalog
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find the perfect plywood for your next project. Filter by type,
              size, and more.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Button asChild size="lg" className="w-full">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
            {products.slice(0, 4).map((product) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === product.imageId
              );
              return (
                <Link href="/products" key={product.id}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="p-0">
                      <div className="relative aspect-square w-full">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={product.name}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                          />
                        )}
                      </div>
                      <div className="p-4">
                        <CardTitle className="text-base">
                          {product.name}
                        </CardTitle>
                        <CardDescription className="text-xs">
                          {product.type}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-3 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter text-center md:text-4xl/tight font-headline">
              From the Knowledge Base
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Expand your expertise with our collection of articles.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 3).map((article) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === article.imageId
              );
              return (
                <Link href="/articles" key={article.id}>
                  <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
                    <div className="relative aspect-video w-full">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle>{article.title}</CardTitle>
                      <CardDescription>
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <Link href="/articles">
                Read More Articles <BookOpen className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
