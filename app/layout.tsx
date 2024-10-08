// app/layout.tsx

import "./globals.css"; // 글로벌 CSS를 적용 (Tailwind CSS나 일반 스타일을 포함 가능)
import { ReactNode } from "react";

// 레이아웃의 타입을 정의 (children으로 페이지의 콘텐츠를 전달받음)
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen">
          {children} {/* 각 페이지의 콘텐츠가 여기에 렌더링됨 */}
        </main>
      </body>
    </html>
  );
}
