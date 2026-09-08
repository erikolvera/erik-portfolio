import { ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <span>© {new Date().getFullYear()} Erik Olvera</span>
        <p>Thoughtful software, from the inside out.</p>
        <a className="text-link" href={site.github}>
          GitHub <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
