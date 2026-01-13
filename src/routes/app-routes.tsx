import Layout from '@/pages/layout';
import { Routes, Route } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};
