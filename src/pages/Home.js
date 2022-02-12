import Deposit from '../components/deposit/Deposit';
import Dice from '../components/Dice';

export default function Home() {
  return (
    <div className="main-content">
      <Dice />
      <Deposit />
    </div>
  );
}
