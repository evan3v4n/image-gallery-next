# Image Gallery App

This is an Image Gallery App built using Next.js, utilizing the Pexels API for fetching images, and Zod for runtime validation. TypeScript is used throughout the project for type safety and better developer experience.

## Features

- Browse a vast collection of images provided by Pexels.
- Responsive design for an optimal viewing experience on all devices.
- Type safety with TypeScript.
- Runtime validation with Zod.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v12.x or higher recommended)
- npm (v6.x or higher)

## Getting Started

To get the app running locally on your machine, follow these steps:

1. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/evan3v4n/image-gallery-app.git
   ```
2. install the dependencies:
  ```sh
  npm install
  ```

3. Create a .env.local file at the root of your project and add your Pexels API key:
  ```env
  NEXT_PUBLIC_PEXELS_API_KEY=your_pexels_api_key_here
```
4. Start the development server:
```sh
npm run dev
```
This will start the server on http://localhost:3000. You can now view the app in your browser.
Production Build

5. To create a production build, run:
```sh
npm run build
```
This will generate a .next folder with the production build. To start the production server, run:

```sh

npm start
