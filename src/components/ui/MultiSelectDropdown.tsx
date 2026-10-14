import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, X, Check, CheckSquare, Square, Sparkles } from 'lucide-react';

export interface MultiSelectOption {
  value: string;
  label: string;
  group?: string;
  subtitle?: string;
  badge?: string;
}

export interface MultiSelectDropdownProps {
  id?: string;
  label: string;
  placeholder?: string;
  selectedValues: string[];
  onChange: (values: string[]) => void;
  options: MultiSelectOption[];
  groups?: string[];
  searchable?: boolean;
  accentColor?: 'indigo' | 'emerald' | 'teal' | 'amber' | 'sky';
  allowSelectAllInGroup?: boolean;
  maxDisplayChips?: number;
  className?: string;
  helpText?: string;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  id,
  label,
  placeholder = 'Select items...',
  selectedValues,
  onChange,
  options,
  groups,
  searchable = true,
  accentColor = 'indigo',
  allowSelectAllInGroup = true,
  maxDisplayChips = 2,
  className = '',
  helpText
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGroupFilter, setActiveGroupFilter] = useState<string>('all');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

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
      setActiveGroupFilter('all');
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
      checkBg: 'bg-indigo-600 border-indigo-500 text-white',
      hoverBg: 'hover:bg-indigo-950/30',
      textAccent: 'text-indigo-400'
    },
    emerald: {
      borderFocus: 'border-emerald-500',
      badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      checkBg: 'bg-emerald-600 border-emerald-500 text-white',
      hoverBg: 'hover:bg-emerald-950/30',
      textAccent: 'text-emerald-400'
    },
    teal: {
      borderFocus: 'border-teal-500',
      badge: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
      checkBg: 'bg-teal-600 border-teal-500 text-white',
      hoverBg: 'hover:bg-teal-950/30',
      textAccent: 'text-teal-400'
    },
    amber: {
      borderFocus: 'border-amber-500',
      badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      checkBg: 'bg-amber-600 border-amber-500 text-white',
      hoverBg: 'hover:bg-amber-950/30',
      textAccent: 'text-amber-400'
    },
    sky: {
      borderFocus: 'border-sky-500',
      badge: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
      checkBg: 'bg-sky-600 border-sky-500 text-white',
      hoverBg: 'hover:bg-sky-950/30',
      textAccent: 'text-sky-400'
    }
  }[accentColor];

  // Toggle item selection
  const toggleOption = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter(v => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  // Toggle all options in a specific group
  const toggleGroup = (groupName: string) => {
    const groupOptionValues = options.filter(o => o.group === groupName).map(o => o.value);
    const allSelected = groupOptionValues.every(v => selectedValues.includes(v));

    if (allSelected) {
      // Deselect all in group
      onChange(selectedValues.filter(v => !groupOptionValues.includes(v)));
    } else {
      // Select all in group
      const newSelected = Array.from(new Set([...selectedValues, ...groupOptionValues]));
      onChange(newSelected);
    }
  };

  // Select all or clear all
  const selectAll = () => {
    onChange(filteredOptions.map(o => o.value));
  };

  const clearAll = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    onChange([]);
  };

  // Filter options based on search query and active group tab
  const filteredOptions = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return options.filter(opt => {
      const matchesGroup = activeGroupFilter === 'all' || opt.group === activeGroupFilter;
      const matchesQuery = !q ||
        opt.label.toLowerCase().includes(q) ||
        (opt.subtitle && opt.subtitle.toLowerCase().includes(q)) ||
        (opt.group && opt.group.toLowerCase().includes(q));
      return matchesGroup && matchesQuery;
    });
  }, [options, searchQuery, activeGroupFilter]);

  // Grouped options map
  const groupedFilteredOptions = useMemo(() => {
    if (!groups || groups.length === 0) return null;
    const map = new Map<string, MultiSelectOption[]>();
    groups.forEach(g => map.set(g, []));

    filteredOptions.forEach(opt => {
      const g = opt.group || 'Other';
      if (!map.has(g)) map.set(g, []);
      map.get(g)!.push(opt);
    });

    return map;
  }, [groups, filteredOptions]);

  // Selected labels lookup
  const selectedOptions = useMemo(() => {
    const valueMap = new Map(options.map(o => [o.value, o]));
    return selectedValues.map(v => valueMap.get(v)).filter(Boolean) as MultiSelectOption[];
  }, [selectedValues, options]);

  return (
    <div ref={containerRef} className={`relative space-y-1.5 ${className}`}>
      {/* Label and Selected Count Header */}
      <div className="flex items-center justify-between">
        <label htmlFor={id} className={`text-xs font-semibold block ${accentClasses.textAccent}`}>
          {label}
        </label>
        {selectedValues.length > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="text-[11px] text-white/50 hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Clear ({selectedValues.length})</span>
          </button>
        )}
      </div>

      {/* Trigger Button */}
      <button
        id={id}
        type="button"
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => setIsOpen(prev => !prev)}
        className={`w-full min-h-11 px-3 py-2 rounded-xl bg-[#050505] border transition-all text-left flex items-center justify-between gap-2 active:scale-[0.99] ${
          isOpen ? `${accentClasses.borderFocus} shadow-lg ring-1 ring-white/10` : 'border-white/10 hover:border-white/20'
        }`}
      >
        <div className="min-w-0 flex-1 flex flex-wrap items-center gap-1.5 overflow-hidden">
          {selectedValues.length === 0 ? (
            <span className="text-sm text-white/40">{placeholder}</span>
          ) : (
            <>
              {selectedOptions.slice(0, maxDisplayChips).map(opt => (
                <span
                  key={opt.value}
                  className={`text-xs px-2 py-0.5 rounded-md border font-medium flex items-center gap-1 shrink-0 ${accentClasses.badge}`}
                >
                  <span className="truncate max-w-[120px]">{opt.label}</span>
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleOption(opt.value);
                    }}
                    className="hover:text-white text-white/60 ml-0.5 cursor-pointer"
                  >
                    ×
                  </span>
                </span>
              ))}
              {selectedValues.length > maxDisplayChips && (
                <span className="text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/70 font-semibold tabular-nums shrink-0">
                  +{selectedValues.length - maxDisplayChips} more
                </span>
              )}
            </>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <ChevronDown
            className={`w-4 h-4 text-white/60 transition-transform duration-200 ${isOpen ? 'rotate-180 text-white' : ''}`}
          />
        </div>
      </button>

      {helpText && (
        <p className="text-[11px] text-white/50 leading-relaxed">{helpText}</p>
      )}

      {/* Animated Dropdown Menu Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.16, ease: EASE }}
            className="absolute left-0 right-0 top-full mt-2 z-50 rounded-2xl bg-[#0a0a0a] border border-white/15 shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col max-h-[420px]"
          >
            {/* Search and Action Bar */}
            <div className="p-3 border-b border-white/10 bg-[#070707] space-y-2.5">
              {searchable && (
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
              )}

              {/* Group Quick Tabs (if groups are provided) */}
              {groups && groups.length > 0 && (
                <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none text-[11px]">
                  <button
                    type="button"
                    onClick={() => setActiveGroupFilter('all')}
                    className={`px-2 py-0.5 rounded-md whitespace-nowrap transition-colors ${
                      activeGroupFilter === 'all'
                        ? 'bg-white/15 text-white font-semibold'
                        : 'text-white/50 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    All ({options.length})
                  </button>
                  {groups.map(g => {
                    const count = options.filter(o => o.group === g).length;
                    return (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setActiveGroupFilter(g)}
                        className={`px-2 py-0.5 rounded-md whitespace-nowrap transition-colors ${
                          activeGroupFilter === g
                            ? 'bg-white/15 text-white font-semibold'
                            : 'text-white/50 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {g} ({count})
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Action Links */}
              <div className="flex items-center justify-between text-[11px] text-white/60 px-0.5">
                <span>{filteredOptions.length} available</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={selectAll}
                    className="hover:text-white transition-colors"
                  >
                    Select visible
                  </button>
                  <span>·</span>
                  <button
                    type="button"
                    onClick={() => clearAll()}
                    className="hover:text-white transition-colors"
                  >
                    Clear selection
                  </button>
                </div>
              </div>
            </div>

            {/* Options List */}
            <div
              role="listbox"
              aria-multiselectable="true"
              className="overflow-y-auto p-2 space-y-1 flex-1 max-h-[300px]"
            >
              {filteredOptions.length === 0 ? (
                <div className="py-8 text-center text-xs text-white/40">
                  No matching options found.
                </div>
              ) : groupedFilteredOptions && activeGroupFilter === 'all' ? (
                // Grouped presentation
                Array.from(groupedFilteredOptions.entries()).map(([groupName, groupOpts]) => {
                  if (groupOpts.length === 0) return null;
                  const allInGroupSelected = groupOpts.every(o => selectedValues.includes(o.value));
                  const someInGroupSelected = groupOpts.some(o => selectedValues.includes(o.value));

                  return (
                    <div key={groupName} className="mb-3">
                      <div className="px-2.5 py-1.5 flex items-center justify-between text-xs font-semibold text-white/50 border-b border-white/[0.06] mb-1">
                        <span>{groupName}</span>
                        {allowSelectAllInGroup && (
                          <button
                            type="button"
                            onClick={() => toggleGroup(groupName)}
                            className={`text-[11px] hover:text-white transition-colors font-normal ${
                              allInGroupSelected ? 'text-indigo-400' : 'text-white/40'
                            }`}
                          >
                            {allInGroupSelected ? 'Deselect region' : 'Select region'}
                          </button>
                        )}
                      </div>

                      <div className="space-y-0.5">
                        {groupOpts.map(opt => {
                          const isSelected = selectedValues.includes(opt.value);
                          return (
                            <div
                              key={opt.value}
                              onClick={() => toggleOption(opt.value)}
                              className={`px-2.5 py-2 rounded-xl text-xs flex items-center justify-between cursor-pointer transition-colors select-none ${
                                isSelected
                                  ? `${accentClasses.hoverBg} bg-white/[0.04] text-white`
                                  : 'hover:bg-white/[0.03] text-white/80'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div
                                  className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                                    isSelected
                                      ? accentClasses.checkBg
                                      : 'border-white/20 bg-black/40'
                                  }`}
                                >
                                  {isSelected && <Check className="w-3 h-3 stroke-[2.5]" />}
                                </div>
                                <div className="min-w-0">
                                  <div className={`font-medium truncate ${isSelected ? 'text-white font-semibold' : ''}`}>
                                    {opt.label}
                                  </div>
                                  {opt.subtitle && (
                                    <div className="text-[11px] text-white/40 truncate">
                                      {opt.subtitle}
                                    </div>
                                  )}
                                </div>
                              </div>

                              {opt.badge && (
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-white/50 shrink-0 ml-2">
                                  {opt.badge}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              ) : (
                // Flat presentation
                filteredOptions.map(opt => {
                  const isSelected = selectedValues.includes(opt.value);
                  return (
                    <div
                      key={opt.value}
                      onClick={() => toggleOption(opt.value)}
                      className={`px-2.5 py-2 rounded-xl text-xs flex items-center justify-between cursor-pointer transition-colors select-none ${
                        isSelected
                          ? `${accentClasses.hoverBg} bg-white/[0.04] text-white`
                          : 'hover:bg-white/[0.03] text-white/80'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                            isSelected
                              ? accentClasses.checkBg
                              : 'border-white/20 bg-black/40'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[2.5]" />}
                        </div>
                        <div className="min-w-0">
                          <div className={`font-medium truncate ${isSelected ? 'text-white font-semibold' : ''}`}>
                            {opt.label}
                          </div>
                          {opt.subtitle && (
                            <div className="text-[11px] text-white/40 truncate">
                              {opt.subtitle}
                            </div>
                          )}
                        </div>
                      </div>

                      {opt.badge && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-white/50 shrink-0 ml-2">
                          {opt.badge}
                        </span>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Bottom Footer Info */}
            <div className="p-2.5 bg-[#050505] border-t border-white/10 flex items-center justify-between text-[11px] text-white/50">
              <span className="tabular-nums">{selectedValues.length} selected</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors"
              >
                Done
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
