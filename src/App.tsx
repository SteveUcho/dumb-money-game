import "./App.css";
import { ActionSelector } from "./components/ActionSelector";
import { GameBoard } from "./components/GameBoard";
import { NavBar } from "./components/NavBar";
import { OrderBook } from "./components/OrderBook";
import { PlayerPortfolio } from "./components/PlayerPortfolio";
import { StockPrice } from "./components/StockPrice";

function App() {
  return (
    <div className="h-dvh flex flex-col overflow-clip relative">
      {/* ui */}
      <NavBar />
      <StockPrice />
      {/* Game Content */}
      <GameBoard className="flex-1" />
      <OrderBook className="h-1/2 md:h-1/3" />
      <PlayerPortfolio className="sm:left-auto" />
      <ActionSelector />
    </div>
  );
}

export default App;
