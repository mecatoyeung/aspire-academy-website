import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserPage = repoName.endsWith(".github.io");
const basePath = process.env.GITHUB_ACTIONS && repoName && !isUserPage ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
