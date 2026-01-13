import { WhitepaperInfo } from '@/interface/types';
import React from 'react';

const whitepaperInfo: WhitepaperInfo = {
  title: 'Die Zukunft der KI in Unternehmen',
  fileSize: '3.2 MB',
  downloadUrl: '/Selise Whitepaper.pdf',
};

const MainCard: React.FC = () => {
  return (
    <main className="mx-auto max-w-4xl px-5 py-6 md:px-5 md:py-8">
      <div className="rounded-xl bg-white p-7 shadow-card md:p-8">
        {/* Success Badge */}
        <div className="mb-4 flex justify-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-success-50 px-3 py-1.5 text-sm font-semibold text-success-800">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" fill="#e8f5e9" />
              <path
                d="M9 12L11 14L15 10"
                stroke="#4caf50"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Eingabe erfolgreich
          </div>
        </div>

        <h1 className="mb-4 text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Du bist startklar!
        </h1>

        <p className="mb-6 text-center text-base text-gray-600 md:text-lg">
          Vielen Dank für Ihr Interesse. Ihr Exemplar von{' '}
          <strong className="font-semibold">{whitepaperInfo.title}</strong> steht zum sofortigen
          Download bereit. Wir haben Ihnen außerdem eine Kopie per E-Mail zugestellt.
        </p>

        {/* PDF Download Link */}
        <div className="mb-6 text-center">
          <a
            href={whitepaperInfo.downloadUrl}
            className="inline-flex items-center rounded-lg bg-blue-700 px-7 py-4 text-center font-semibold text-white shadow-button transition-colors hover:bg-primary-800 md:px-8 md:py-5"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="mr-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16V4M12 16L8 12M12 16L16 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex flex-col items-center">
              <span>Jetzt Whitepaper herunterladen</span>
              <small className="mt-1 text-sm font-normal opacity-90">
                PDF Version ({whitepaperInfo.fileSize})
              </small>
            </div>
          </a>
        </div>

        <p className="text-center text-sm text-gray-500">
          Durch das Herunterladen stimmen Sie unseren{' '}
          <a href="#" className="font-medium text-blue-500 underline hover:text-blue-700">
            Nutzungsbedingungen zu
          </a>
          .
        </p>
      </div>
    </main>
  );
};

export default MainCard;
