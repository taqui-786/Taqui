import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="container m-auto max-w-full md:max-w-3xl px-4 h-auto  py-16">
        <div className="flex items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl md:text-7xl font-instrument-serif italic font-medium text-title dark:text-gray-50 tracking-tight transition-colors duration-300">404</h1>
                <p className="text-lg md:text-2xl font-instrument-serif italic font-medium text-title dark:text-gray-50 tracking-tight transition-colors duration-300">Page Not Found</p>
                <Link href="/" className="text-lg md:text-2xl font-instrument-serif italic font-medium text-title dark:text-gray-50 tracking-tight transition-colors duration-300">Go Back</Link>
            </div>
        </div>
    </div>
  )
}