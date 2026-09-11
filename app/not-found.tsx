import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
  description:
    'The requested page could not be found on Erik Olvera’s portfolio.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main" className="shell not-found">
      <p className="label label-strike">404 · Page not found</p>
      <h1>This route ends here.</h1>
      <p className="not-found-body">
        The project or page you’re looking for isn’t at this address.
      </p>
      <a className="button" href="/">
        <ArrowLeft size={16} aria-hidden="true" />
        Back to my portfolio
      </a>
    </main>
  );
}
