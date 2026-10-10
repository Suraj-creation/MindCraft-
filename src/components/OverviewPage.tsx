import React from 'react';
import type { NavTab, RoleLens } from '../types';
import { HeroOperatingSystem } from './HeroOperatingSystem';
import { CapabilitiesSection, IndustriesSection, ExpertiseReachSection, ApproachSection, ClosingSection } from './LandingSections';
import { InsightsStrip } from './InsightsStrip';

/** The Overview route. Loaded on demand like every other page, so its data stays out of the shared bundle. */
export const OverviewPage: React.FC<{
  navigate: (tab: NavTab) => void;
  onOpenIntake: () => void;
  roleLens: RoleLens;
  onSelectIndustry: (id: string) => void;
}> = ({ navigate, onOpenIntake, roleLens, onSelectIndustry }) => (
  <div>
    <HeroOperatingSystem onOpenIntake={onOpenIntake} setActiveTab={navigate} roleLens={roleLens} />
    <CapabilitiesSection setActiveTab={navigate} onOpenIntake={onOpenIntake} />
    <IndustriesSection setActiveTab={navigate} onOpenIntake={onOpenIntake} onSelectIndustry={onSelectIndustry} />
    <ApproachSection setActiveTab={navigate} onOpenIntake={onOpenIntake} />
    <ExpertiseReachSection setActiveTab={navigate} onOpenIntake={onOpenIntake} />
    <InsightsStrip onNavigate={navigate} />
    <ClosingSection setActiveTab={navigate} onOpenIntake={onOpenIntake} />
  </div>
);
