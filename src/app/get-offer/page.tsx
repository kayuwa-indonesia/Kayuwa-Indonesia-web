import Image from 'next/image';
import { OfferForm } from './components/offer-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function GetOfferPage() {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === 'get-offer-hero'
  );
  return (
    <>
      <section className="relative w-full h-64 bg-secondary/30">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="AI offer suggestion"
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl font-bold tracking-tight text-white text-center font-headline sm:text-5xl">
            AI-Powered Offer Suggestion
          </h1>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container max-w-4xl mx-auto">
          <p className="text-center text-lg text-muted-foreground mb-8">
            Describe your project needs, and our AI will suggest the best
            plywood offers for you in seconds.
          </p>
          <OfferForm />
        </div>
      </section>
    </>
  );
}
