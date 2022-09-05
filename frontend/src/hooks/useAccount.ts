import { useContext } from "react";
import { AccountContext } from "src/components/Account";

const useAccount = () => {
  const context = useContext(AccountContext);

  if (context === undefined) {
    throw new Error('useAccount must be used within a AccountProvider');
  }
  return context;
}

export default useAccount;
