'use client';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';
export function CopyEmail() {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
  }
  return (
    <div className="copy-wrap">
      <Button
        variant="outline"
        className="copy-button"
        onClick={copy}
        aria-label="Copy Erik's email address"
      >
        {status === 'copied' ? (
          <Check size={16} aria-hidden="true" />
        ) : (
          <Copy size={16} aria-hidden="true" />
        )}
        {status === 'copied' ? 'Email copied' : 'Copy email'}
      </Button>
      <output className="copy-status">
        {status === 'failed'
          ? 'Copy unavailable. Select the email address above.'
          : status === 'copied'
            ? 'Copied to clipboard.'
            : ''}
      </output>
    </div>
  );
}
