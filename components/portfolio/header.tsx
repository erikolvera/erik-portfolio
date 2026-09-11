import { ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark" href="/" aria-label="Erik Olvera home">
          <span className="wordmark-no" aria-hidden="true">
            26
          </span>
          <span className="wordmark-name">Erik Olvera</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="/#work">Work</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
          <a className="nav-resume" href={site.resume}>
            Résumé <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
