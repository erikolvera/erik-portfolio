import { ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <span>© {new Date().getFullYear()} Erik Olvera</span>
        <p>
          Built in Texas.{' '}
          <span className="footer-egg">Inspired by the beautiful game.</span>
        </p>
        <a className="link" href={site.github}>
          GitHub <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
