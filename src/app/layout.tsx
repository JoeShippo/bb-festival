import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: {
    default: 'Bell & Bear Summer Festival',
    template: '%s | Bell & Bear Summer Festival',
  },
  description:
    'A community-led summer festival at The Bell & Bear in Emberton, featuring live music, real ales, great food and village spirit.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
