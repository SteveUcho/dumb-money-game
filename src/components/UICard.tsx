interface UICardProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: any;
  transition?: boolean;
  shadow?: boolean;
}

export function UICard(props: UICardProps) {
  const { shadow, transition, ...rest } = props;
  return (
    <div
      {...rest}
      className={`
        p-4
        border 
        rounded-3xl
        border-white/10 
        backdrop-blur-xl
        bg-white/5
        ring-1 
        ring-white/20
        ${shadow ? "shadow-xl shadow-white/10" : ""}
        ${transition ? "transition-all duration-150 hover:scale-[1.02]" : ""}
        ${props.className}
      `}
    >
      {props.children}
    </div>
  );
}
