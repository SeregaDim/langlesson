import { createContext, useContext, useState } from 'react';

const SidebarCtx = createContext(null);

export function SidebarProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <SidebarCtx.Provider value={{ open, setOpen }}>
      {children}
    </SidebarCtx.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarCtx);
}
