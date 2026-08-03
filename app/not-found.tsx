import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="section-padding flex flex-col items-center justify-center text-center min-h-[60vh]">
      <p className="text-8xl font-display font-bold text-primary/20 mb-4">404</p>
      <h1 className="font-display font-bold text-secondary text-4xl sm:text-5xl mb-4">
        Page not found
      </h1>
      <p className="font-body text-muted text-lg max-w-md mb-10">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button href="/">Back to Home</Button>
        <Button href="/contact" variant="outline">Contact Us</Button>
      </div>
    </div>
  )
}
