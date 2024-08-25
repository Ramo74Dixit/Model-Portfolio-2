import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="flex justify-start space-x-4">
          <a href="#" className="hover:bg-pink-500">
            <img src="/insta-svg.svg" alt="Instagram" className="h-6 w-6 filter hover:brightness-0 hover:invert" />
          </a>
          <a href="#" className="hover:bg-blue-600">
            <img src="/facebook-svg.svg" alt="Facebook" className="h-6 w-6 filter hover:brightness-0 hover:invert" />
          </a>
          <a href="#" className="hover:bg-black">
            <img src="/twitter-svg.svg" alt="Twitter" className="h-6 w-6 filter hover:brightness-0 hover:invert" />
          </a>
          <a href="#" className="hover:bg-slate-400">
            <img src="/tiktok-svg.svg" alt="TikTok" className="h-6 w-6 filter hover:brightness-0 hover:invert" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
