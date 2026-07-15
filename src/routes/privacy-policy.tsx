import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
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
        
        <h1 className="text-4xl font-serif italic mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-ink-soft">
          <section>
            <h2 className="text-xl font-medium text-ink mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.
            </p>
            <p>
              We also automatically collect certain information when you visit our website, including your IP address, browser type, and information about your interactions with our site using cookies and similar tracking technologies like Google Analytics.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide, maintain, and improve our services;</li>
              <li>Process transactions and send related information;</li>
              <li>Send technical notices, updates, and support messages;</li>
              <li>Respond to your comments, questions, and requests;</li>
              <li>Analyze trends, usage, and activities in connection with our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4">3. Cookies and Analytics</h2>
            <p>
              We use Google Analytics to help us understand how users engage with our website. Google Analytics uses cookies to track visitor interactions. You can choose to accept or decline cookies through our cookie consent banner. If you decline, your data will not be tracked by Google Analytics.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4">4. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at info@adsdotcom.net.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
