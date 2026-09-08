'use client';
import { Button } from '@/components/ui/button';
export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main" className="shell not-found">
      <p className="eyebrow">SOMETHING WENT WRONG</p>
      <h1>This page didn’t load.</h1>
      <p>Please try again, or return to the portfolio.</p>
      <Button className="button button-primary" onClick={reset}>
        Try again
      </Button>
      <a className="text-link" style={{ marginLeft: 24 }} href="/">
        Back to home
      </a>
    </main>
  );
}
