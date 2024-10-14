import Nav from "./nav"
const links = [
    { name: 'Home', href: '/dashboard' },
    {
      name: 'Invoices',
      href: '/dashboard/invoices',
    
    },
    { name: 'Customers', href: '/dashboard/customers'},
  ];
export default function NavItem({ href,children }) {
    return (
      <li>
        <a
          href={href}
          className={`block px-3 py-2 rounded-md`}
        >
          {children}
        </a>
      </li>
    )
  }
  