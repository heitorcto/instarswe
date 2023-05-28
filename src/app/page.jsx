import Navbar from "@/components/capa/Navbar";
import Footer from "@/components/capa/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="dark:bg-slate-800 pt-28">
        <div className="container mx-auto">
          <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
            </div>
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>

        <div className="container mx-auto mt-10">
          <div role="status" class="space-y-2.5 animate-pulse max-w-lg">
            <div class="flex items-center w-full space-x-2">
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <div class="flex items-center w-full space-x-2 max-w-[480px]">
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div class="flex items-center w-full space-x-2 max-w-[400px]">
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <div class="flex items-center w-full space-x-2 max-w-[480px]">
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div class="flex items-center w-full space-x-2 max-w-[440px]">
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            </div>
            <div class="flex items-center w-full space-x-2 max-w-[360px]">
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>
        </div>

        <div className="container mx-auto mt-10">
          <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
            <svg class="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" /></svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>

        <div className="container mx-auto mt-10">
          <div role="status" class="max-w-sm animate-pulse">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span class="sr-only">Loading...</span>
          </div>
        </div>

        <div className="container mx-auto mt-10">
          <div role="status" class="max-w-sm animate-pulse">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span class="sr-only">Loading...</span>
          </div>
        </div>

        <div className="container mx-auto mt-10">
          <div role="status" class="max-w-sm animate-pulse">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span class="sr-only">Loading...</span>
          </div>
        </div>

        <div className="container mx-auto mt-10">
          <div role="status" class="max-w-sm animate-pulse">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

