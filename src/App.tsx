import "./App.css";
import { ActionSelector } from "./components/Tabs/ActionSelector";
import { WelcomeModal } from "./components/SetupFlow/WelcomeModal";
import { GameBoard } from "./components/GameBoard";
import { NavBar } from "./components/NavBar";
import { StockPrice } from "./components/StockPrice";
import { OrderHistory } from "./components/OrderHistory";

function App() {
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
      <WelcomeModal />
    </div>
  );
}

export default App;
