export function GridHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={"text-gray-500 " + props.className}>{props.children}</div>;
}
