// components/ShareButtons.tsx
'use client';

import { FaFacebook, FaWhatsapp, FaLinkedin, FaCopy } from 'react-icons/fa';

export default function ShareButtons({ url }: { url: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    alert("Copied to clipboard!");
  };

  return (
    <div className="mt-10 flex gap-4 text-2xl">
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      <a href={`https://wa.me/?text=${url}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <button onClick={handleCopy}><FaCopy /></button>
    </div>
  );
}
