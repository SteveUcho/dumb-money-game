export interface TabProps {
  open: boolean;
  handleClose: () => void;
}

export interface OrderBookItem {
  id: number;
  type: string;
}

export interface OptionOrder extends OrderBookItem {
  type: "option";
  strike: number;
  contractSize: number;
  ask: number;
  expiration: string;
}

export interface StockOrder extends OrderBookItem {
  type: "stock";
  shares: number;
  ask: number;
}
