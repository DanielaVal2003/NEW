import Nav from '../ui/dashboard/nav';
import NavLinks from '../ui/dashboard/nav-links';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="divide-y divide-slate-100 bg-green-100 min-h-screen">
      <Nav>
        <NavLinks />
      </Nav>
      <main>{children}</main>
    </div>
  );
}
