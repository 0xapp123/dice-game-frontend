import { useState } from 'react';
import BasicButtons from './BasicButtons';
import ColorTextFields from './ColorTextFields';
import { useWallet } from '@solana/wallet-adapter-react';
export default function Deposit() {
  const wallet = useWallet();
  const [payout, setPayout] = useState(0);

  return (
    <div className="deposit">
      {wallet.publicKey !== null && (
        <>
          <ColorTextFields setPayout={(e) => setPayout(e)} />
          <BasicButtons payout={payout} />
        </>
      )}
    </div>
  );
}
