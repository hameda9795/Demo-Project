import Link from 'next/link'

export default function FloatingButton() {
  return (
    <Link 
      href="https://techsolutionsutrecht.nl/contact" 
      target="_blank"
      className="fixed bottom-lg right-lg z-[100] flex items-center justify-center px-md py-sm bg-accent text-white font-body font-semibold text-sm rounded-full shadow-lg shadow-accent/40 transition-all duration-300 hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/50"
      aria-label="Contact opnemen"
    >
      <span>Contact</span>
      <span className="absolute w-full h-full rounded-full bg-accent animate-pulse-slow -z-10" />
    </Link>
  )
}
