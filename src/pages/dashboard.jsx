import Sidebar from "../components/sidebar";

import TransactionsCard from "../components/transactions-card";
import BalanceCard from "../components/balance-card";
import InvestmentsCard from "../components/investments-card";
import BreakdownCard from "../components/breakdown-card";
import HistoryCard from "../components/history-card";
import Topbar from "../components/topbar";
export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 w-full h-full bg-neutral-100">
      <Sidebar />
      <div className="col-span-10 row-span-full w-full px-8">
        <Topbar/>
        <div className="w-full grid grid-cols-10 gap-4">
          <TransactionsCard />
          <BalanceCard />
          <InvestmentsCard />
          <BreakdownCard />
          <HistoryCard/>
        </div>
      </div>
    </div>
  );
}
