import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/dashboard', // 用户访问的路径
        destination: '/ui/dashboard', // 内部实际对应的路径
      },
      // 如果 dashboard 目录下还有其他动态路由或文件，也需要添加对应的 rewrite 规则
      // 例如： /dashboard/:path* 映射到 /ui/dashboard/:path*
      {
         source: '/dashboard/:path*',
         destination: '/ui/dashboard/:path*',
      }
    ];
  },
  /* config options here */
};

export default nextConfig;
