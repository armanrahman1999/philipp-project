import { Outlet } from 'react-router-dom';
import Header from '@/components/main/header';
import Footer from '@/components/main/footer';

export const MainLayout = () => {
  return (
    <div className="flex w-full min-h-screen relative">
      {/* <div className="absolute left-0 top-0 h-full">
        <AppSidebar />
      </div> */}

      <div className="flex flex-col w-full min-h-screen transition-[margin-left] duration-300 ease-in-out">
        <Header />
        <div className="flex-1 flex flex-col bg-surface">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
