'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Folder, Download, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/sections/ThemeContext';

const navItems = [
  { href: '/', label: 'About', icon: Home },
  { href: '/projects', label: 'Projects', icon: Folder },
  { href: '/download-cv', label: 'Download CV', icon: Download, hideOnMobile: true },
];

export const Navbar = () => {
  const pathname = usePathname();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="flex justify-center pt-5">
      <nav className="font-[family-name:var(--font-navbar)] flex items-center gap-1 rounded-xl border border-white/10 bg-black/90 px-6 py-3 shadow-lg sm:px-8 md:px-15">
        
        {/* Left Section: Navigation Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map(({ href, label, icon: Icon, hideOnMobile }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`${hideOnMobile ? 'hidden sm:flex' : 'flex'} items-center gap-1 rounded-full px-2 py-1 text-s font-medium transition-colors duration-200 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm
                  ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
              >
                <Icon size={12} className="sm:hidden" />
                <Icon size={16} className="hidden sm:block" />
                <span className="sm:inline">{label}</span>
              </Link>
            );
          })}
        </div>

        {/* Divider */}
        <div className="mx-2 h-6 w-px bg-white/20" />

        {/* Right Section: Centered Theme Toggle */}
        <div className="flex items-center justify-center min-w-[40px] sm:min-w-[48px]">
          <button
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-gray-300 transition-all duration-200 hover:border-white hover:text-white sm:h-9 sm:w-9"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <>
                <Moon size={14} className="sm:hidden" />
                <Moon size={16} className="hidden sm:block" />
              </>
            ) : (
              <>
                <Sun size={14} className="sm:hidden" />
                <Sun size={16} className="hidden sm:block" />
              </>
            )}
          </button>
        </div>

      </nav>
    </div>
  );
};