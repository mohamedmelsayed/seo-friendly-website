/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Adjust the build settings for resource-constrained environments
    experimental: {
        workerThreads: false, // Disables worker threads to reduce memory usage
        cpus: 1,             // Limits the build process to use a single CPU
    },
    // You may add further optimizations here
    outputFileTracing: false, // Disable output file tracing to save memory
    images: {
        // Optimize images for your environment
        deviceSizes: [640, 768, 1024, 1280, 1600],
        domains: ['example.com'], // Replace 'example.com' with your domain if you are using external images
    },
    swcMinify: true, // Use the SWC compiler to minimize build times
    webpack: (config) => {
        // Additional webpack customization if needed
        return config;
    },
};

export default nextConfig;
