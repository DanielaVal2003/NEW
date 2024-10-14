import Link from 'next/link';

const links = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Data', href: '/dashboard/data' },
  { name: 'Report', href: '/dashboard/report' },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => (
     <Link key={link.name} href={link.href} className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-pink-100 hover:text-green-600 md:flex-none md:justify-center md:p-2 md:px-3">
     <p className="md:block">{link.name}</p>
   </Link>
   
      ))}
    </>
  );
}
