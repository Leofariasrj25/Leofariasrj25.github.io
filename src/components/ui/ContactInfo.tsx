import React from "react";

interface ContactInfoProps {
  nationality: string;
  location: string;
  phone: string;
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ nationality, location, phone, email }) => {
  const phoneDigits = phone.replace(/[^\d+]/g, "");

  return (
    <div className="flex flex-wrap items-center gap-3 text-[11px] text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-[0.2em]">
      <span className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden />
        {nationality}
      </span>
      <span className="text-neutral-300 dark:text-neutral-700">/</span>
      <span className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" aria-hidden />
        {location}
      </span>
      <span className="text-neutral-300 dark:text-neutral-700">/</span>
      <a
        href={`tel:${phoneDigits}`}
        className="hover:text-orange-600 dark:hover:text-orange-300 transition-colors"
      >
        {phone}
      </a>
      <span className="text-neutral-300 dark:text-neutral-700">/</span>
      <a
        href={`mailto:${email}`}
        className="hover:text-orange-600 dark:hover:text-orange-300 transition-colors"
      >
        {email}
      </a>
    </div>
  );
};

export default ContactInfo;
