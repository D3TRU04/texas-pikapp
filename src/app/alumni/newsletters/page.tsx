'use client'

import React, { useState } from 'react';
import { Header } from '../../home/components/Header';
import { Footer } from '../../home/components/Footer';
import { Lock, FileText, Eye, Download, ExternalLink, X } from 'lucide-react';

// Get the passkey from the environment variable (set in .env)
const NEWSLETTER_PASSKEY = process.env.NEWSLETTER_PASSKEY_CODE || '';

const newsletters = [
  {
    title: "Fall 2024 Newsletter.pdf",
    url: "/files/pkp-fall2024-newsletter.pdf",
    subtitle: "PDF Document",
  },
  {
    title: "Spring 2025 Newsletter.pdf",
    url: "/files/pkp-spring2025-newsletter.pdf",
    subtitle: "PDF Document",
  },
];

export default function NewslettersPage() {
  const [passkey, setPasskey] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState('');
  const [quickLookUrl, setQuickLookUrl] = useState<string | null>(null);
  const [quickLookTitle, setQuickLookTitle] = useState('');

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === NEWSLETTER_PASSKEY) {
      setUnlocked(true);
      setError('');
    } else {
      setError('Incorrect passkey. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f3] flex flex-col relative overflow-x-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23005696' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '60px 60px'}} />
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-2 z-10">
        {!unlocked ? (
          <div className="bg-white rounded-xl shadow p-14 max-w-md w-full flex flex-col items-center border border-gray-200 mt-32 mb-32">
            <Lock className="w-12 h-12 text-[#E7A614] mb-6 drop-shadow" />
            <h2 className="text-2xl font-md mb-2 text-[#005596] tracking-tight">Alumni Newsletters</h2>
            <p className="text-gray-600 mb-8 text-center text-base">Enter the alumni passkey to access the latest newsletters.</p>
            <form onSubmit={handleUnlock} className="w-full flex flex-col gap-4">
              <input
                type="password"
                placeholder="Enter passkey"
                className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:border-[#E7A614] focus:ring-2 focus:ring-[#E7A614]/30 outline-none transition text-lg bg-white/80"
                value={passkey}
                onChange={e => setPasskey(e.target.value)}
                autoFocus
              />
              {error && <div className="text-red-500 text-sm text-center">{error}</div>}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#E7A614] to-[#ffd34d] text-[#005596] font-bold py-3 rounded-lg shadow hover:from-[#ffd34d] hover:to-[#E7A614] transition-colors text-lg tracking-wide mt-1"
              >
                Unlock
              </button>
            </form>
          </div>
        ) : (
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8 mt-20 mb-20">
            <h1 className="text-4xl md:text-5xl text-[#E7A614] text-center mt-10 mb-10">Check Out our Newsletter!</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-14">
              {newsletters.map((newsletter, idx) => (
                <div key={idx} className="w-full">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#fbe9e7]">
                        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='#e53935'><path d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-7V3.5L18.5 9H13z'/></svg>
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 truncate text-sm">{newsletter.title}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{newsletter.subtitle}</div>
                      </div>
                      <a
                        href={newsletter.url}
                        download
                        className="ml-2 px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded shadow text-xs transition-colors"
                      >
                        Download
                      </a>
                    </div>
                    <div className="w-full border-t border-gray-100 pt-3">
                      <iframe
                        src={newsletter.url}
                        title={`Newsletter PDF Preview ${newsletter.title}`}
                        className="w-full h-[400px] rounded border border-gray-200 bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease;
        }
        @keyframes modal-pop {
          0% { transform: scale(0.95) translateY(40px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-modal-pop {
          animation: modal-pop 0.25s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
} 