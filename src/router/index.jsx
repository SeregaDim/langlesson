import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import ArticlePage from '../pages/ArticlePage';
import Articles from '../content/articles/Articles';
import NotFoundPage from '../components/layout/NotFoundPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<ArticlePage />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
 
  );
  
}
