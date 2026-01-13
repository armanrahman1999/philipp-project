import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/main/header';
import Footer from '@/components/main/footer';

export const MainLayout = () => {
  const { pathname } = useLocation();
  const segments = pathname?.split('/').filter(Boolean);
  const firstSegment = segments?.[0] ?? undefined;
  const isEmailRoute = firstSegment === 'mail';
  const isChatRoute = firstSegment === 'chat';

  return (
    <div className="flex w-full min-h-screen relative">
      {/* <div className="absolute left-0 top-0 h-full">
        <AppSidebar />
      </div> */}

      <div
        className={`flex flex-col w-full h-full transition-[margin-left] duration-300 ease-in-out`}
      >
        <Header />
        <div
          className={`flex h-full bg-surface ${!isEmailRoute && !isChatRoute && 'p-4 sm:p-6 md:p-8'} `}
        >
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
