import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    } else if (consent === 'accepted') {
      enableAnalytics();
    }
  }, []);

  const enableAnalytics = () => {
    // If the user accepts, we tell gtag that consent is granted
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    enableAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-[#f5f0eb] border-t border-[#121212]/10 shadow-lg animate-in slide-in-from-bottom-10" style={{ backgroundColor: 'var(--color-canvas)', borderColor: 'rgba(18, 18, 18, 0.1)' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm flex-1" style={{ color: 'var(--color-ink-soft)' }}>
          <p>
            We use cookies to analyze website traffic and optimize your website experience. 
            By accepting our use of cookies, your data will be aggregated with all other user data. 
            Read our <a href="/privacy-policy" className="underline hover:opacity-80" style={{ color: 'var(--color-ink)' }}>Privacy Policy</a> to learn more.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-medium transition-colors rounded-full border"
            style={{ color: 'var(--color-ink)', borderColor: 'rgba(18, 18, 18, 0.1)' }}
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-medium transition-colors rounded-full"
            style={{ backgroundColor: 'var(--color-ink)', color: 'var(--color-canvas)' }}
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="p-2 transition-colors rounded-full"
            style={{ color: 'var(--color-ink-soft)' }}
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
