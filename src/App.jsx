import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Routes>
      {/* 공통 레이아웃(Header, Footer)이 적용되는 페이지 */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route 
          path="/projects" 
          element={<div className="max-w-5xl mx-auto py-20 text-center text-[#66584F]">Projects 페이지 준비 중입니다.</div>} 
        />
      </Route>

      {/* 404 예외 처리 페이지 */}
      <Route 
        path="*" 
        element={<div className="max-w-5xl mx-auto py-20 text-center text-[#66584F]">404 - 페이지를 찾을 수 없습니다.</div>} 
      />
    </Routes>
  );
}