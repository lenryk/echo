import { cn } from "@workspace/ui/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const WidgetHeader = (props: Props) => {
  const { children, className } = props;
  return (
    <header
      className={cn(
        "bg-gradient-to-b from-primary to-[#0b63f3] p-4 text-primary-foreground",
        className
      )}
    >
      {children}
    </header>
  );
};
