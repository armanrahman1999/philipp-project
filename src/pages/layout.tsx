import Header from '@/components/main/header';
import Footer from '@/components/main/footer';
import BookMeeting from '@/components/main/book-meeting';
import MainCard from '@/components/main/main-card';
import TrustedBy from '@/components/main/trusted-by';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 flex flex-col">
        <MainCard />
        <BookMeeting />
        <TrustedBy />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
