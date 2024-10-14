import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { inter, lusitana, updock } from './ui/fonts';
import Image from 'next/image';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col rounded-lg bg-gray p-4 md:h-52" >
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-green-100 p-4 md:h-38 pb-20">
      
</div>
<div className="flex flex-col items-center gap-10 pt-20">   
      <p className={`${updock.className} antialiased text-9xl md:text-9xl font-bold text-center `}>
        <strong>Welcome</strong>
      </p>
      
      <Link
        href="/dashboard"
        className="flex items-center gap-5 rounded-lg bg-green-200 px-3 py-3 text-lg font-medium text-white transition-colors hover:bg-orange-200 md:text-xl"
      >
        <span>Get Started</span> 
        <ArrowRightIcon className="w-5 md:w-6" />
      </Link>
    </div>
     
    </main>
  );
}
