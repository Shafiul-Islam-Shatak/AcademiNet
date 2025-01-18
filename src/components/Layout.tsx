import Navbar from './Navbar';
import Footer from './Footer';
import { useRouter } from 'next/router';

const Layout = ({ children} : {children : React.ReactNode}) => {
  const router = useRouter();

  // Define the routes where Navbar and Footer should not be displayed
  const noNavAndFooterRoutes = ['/login', '/register'];

  // Check if the current route is in the noNavAndFooterRoutes array
  const showNavAndFooter = !noNavAndFooterRoutes.includes(router.pathname);

  return (
    <>
      {showNavAndFooter && <Navbar />}
      {children}
      {showNavAndFooter && <Footer />}
    </>
  );
};

export default Layout;
