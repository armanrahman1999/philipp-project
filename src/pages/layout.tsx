import BookMeeting from '@/components/main/book-meeting';
import Footer from '@/components/main/footer';
import Header from '@/components/main/header';
import MainCard from '@/components/main/main-card';
import TrustedBy from '@/components/main/trusted-by';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MainCard />
      <BookMeeting />
      <TrustedBy />
      <Footer />
    </div>
  );
};
export default Layout;
