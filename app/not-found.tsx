import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The requested page could not be found on Erik Olvera’s portfolio.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main" className="shell not-found">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>This route ends here.</h1>
      <p>The project or page you’re looking for isn’t at this address.</p>
      <a className="button button-primary" href="/">
        <ArrowLeft size={16} aria-hidden="true" />
        Back to my portfolio
      </a>
    </main>
  );
}
