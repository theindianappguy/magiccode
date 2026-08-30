import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default nextConfig;

// Enables Cloudflare bindings in `next dev`.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
