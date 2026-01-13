import React from 'react';

const BookMeeting: React.FC = () => {
  return (
    <section className="px-5 pb-8 text-center md:px-5 md:pb-10">
      <p className="mb-3 text-xl font-semibold text-gray-800 md:text-2xl">
        Buchen Sie einen Termin mit Philipp Matter
      </p>
      <a
        href="https://calendly.com/philipp-matter/30min-1"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto inline-block rounded-lg bg-teal-800 px-6 py-3.5 font-semibold text-white shadow-teal-button transition-colors hover:bg-teal-700 md:px-7 md:py-4"
      >
        Planen Sie einen 30-minütigen Termin
      </a>
    </section>
  );
};

export default BookMeeting;
