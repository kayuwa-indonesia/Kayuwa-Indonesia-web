import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Facebook, Instagram, Linkedin, Youtube, ArrowDown } from 'lucide-react';

// Define SVG for TikTok and Threads
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" {...props}>
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
  </svg>
);

const ThreadsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" {...props}>
        <path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z"/>
    </svg>
);


export function Footer() {
  const currentYear = new Date().getFullYear();
  const logoUrl = 'https://firebasestorage.googleapis.com/v0/b/kayuwa-indonesia.firebasestorage.app/o/Kayuwa%20Indonesia%20logo%201.png?alt=media&token=af842188-de49-4ed3-9dd1-eee2e0892c4f';

  return (
    <footer className="bg-black text-white">
      <div className="relative px-4 text-center overflow-hidden">
        <div 
          className="absolute inset-0 h-full w-full object-cover bg-cover bg-center" 
          style={{backgroundImage: "url('https://picsum.photos/seed/footer/1920/400')"}}
          data-ai-hint="wood grain"
        ></div>
        <div className="absolute inset-0 bg-black opacity-80" />
        <div className="relative z-10 py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-3xl md:text-4xl font-extrabold text-white">
              Wujudkan Proyek Impian Anda dengan Solusi Material Terbaik!
            </h2>
            <Button asChild size="lg" className="font-bold text-base">
              <Link href="https://api.whatsapp.com/send?phone=6288975768184" target="_blank" rel="noopener noreferrer">
                Hubungi Kami Sekarang
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-base font-bold text-white">Site Map</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">Beranda</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Produk</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">Tentang</Link></li>
              <li><Link href="/articles" className="text-slate-400 hover:text-white transition-colors text-sm">Artikel</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-4 font-bold text-base text-white">Product</h3>
             <ul className="space-y-2 columns-2">
              <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">MFM</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">ACP</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">HMR</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Blockboard</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">PVC Board</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">PVC Sheet</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Glues</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Hardware</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-5">
            <h3 className="mb-4 font-bold text-base text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-slate-400">
                <span className="w-4 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M2 8.34V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.34" /><path d="m22 6.34-10-4-10 4" /><path d="M2 6.34V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2.34" /><path d="M12 12.34V22" /><path d="M22 10.34V14" /><path d="M2 10.34V14" /><path d="m22 14-10 4-10-4" /></svg>
                </span>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Jl. Margomulyo Industri XI 3/DD 16 RT.001 RW.001 Greges, Asemrowo Surabaya</a>
              </li>
               <li className="flex items-start text-sm text-slate-400">
                <span className="w-4 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M2 8.34V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.34" /><path d="m22 6.34-10-4-10 4" /><path d="M2 6.34V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2.34" /><path d="M12 12.34V22" /><path d="M22 10.34V14" /><path d="M2 10.34V14" /><path d="m22 14-10 4-10-4" /></svg>
                </span>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+62 889-7576-8184</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <ul className="mt-8 md:mt-0 flex md:flex-col space-x-6 md:space-x-0 md:space-y-4">
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5"/> <span className="hidden md:inline-block ml-2 text-sm">Instagram</span></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5"/> <span className="hidden md:inline-block ml-2 text-sm">Facebook</span></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5"/> <span className="hidden md:inline-block ml-2 text-sm">Linkedin</span></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-white transition-colors"><Youtube className="w-5 h-5"/> <span className="hidden md:inline-block ml-2 text-sm">Youtube</span></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-white transition-colors"><ThreadsIcon className="w-5 h-5"/> <span className="hidden md:inline-block ml-2 text-sm">Threads</span></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-white transition-colors"><TikTokIcon className="w-5 h-5"/> <span className="hidden md:inline-block ml-2 text-sm">TikTok</span></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto flex flex-col-reverse items-center justify-between px-4 py-4 sm:flex-row">
          <div className="mt-4 sm:mt-0 flex items-center">
             <Image src={logoUrl} alt="Kayuwa Indonesia Logo" width={24} height={24} />
            <p className="ml-4 text-center text-sm leading-loose text-slate-400 md:text-left">
              © {currentYear} Kayuwa Indonesia. All Rights Reserved.
            </p>
          </div>
          <div>
            {/* Scroll to top button can be added here later */}
          </div>
        </div>
      </div>
    </footer>
  );
}
