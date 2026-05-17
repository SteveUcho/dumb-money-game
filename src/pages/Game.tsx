import { ActionSelector } from "@/components/Tabs/ActionSelector";
import { GameBoard } from "@/components/GameBoard";
import { NavBar } from "@/components/NavBar";
import { StockPrice } from "@/components/StockPrice";
import { OrderHistory } from "@/components/OrderHistory";

function GamePage() {
  return (
    <div className="h-dvh flex flex-col overflow-clip relative">
      {/* ui */}
      <NavBar />
      <StockPrice />
      {/* Game Content */}
      <GameBoard className="flex-1" />
      <OrderHistory className="h-1/2 md:h-1/3" />
      {/* floating items */}
      <ActionSelector />
    </div>
  );
}

export default GamePage;
