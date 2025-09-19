import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ArticlesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
            Knowledge Base
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Browse our collection of articles to learn more about plywood,
            woodworking, and best practices.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === article.imageId
            );
            return (
              <Card
                key={article.id}
                className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {image && (
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <CardHeader className="flex-grow">
                  <CardTitle className="text-xl font-headline">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full mt-auto">
                    <Link href="#">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
