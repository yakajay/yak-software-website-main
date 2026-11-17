import { useEffect, useRef, useState } from 'react';
import { ShieldCheck, X } from 'lucide-react';

// Bump when the policy text changes materially: visitors are asked again.
const PRIVACY_POLICY_VERSION = '2026-11-17';
const STORAGE_KEY = 'yak-privacy-consent';

export type ConsentChoice = 'accepted' | 'declined';

export function readConsent(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw) as { choice?: ConsentChoice; version?: string };
    return saved.version === PRIVACY_POLICY_VERSION && saved.choice ? saved.choice : null;
  } catch {
    return null;
  }
}

function saveConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ choice, version: PRIVACY_POLICY_VERSION, date: new Date().toISOString() }),
    );
  } catch {
    // Storage blocked (private mode etc.): the choice lasts for this visit only.
  }
}

const UPDATED = '17 November 2026';

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <div className="text-gray-600 leading-relaxed space-y-2">{children}</div>
    </section>
  );
}

export function PrivacyPolicyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
        className="bg-white w-full sm:max-w-3xl max-h-[90vh] rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-gray-100">
          <div>
            <h2 id="privacy-title" className="text-2xl font-extrabold text-gray-900">Privacy Policy</h2>
            <p className="text-sm text-gray-500">Last updated: {UPDATED}</p>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
            aria-label="Close privacy policy"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="overflow-y-auto px-6 sm:px-8 py-6">
          <p className="text-gray-600 leading-relaxed mb-6">
            Yak Software Solutions Private Limited ("Yak Software", "we", "us") respects your privacy. This policy
            explains what personal data we collect through yaksofts.com, why we collect it, and the choices you have.
            It is written with India's Digital Personal Data Protection Act, 2023 in mind.
          </p>

          <PolicySection title="1. Information we collect">
            <p><strong>Enquiry form.</strong> When you submit the contact form we collect your name, work email,
              company, the service you are interested in and your message.</p>
            <p><strong>Job applications.</strong> If you email your resume to hr@yaksofts.com, we receive the details
              in your resume and email.</p>
            <p><strong>Technical data.</strong> Like most websites, our hosting provider records standard request
              data such as IP address, browser type and pages requested, for security and reliability.</p>
          </PolicySection>

          <PolicySection title="2. How we use it">
            <p>We use your information only to respond to your enquiry, discuss staffing requirements or AJAX-Portal,
              assess job applications, and keep the website secure. We do not sell your personal data and do not use
              it for third-party advertising.</p>
          </PolicySection>

          <PolicySection title="3. Cookies and local storage">
            <p>We do not use advertising or analytics cookies. We store your privacy choice in your browser's local
              storage so we don't ask again on every visit. You can clear it at any time through your browser
              settings.</p>
          </PolicySection>

          <PolicySection title="4. Service providers">
            <p>We share data only with providers that help us run the website:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Web3Forms</strong>: delivers contact-form submissions to our inbox.</li>
              <li><strong>Vercel</strong>: hosts the website.</li>
              <li><strong>Google Fonts</strong>: serves the fonts used on the site, which shares your IP address
                with Google.</li>
            </ul>
            <p>These providers may process data outside India, under their own privacy and security commitments.</p>
          </PolicySection>

          <PolicySection title="5. How long we keep it">
            <p>We keep enquiries and applications only as long as needed to respond and for related business
              follow-up, or as required by law, and then delete them.</p>
          </PolicySection>

          <PolicySection title="6. Your rights">
            <p>You can ask us to access, correct or delete your personal data, or withdraw your consent, by emailing{' '}
              <a href="mailto:info@yaksofts.com" className="text-[#5a8a33] font-semibold underline">info@yaksofts.com</a>.
              Withdrawing consent does not affect processing done before you withdrew it.</p>
          </PolicySection>

          <PolicySection title="7. Security">
            <p>We take reasonable technical and organisational measures to protect your data. Data sent to and from
              this website is encrypted in transit (HTTPS).</p>
          </PolicySection>

          <PolicySection title="8. Changes and contact">
            <p>We may update this policy. If we make significant changes, we will ask for your consent again when
              you next visit. For privacy questions or grievances, contact us at{' '}
              <a href="mailto:info@yaksofts.com" className="text-[#5a8a33] font-semibold underline">info@yaksofts.com</a>,
              Yak Software Solutions Private Limited, Nizampet, Hyderabad, India.</p>
          </PolicySection>
        </div>
      </div>
    </div>
  );
}

export function PrivacyConsentBanner({
  onOpenPolicy,
  onChoice,
}: {
  onOpenPolicy: () => void;
  onChoice: (choice: ConsentChoice) => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!readConsent()) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  if (!visible) return null;

  const choose = (choice: ConsentChoice) => {
    saveConsent(choice);
    onChoice(choice);
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label="Privacy notice"
      className="fixed bottom-0 inset-x-0 z-[60] p-3 sm:p-5 animate-fade-in-up"
    >
      <div className="max-w-5xl mx-auto bg-[#0d1013]/95 backdrop-blur-xl border border-white/10 text-white rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center gap-5">
        <div className="flex items-start gap-4 flex-1">
          <div className="w-11 h-11 rounded-xl bg-[#76b445] flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-bold text-base sm:text-lg mb-1">Your privacy matters to us</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              We use the details you share with us only to respond to your enquiries, and we don't use advertising or
              tracking cookies. Please review and accept our{' '}
              <button onClick={onOpenPolicy} className="text-[#9be15d] font-semibold underline underline-offset-2">
                Privacy Policy
              </button>{' '}
              to continue.
            </p>
          </div>
        </div>
        <div className="flex gap-3 md:flex-shrink-0">
          <button
            onClick={() => choose('declined')}
            className="flex-1 md:flex-none px-5 py-2.5 rounded-full border border-white/25 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={() => choose('accepted')}
            className="flex-1 md:flex-none px-6 py-2.5 rounded-full bg-[#76b445] hover:bg-[#5a8a33] text-white font-bold shadow-lg shadow-[#76b445]/30 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
