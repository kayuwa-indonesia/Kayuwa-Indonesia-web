import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowLeft, Home, ChevronRight } from 'lucide-react';

const PhilosophyIcon = () => (
  <svg
    className="w-10 h-10 md:w-[72px] md:h-[72px] mb-6"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36 69C54.7777 69 69 54.7777 69 36C69 17.2223 54.7777 3 36 3C17.2223 3 3 17.2223 3 36C3 54.7777 17.2223 69 36 69Z"
      stroke="#16A34A"
      strokeWidth="5"
    />
    <path
      d="M36 49.5C43.4558 49.5 49.5 43.4558 49.5 36C49.5 28.5442 43.4558 22.5 36 22.5C28.5442 22.5 22.5 28.5442 22.5 36C22.5 43.4558 28.5442 49.5 36 49.5Z"
      stroke="#16A34A"
      strokeWidth="5"
    />
    <path
      d="M22.5 36H3"
      stroke="#16A34A"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path
      d="M69 36H49.5"
      stroke="#16A34A"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);
const VisionIcon = () => (
  <svg
    className="w-10 h-10 md:w-[72px] md:h-[72px] mb-6"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 36L36 3L69 36L36 69L3 36Z"
      stroke="#16A34A"
      strokeWidth="5"
      strokeLinejoin="round"
    />
    <path
      d="M36 49.5C43.4558 49.5 49.5 43.4558 49.5 36C49.5 28.5442 43.4558 22.5 36 22.5C28.5442 22.5 22.5 28.5442 22.5 36C22.5 43.4558 28.5442 49.5 36 49.5Z"
      stroke="#16A34A"
      strokeWidth="5"
    />
  </svg>
);
const MissionIcon = () => (
  <svg
    className="w-10 h-10 md:w-[72px] md:h-[72px] mb-6"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 27L36 3L69 27L36 51L3 27Z"
      stroke="#16A34A"
      strokeWidth="5"
      strokeLinejoin="round"
    />
    <path
      d="M3 45L36 69L69 45"
      stroke="#16A34A"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const featureCards = [
  {
    icon: 'https://firebasestorage.googleapis.com/v0/b/kayuwa-indonesia.appspot.com/o/c1.46e01ff.png?alt=media&token=425d5059-d890-482a-a95b-0ffc5a7f9202',
    title: 'Produk Berkualitas Premium',
    description: 'Dari plywood, MDF, HPL, hingga particle board semuanya kami pilih dengan standar kualitas tinggi untuk hasil maksimal.',
  },
  {
    icon: 'https://firebasestorage.googleapis.com/v0/b/kayuwa-indonesia.appspot.com/o/c2.111da64.png?alt=media&token=8d80f83d-3f0e-436f-b258-0d04b2b64d1f',
    title: 'Tim Andal & Berpengalaman',
    description: '20+ tahun di industri, tim kami siap bantu semua kebutuhan proyek, dari tukang hingga kontraktor besar.',
  },
  {
    icon: 'https://firebasestorage.googleapis.com/v0/b/kayuwa-indonesia.appspot.com/o/c3.0075490.png?alt=media&token=6a125345-21d7-4c07-b2f4-e0b0b8c2a938',
    title: 'Harga Terbaik, Kualitas Tetap No.1',
    description: 'Solusi pas untuk bisnis, proyek, dan kebutuhan bangunan Anda.',
  },
];

const distributorCards = [
  {
    imageId: 'about-dist-1',
    category: 'Distribusi',
    title: 'Distribusi Luas & Lengkap',
    description: 'Dari plywood, MDF, hingga particle board kami siap penuhi semua kebutuhan bahan kayu Anda ke seluruh Indonesia.',
  },
  {
    imageId: 'about-dist-2',
    category: 'Kualitas',
    title: 'Perawatan & Kualitas Terjaga',
    description: 'Bersama tim ahli, kami bantu jaga performa material kayu Anda agar tetap optimal.',
  },
  {
    imageId: 'about-dist-3',
    category: 'Terpercaya',
    title: 'Gudang Aman & Pengiriman Cepat',
    description: 'Kami menyediakan layanan penyimpanan dan pengiriman untuk produk Anda.',
  },
];

export default function AboutPage() {
  const philosophyBg = PlaceHolderImages.find((img) => img.id === 'philosophy-bg');
  const featuresBg = PlaceHolderImages.find((img) => img.id === 'features-bg');

  return (
    <div className="container mx-auto px-4 mt-24 max-w-7xl">
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-sm text-gray-500 md:mt-32 mt-16 md:mb-16 mb-8 overflow-hidden">
        <Button asChild variant="outline" className="rounded-full font-bold">
          <Link href="/">
            <ArrowLeft className="me-1 h-4 w-4" /> Kembali
          </Link>
        </Button>
        <div className="hidden md:flex items-center space-x-1">
          <Link href="/" className="text-gray-400 hover:text-gray-600 font-bold">
            <Home className="h-4 w-4 text-gray-800" />
          </Link>
          <span className="flex items-center space-x-1">
            <ChevronRight className="h-4 w-4 text-gray-300" />
            <span className="text-green-600 capitalize font-bold line-clamp-1">
              About
            </span>
          </span>
        </div>
      </div>

      {/* Main Intro */}
      <div className="flex justify-center text-center mb-12 md:mb-24">
        <div>
          <span className="inline-block bg-green-50 text-primary text-sm font-semibold py-1 px-3 rounded-full mb-4">
            Tentang Kami
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold my-3 md:mb-8 md:mt-6 md:max-w-4xl mx-auto">
            Lebih dari 20 Tahun Menjadi Distributor Material Kayu Terpercaya
          </h1>
          <p className="max-w-4xl mx-auto text-muted-foreground text-lg">
            Sejak 2005, Kayuwa Indonesia Manufacturing telah menjadi Mitra Terpercaya untuk Menyediakan Jasa Laser Cutting dan Menyediakan Bahan Sparepart terpercaya di Makassar. Kami menyediakan berbagai produk berkualitas seperti plywood, MDL, HPL, particle board, dan lainnya untuk kebutuhan konstruksi maupun interior. kami berkomitmen memberikan produk terbaik dan layanan profesional. Bagi kami, kualitas dan pelayanan terbaik bukan sekadar janji, tetapi komitmen nyata yang tercermin dalam moto kami: Kepuasan pelanggan adalah prioritas utama kami.
          </p>
        </div>
      </div>

      {/* Philosophy, Vision, Mission Section */}
      <div className="md:h-[42rem] h-[50rem] relative md:mb-[8rem] rounded-3xl overflow-hidden mb-16">
        <div className="h-[30rem] w-full">
          {philosophyBg && (
             <Image src={philosophyBg.imageUrl} alt="Wood texture background" fill className="object-cover" data-ai-hint={philosophyBg.imageHint} />
          )}
        </div>
        <div className="absolute inset-0 flex justify-center items-end">
          <div className="flex md:flex-row flex-col md:container md:justify-evenly justify-center gap-4">
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border text-center md:w-1/3">
              <PhilosophyIcon />
              <p className="font-bold text-base md:text-2xl mb-3">Filosofi Kami</p>
              <ul className="list-disc text-left md:text-sm text-xs ms-3 text-muted-foreground space-y-1">
                <li>Semangat untuk terus meningkatkan produktivitas, efisiensi, dan kualitas layanan</li>
                <li>Pola pikir positif demi perbaikan berkelanjutan</li>
                <li>Fokus pada kedisiplinan, tanggung jawab, penghargaan, dan saling menghormati</li>
              </ul>
            </div>
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border text-center md:w-1/3">
              <VisionIcon />
              <p className="font-bold text-base md:text-2xl mb-3">Visi Kami</p>
              <p className="text-xs md:text-sm text-muted-foreground">
                Menjadi pilihan utama dalam penyediaan material kayu di Indonesia.
              </p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border text-center md:w-1/3">
              <MissionIcon />
              <p className="font-bold text-base md:text-2xl mb-3">Misi Kami</p>
              <ul className="list-disc text-left text-xs md:text-sm ms-2 text-muted-foreground space-y-1">
                <li>Menyediakan produk beragam dan berkualitas</li>
                <li>Menawarkan harga bersaing</li>
                <li>Memberikan layanan cepat dan terpercaya</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto md:max-h-[48rem] h-auto md:mb-32 mb-16 px-0">
        <div className="flex md:flex-row flex-col justify-center">
          <div className="rounded-3xl md:h-[48rem] md:w-[35rem] h-[23rem] relative overflow-hidden mb-8 md:mb-0">
             {featuresBg && (
                <Image src={featuresBg.imageUrl} alt="Plywood factory" fill className="object-cover" data-ai-hint={featuresBg.imageHint} />
             )}
          </div>
          <div className="flex flex-col md:ms-[4rem]">
            {featureCards.map((feature, index) => (
                <div key={index} className={`md:mt-0 ${index > 0 ? 'md:my-20 my-8' : ''}`}>
                    <Image src={feature.icon} alt={feature.title} width={56} height={56} className="mb-5" />
                    <p className="font-bold md:text-2xl text-sm mb-2">{feature.title}</p>
                    <p className="md:text-sm text-xs md:max-w-[25rem] text-muted-foreground">{feature.description}</p>
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* Distributor Section */}
      <div className='mb-16 md:mb-24'>
        <div className="text-center">
          <span className="btn-sm-reverse font-semibold text-sm inline-block bg-green-50 text-primary py-1 px-3 rounded-full">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold md:my-6 my-3">Lebih dari Sekedar Distributor</h2>
          <p className="text-lg text-muted-foreground md:max-w-3xl mx-auto md:mb-16 mb-8">
            Kami tidak hanya menjual produk, kami bantu Anda dari awal sampai akhir. Mulai dari pemilihan material hingga pengiriman.
          </p>
        </div>
        <div className="mx-auto grid md:gap-8 gap-4 md:grid-cols-3">
          {distributorCards.map((card) => {
            const image = PlaceHolderImages.find((img) => img.id === card.imageId);
            return (
              <div key={card.title} className="rounded-2xl overflow-hidden">
                {image && (
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-2.5">
                    <Image src={image.imageUrl} alt={card.title} fill className="object-cover" data-ai-hint={image.imageHint} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  </div>
                )}
                <div className="md:py-6">
                  <p className="text-[11px] font-semibold uppercase text-green-600 md:mb-4 mb-2">
                    {card.category}
                  </p>
                  <h3 className="font-bold text-xl md:mb-3 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
