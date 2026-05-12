import { liquidGlass } from "@/utils/classNames";
import { availableBalanceAtom } from "@/utils/atoms";
import { useAtom } from "jotai";

export function AvailableBalance() {
  const [availableBalance] = useAtom(availableBalanceAtom);

  return (
    <div className={liquidGlass + " absolute -top-15 left-0 right-0 py-2 text-center text-lg"}>
      ${availableBalance.toFixed(2)} Available Balance
    </div>
  );
}
