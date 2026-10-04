import { createStore } from 'zustand';

export type TabMenu = 'home' | 'match' | 'history' | 'profile';

export interface TabState {
  activeTab: TabMenu;
  setActiveTab: (tab: TabMenu) => void;
}

export const createTabStore = (initProps?: Partial<TabState>) => {
  return createStore<TabState>()((set) => ({
    activeTab: initProps?.activeTab ?? 'home',
    setActiveTab: (tab) => set({ activeTab: tab }),
  }));
};

export type TabStore = ReturnType<typeof createTabStore>;
