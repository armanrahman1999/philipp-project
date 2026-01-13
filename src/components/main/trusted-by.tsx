import { Company } from '@/interface/types';
import React from 'react';

const companies: Company[] = [
  { name: 'Amberg Loglay' },
  { name: 'Swiss-Ski' },
  { name: 'additiv' },
  { name: 'AXA' },
];

const TrustedBy: React.FC = () => {
  return (
    <section className="px-5 pb-10 text-center md:px-5 md:pb-12">
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 md:mb-6">
        Von Branchenführern vertraut
      </h3>
      <div className="flex flex-wrap justify-center gap-4 md:gap-5">
        {companies.map((company, index) => (
          <a
            key={index}
            href="#"
            className="flex min-w-[100px] items-center justify-center rounded-md bg-gray-100 px-4 py-2.5 text-sm font-bold text-gray-600 transition-colors hover:bg-gray-200 md:px-5"
            aria-label={company.name}
          >
            {company.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
