import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, X, Check } from 'lucide-react';

export interface SingleSelectOption {
  value: string;
  label: string;
  subtitle?: string;
  badge?: string;
}

export interface SingleSelectDropdownProps {
  id?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: (string | SingleSelectOption)[];
  searchable?: boolean;
  accentColor?: 'indigo' | 'emerald' | 'teal' | 'amber' | 'sky';
  className?: string;
  helpText?: string;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export const SingleSelectDropdown: React.FC<SingleSelectDropdownProps> = ({
  id,
  label,
  value,
  onChange,
  options,
  searchable = true,
  accentColor = 'indigo',
  className = '',
  helpText
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Normalize options to object form
  const normalizedOptions: SingleSelectOption[] = useMemo(() => {
    return options.map(opt => {
      if (typeof opt === 'string') {
        return { value: opt, label: opt };
      }
      return opt;
    });
  }, [options]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchable) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery('');
    }
  }, [isOpen, searchable]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Accent styles
  const accentClasses = {
    indigo: {
      borderFocus: 'border-indigo-500',
      badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      textAccent: 'text-indigo-400',
      activeItem: 'bg-indigo-950/40 text-indigo-200 font-semibold'
    },
    emerald: {
      borderFocus: 'border-emerald-500',
      badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      textAccent: 'text-emerald-400',
      activeItem: 'bg-emerald-950/40 text-emerald-200 font-semibold'
    },
    teal: {
      borderFocus: 'border-teal-500',
      badge: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
      textAccent: 'text-teal-400',
      activeItem: 'bg-teal-950/40 text-teal-200 font-semibold'
    },
    amber: {
      borderFocus: 'border-amber-500',
      badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      textAccent: 'text-amber-400',
      activeItem: 'bg-amber-950/40 text-amber-200 font-semibold'
    },
    sky: {
      borderFocus: 'border-sky-500',
      badge: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
      textAccent: 'text-sky-400',
      activeItem: 'bg-sky-950/40 text-sky-200 font-semibold'
    }
  }[accentColor];

  // Filter options
  const filteredOptions = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return normalizedOptions;
    return normalizedOptions.filter(opt =>
      opt.label.toLowerCase().includes(q) ||
      (opt.subtitle && opt.subtitle.toLowerCase().includes(q))
    );
  }, [normalizedOptions, searchQuery]);

  const currentOption = normalizedOptions.find(o => o.value === value);

  return (
    <div ref={containerRef} className={`relative space-y-1.5 ${className}`}>
      {/* Label Header */}
      <label htmlFor={id} className={`text-xs font-semibold block ${accentClasses.textAccent}`}>
        {label}
      </label>

      {/* Trigger Button */}
      <button
        id={id}
        type="button"
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => setIsOpen(prev => !prev)}
        className={`w-full min-h-11 px-3 py-2.5 rounded-xl bg-[#050505] border transition-all text-left flex items-center justify-between gap-2 active:scale-[0.99] ${
          isOpen ? `${accentClasses.borderFocus} shadow-lg ring-1 ring-white/10` : 'border-white/10 hover:border-white/20'
        }`}
      >
        <span className="text-sm text-white font-medium truncate">
          {currentOption ? currentOption.label : value || 'Select an option'}
        </span>

        <ChevronDown
          className={`w-4 h-4 text-white/60 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-white' : ''}`}
        />
      </button>

      {helpText && (
        <p className="text-[11px] text-white/50 leading-relaxed">{helpText}</p>
      )}

      {/* Dropdown Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.16, ease: EASE }}
            className="absolute left-0 right-0 top-full mt-2 z-50 rounded-2xl bg-[#0a0a0a] border border-white/15 shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col max-h-[360px]"
          >
            {/* Search Input (if enabled and enough options) */}
            {searchable && normalizedOptions.length > 5 && (
              <div className="p-3 border-b border-white/10 bg-[#070707]">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search options..."
                    className="w-full h-9 pl-9 pr-8 text-xs rounded-lg bg-[#050505] border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-indigo-500"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Options List */}
            <div
              role="listbox"
              className="overflow-y-auto p-2 space-y-0.5 flex-1 max-h-[280px]"
            >
              {filteredOptions.length === 0 ? (
                <div className="py-6 text-center text-xs text-white/40">
                  No matching options.
                </div>
              ) : (
                filteredOptions.map(opt => {
                  const isSelected = opt.value === value;
                  return (
                    <div
                      key={opt.value}
                      onClick={() => {
                        onChange(opt.value);
                        setIsOpen(false);
                      }}
                      className={`px-3 py-2 rounded-xl text-xs flex items-center justify-between cursor-pointer transition-colors select-none ${
                        isSelected
                          ? accentClasses.activeItem
                          : 'hover:bg-white/[0.04] text-white/80 hover:text-white'
                      }`}
                    >
                      <div className="min-w-0 pr-2">
                        <div className="font-medium truncate">{opt.label}</div>
                        {opt.subtitle && (
                          <div className="text-[11px] text-white/40 truncate">{opt.subtitle}</div>
                        )}
                      </div>

                      {isSelected && (
                        <Check className="w-4 h-4 text-indigo-400 shrink-0 stroke-[2.5]" />
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
