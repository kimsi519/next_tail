// app/components/Modal.tsx

"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const onPopState = () => {
      router.back();
    };
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, [router]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={() => router.back()}
    >
      <div
        className="bg-white p-5 rounded"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
