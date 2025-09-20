import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'about-hero');
  const missionImage = PlaceHolderImages.find((img) => img.id === 'mission');
  const visionImage = PlaceHolderImages.find((img) => img.id === 'vision');

  const values = [
    { name: 'Integrity', description: 'Upholding honesty and ethical standards in all business practices.' },
    { name: 'Quality', description: 'Committed to providing products and services of the highest quality.' },
    { name: 'Customer Focus', description: 'Placing customer satisfaction as our top priority.' },
    { name: 'Innovation', description: 'Continuously improving and innovating to provide the best solutions.' },
    { name: 'Teamwork', description: 'Collaborating effectively to achieve common goals.' },
  ];

  return (
    <>
      <section className="relative w-full h-64 md:h-80 bg-secondary/30">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Kayuwa Indonesia team"
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl font-bold tracking-tight text-white font-headline sm:text-5xl">
            About Kayuwa Indonesia
          </h1>
        </div>
      </section>
      
      <section className="py-12 md:py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">
                  Our Story
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Founded with a passion for providing top-tier wood products, Kayuwa Indonesia has grown into a leading supplier in the industry. We are dedicated to sourcing and delivering high-quality plywood for various needs, from large-scale construction projects to detailed furniture craftsmanship. Our commitment to excellence and customer satisfaction drives everything we do. We believe in building lasting relationships with our clients by ensuring reliability, quality, and exceptional service.
                </p>
              </div>
              <div className="relative h-64 md:h-full w-full">
                {missionImage && (
                    <Image src={missionImage.imageUrl} alt="Our Factory" fill className="object-cover" data-ai-hint={missionImage.imageHint} />
                )}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-secondary/50">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">
                Our Mission & Vision
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mission</h3>
                  <p className="text-muted-foreground">To provide superior quality plywood products through sustainable practices, continuous innovation, and unwavering commitment to customer satisfaction.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Vision</h3>
                  <p className="text-muted-foreground">To be the most trusted and preferred plywood supplier in the region, known for our quality, integrity, and contribution to the industry.</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
                {visionImage && (
                    <Image src={visionImage.imageUrl} alt="Wood panels" fill className="object-cover" data-ai-hint={visionImage.imageHint} />
                )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The principles that guide our company and our work.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.name}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                  <CardTitle className='text-xl'>{value.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
