import { UICard } from "./UICard";

export default function GambleTab(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <UICard shadow className={"rounded-b-none flex flex-col dark:text-white " + props.className}>
      <div className="flex">
        <div>Buy Option</div>
        <div>Short META</div>
      </div>
      <div className="flex-1"></div>
    </UICard>
  );
}
