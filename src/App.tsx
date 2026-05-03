import "./App.css";
import { ActionSelector } from "./components/ActionSelector";
import GambleTab from "./components/GambleTab";
import { GameBoard } from "./components/GameBoard";
import { NavBar } from "./components/NavBar";
import { OrderBook } from "./components/OrderBook";
import { PlayerPortfolio } from "./components/PlayerPortfolio";
import { StockPrice } from "./components/StockPrice";

function App() {
  return (
    <div className="h-dvh flex flex-col overflow-clip dark:bg-black relative">
      {/* ui */}
      <NavBar />
      <StockPrice />
      {/* Game Content */}
      <GameBoard className="flex-1" />
      <OrderBook className="h-1/2 md:h-1/3" />
      <PlayerPortfolio className="absolute h-3/5 md:h-1/3 mx-4 left-0 right-0 bottom-0" />
      <ActionSelector>
        <GambleTab className="absolute h-3/5 md:h-1/3 md:w-1/2 md:right-auto mx-4 left-0 right-0 bottom-0" />
        <GambleTab className="absolute h-3/5 md:h-1/3 mx-4 left-0 right-0 bottom-0" />
      </ActionSelector>
    </div>
  );
}

export default App;
