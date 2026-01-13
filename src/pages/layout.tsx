import BookMeeting from '@/components/main/book-meeting';
import MainCard from '@/components/main/main-card';
import TrustedBy from '@/components/main/trusted-by';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainCard />
      <BookMeeting />
      <TrustedBy />
    </div>
  );
};
export default Layout;
