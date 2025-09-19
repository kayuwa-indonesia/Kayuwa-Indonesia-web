import Image from 'next/image';
import { ContactForm } from './components/contact-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ContactPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'contact-hero');
  return (
    <>
      <section className="relative w-full h-64 bg-secondary/30">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Customer service"
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold tracking-tight text-white font-headline sm:text-5xl">
            Get in Touch
          </h1>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container max-w-2xl mx-auto">
          <p className="text-center text-lg text-muted-foreground mb-8">
            Have a question or need a custom quote? Fill out the form below and
            our team will get back to you shortly.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
