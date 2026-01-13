import { LinkItem } from '@/interface/types';
import React from 'react';

const footerLinks: LinkItem[] = [
  { text: 'Privacy Policy', url: '#' },
  { text: 'Terms of Service', url: '#' },
  { text: 'Cookie Settings', url: '#' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white py-6 text-center">
      <p className="text-sm text-gray-500">
        © {currentYear} SELISE Digital Platforms. All rights reserved.
      </p>
      <div className="mt-2">
        {footerLinks.map((link, index) => (
          <React.Fragment key={index}>
            <a
              href={link.url}
              className="mx-2 text-sm font-medium text-primary-500 hover:text-primary-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
            {index < footerLinks.length - 1 && <span className="text-gray-300">•</span>}
          </React.Fragment>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
