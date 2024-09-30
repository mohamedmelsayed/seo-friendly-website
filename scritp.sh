#!/bin/bash
echo "Setting up Node.js application..."

# Set your application's root path to the subdomain directory
APP_ROOT="/home/rwvdtjvw/sample2.prf-dev.com/"

# Replace the `<your_cpanel_username>` with your actual cPanel username
echo "Changing directory to application root: $APP_ROOT"
cd "$APP_ROOT" || exit

# Extract the uploaded zip file
echo "Extracting project files..."
unzip -o seo-friendly-website.zip

# Install production dependencies
echo "Installing production dependencies..."
npm install --production

echo "Deployment setup is completed. Please proceed with the cPanel Node.js App setup."
