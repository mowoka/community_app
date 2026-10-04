'use client';

import { type ReactNode, createContext, useContext, useState } from 'react';
import { useStore } from 'zustand';
import { createTabStore, type TabState, type TabStore } from './tab-store';

// Fix: Use `TabStore` (the type), not `TabStoreContext` (the value)
export const TabStoreContext = createContext<TabStore | null>(null);

export interface TabStoreProviderProps {
  children: ReactNode;
}

export const TabStoreProvider = ({ children }: TabStoreProviderProps) => {
  const [tabStore] = useState(createTabStore());

  return (
    <TabStoreContext.Provider value={tabStore}>
      {children}
    </TabStoreContext.Provider>
  );
};

export const useTabStore = <T,>(selector: (store: TabState) => T): T => {
  const tabStoreContext = useContext(TabStoreContext);

  if (!tabStoreContext) {
    throw new Error('useTabStore must be used within TabStoreProvider');
  }

  return useStore(tabStoreContext, selector);
};
