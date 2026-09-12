import { ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';
import Image from 'next/image';

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark" href="/" aria-label="Erik Olvera home">
          <Image
            className="wordmark-badge"
            src="/favicon.svg"
            alt=""
            width={44}
            height={50}
            unoptimized
          />
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
