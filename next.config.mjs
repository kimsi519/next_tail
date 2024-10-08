/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // 프로토콜 설정 (https)
        hostname: "via.placeholder.com", // 허용할 호스트 이름
        port: "", // 포트는 비워둡니다 (기본 포트를 사용)
        pathname: "/**", // 모든 경로를 허용 (와일드카드 사용)
      },
    ],
  },
};

export default nextConfig;
