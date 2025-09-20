import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Package,
  Headset,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { articles, products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');
  
  const services = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'Guaranteed Quality',
      description: 'We provide high-quality products that meet industry standards to ensure customer satisfaction.',
    },
    {
      icon: <Package className="h-10 w-10 text-primary" />,
      title: 'Wide Product Range',
      description: 'A diverse selection of plywood to meet various project needs, from construction to furniture.',
    },
    {
      icon: <Headset className="h-10 w-10 text-primary" />,
      title: 'Excellent Service',
      description: 'Our professional team is ready to provide the best service and solutions for your needs.',
    }
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] bg-secondary/50 flex items-center justify-center text-center text-white px-4">
        {heroImage && (
          <Image
            alt="Plywood stack background"
            className="object-cover"
            fill
            src={heroImage.imageUrl}
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
            High-Quality Plywood for Every Need
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Kayuwa Indonesia is your trusted partner for premium plywood solutions, delivering excellence for construction and furniture projects.
          </p>
          <Button asChild size="lg">
            <Link href="/about">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Why Choose Us?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are committed to providing the best products and services for our customers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 pt-12">
            {services.map((service, index) => (
              <div key={index} className="grid gap-2 text-center">
                <div className="flex justify-center items-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                Explore Our Product Catalog
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find the perfect plywood for your next project. We offer a wide range of types and sizes.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
            {products.slice(0, 4).map((product) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === product.imageId
              );
              return (
                <Link href="/products" key={product.id}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
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
                    </CardHeader>
                    <CardContent className="p-4 flex-grow flex flex-col">
                      <CardTitle className="text-base font-semibold">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-xs mt-1">
                        {product.type}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-3 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter text-center md:text-4xl/tight font-headline">
              From the Knowledge Base
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Expand your expertise with our collection of articles and industry insights.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 3).map((article) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === article.imageId
              );
              return (
                <Link href="/articles" key={article.id}>
                  <Card className="overflow-hidden group hover:shadow-lg transition-shadow h-full flex flex-col">
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
                    <CardHeader className="flex-grow">
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                      <CardDescription className="mt-2 text-sm">
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
