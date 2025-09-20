import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Package,
  Headset,
  ChevronRight,
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
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'mission');

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
      <section className="relative h-screen w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://firebasestorage.googleapis.com/v0/b/kayuwa-indonesia.firebasestorage.app/o/Video%2FLaser%20Cutting%20Makassar.mp4?alt=media&token=e8511117-9201-4671-8a94-a0340bbcc9c8" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center container mx-auto px-4">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-7xl font-extrabold md:mb-6 mb-2 text-white">
              Kayuwa Indonesia
            </h1>
            <p className="md:text-xl text-base md:mb-6 mb-8 text-slate-100 max-w-3xl">
              Mitra terpercaya dalam memberikan Layanan Laser Cutting dan Penyediaan Spare Part berkualitas tinggi.
            </p>
            <Button asChild size="lg" className="font-semibold text-base">
              <Link href="/about">
                Selengkapnya <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white md:py-24 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="md:order-2">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt="Tentang Kami"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
            <div className="md:order-1">
              <span className="inline-block bg-green-50 text-primary text-sm font-semibold py-1 px-3 rounded-full mb-4">
                About us
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Tentang Kami</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Kayuwa Indonesia adalah distributor plywood dan material kayu terpercaya. Berdiri di Surabaya, kami hadir sebagai solusi lengkap untuk kebutuhan material seperti plywood, MDF, HPL, dan particle board. Kami mengutamakan kualitas dan layanan terbaik untuk semua proyek Anda.
              </p>
              <Button asChild className="font-bold text-base">
                <Link href="/about">
                  Kenali Kami Lebih Dekat <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="w-full py-12 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                Why Choose Us?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
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
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col group">
                    <CardHeader className="p-0">
                      <div className="relative aspect-square w-full">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={image.imageHint}
                          />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 flex-grow flex flex-col">
                      <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-sm mt-1">
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
      <section className="w-full py-12 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
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
