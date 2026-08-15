import { createContext, useContext, useState, useCallback } from "react";

// Demo wallet context. Sugar Finance has not launched, so nothing here connects
// to a real provider. It only drives the demo Connect Wallet modal and never
// reports a connected account.
const WalletContext = createContext(null);

export function WalletProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <WalletContext.Provider
      value={{
        isDemo: true,
        connected: false, // Never true pre-launch.
        modalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet must be used within a WalletProvider");
  return ctx;
}
