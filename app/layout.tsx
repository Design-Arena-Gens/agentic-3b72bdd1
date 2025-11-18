import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'YT AI Agent ? Hinglish Viral Content Generator',
  description: 'Auto-generate viral-ready YouTube/Shorts scripts, titles, hooks, visuals, and posting strategy in Hinglish.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <h1>YT AI Agent (Hinglish)</h1>
            <p className="subtitle">Trending ideas ? Scripts ? Visuals ? Voiceover ? Posting Plan</p>
          </header>
          <main>{children}</main>
          <footer className="footer">Made for creators ? Optimized for Shorts/Reels/TikTok</footer>
        </div>
      </body>
    </html>
  );
}
