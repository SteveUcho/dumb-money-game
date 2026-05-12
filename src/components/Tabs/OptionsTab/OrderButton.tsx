interface OrderButtonProps {
  contracts: number;
  limitPrice: number;
}

export function OrderButton({ contracts, limitPrice }: OrderButtonProps) {
  return (
    <div className="relative">
      <button className="relative bg-rh-green text-white py-2 px-6 mt-2 rounded-full w-full flex justify-between">
        <div>
          <span>Total Cost</span>
        </div>
        <div>
          <span className="text-right">${contracts * 100 * limitPrice}</span>
        </div>
      </button>
      <div className="absolute -bottom-4 left-0 right-0 text-xs text-gray-400 text-center">
        {limitPrice} x {contracts}00 contracts
      </div>
    </div>
  );
}
