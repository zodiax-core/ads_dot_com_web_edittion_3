import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/terms-conditions')({
  component: TermsConditions,
})

function TermsConditions() {
  return (
    <div className="min-h-screen bg-canvas text-ink py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm font-medium text-ink-soft hover:text-ink transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-serif italic mb-8">Terms and Conditions</h1>
        
        <div className="space-y-8 text-ink-soft">
          <section>
            <h2 className="text-xl font-medium text-ink mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website of ADS DOT COM, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4">2. Services Description</h2>
            <p>
              ADS DOT COM provides creative agency services, including but not limited to outdoor advertising, printing, fabrication, and event management. The information provided on this website is for general informational purposes about these services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4">3. Intellectual Property</h2>
            <p>
              All content included on this site, such as text, graphics, logos, images, and software, is the property of ADS DOT COM or its content suppliers and protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4">4. Limitation of Liability</h2>
            <p>
              ADS DOT COM shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services or website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Pakistan, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
