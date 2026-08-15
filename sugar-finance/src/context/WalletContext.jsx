import { createContext, useContext, useState, useEffect, useCallback } from "react";

// Wallet context backed by the browser's injected EIP-1193 provider
// (MetaMask and most Ethereum wallets expose window.ethereum). It requests
// accounts, remembers an already-authorized connection, and reacts to account
// changes. No chain switching is forced while Robinhood Chain values are
// placeholders; wire NETWORK.CHAIN_ID into a wallet_switchEthereumChain call
// here once the official values are set.
const WalletContext = createContext(null);

function shorten(addr) {
  return addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";
}

export function WalletProvider({ children }) {
  const [address, setAddress] = useState(null);
  const [connecting, setConnecting] = useState(false);

  const getProvider = () => (typeof window !== "undefined" ? window.ethereum : undefined);

  const connect = useCallback(async () => {
    const provider = getProvider();
    if (!provider) return { ok: false, reason: "no-wallet" };
    try {
      setConnecting(true);
      const accounts = await provider.request({ method: "eth_requestAccounts" });
      const acc = accounts && accounts.length ? accounts[0] : null;
      setAddress(acc);
      return acc ? { ok: true, address: acc } : { ok: false, reason: "no-account" };
    } catch (e) {
      // 4001 = user rejected the request.
      return { ok: false, reason: e && e.code === 4001 ? "rejected" : "error" };
    } finally {
      setConnecting(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    // Wallets keep the site authorized; this clears the app-side session only.
    setAddress(null);
  }, []);

  useEffect(() => {
    const provider = getProvider();
    if (!provider) return;
    let active = true;

    provider
      .request?.({ method: "eth_accounts" })
      .then((accs) => {
        if (active && accs && accs.length) setAddress(accs[0]);
      })
      .catch(() => {});

    const onAccountsChanged = (accs) => setAddress(accs && accs.length ? accs[0] : null);
    provider.on?.("accountsChanged", onAccountsChanged);

    return () => {
      active = false;
      provider.removeListener?.("accountsChanged", onAccountsChanged);
    };
  }, []);

  return (
    <WalletContext.Provider
      value={{
        hasWallet: !!getProvider(),
        address,
        shortAddress: shorten(address),
        connected: !!address,
        connecting,
        connect,
        disconnect,
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
