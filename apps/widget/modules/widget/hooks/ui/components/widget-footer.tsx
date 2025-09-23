import { HomeIcon, InboxIcon } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { Button } from "@workspace/ui/components/button";

export const WidgetFooter = () => {
  let screen = "selection";
  return (
    <footer className="flex items-center justify-between border-t bg-backgoround">
      <Button
        className="h-14 flex-1 rounded-none"
        onClick={() => {}}
        size="icon"
        variant="ghost"
      >
        <HomeIcon
          className={cn("size-5", screen === "selection" && "text-primary")}
        />
      </Button>
      <Button
        className="h-14 flex-1 rounded-none"
        onClick={() => {}}
        size="icon"
        variant="ghost"
      >
        <InboxIcon
          className={cn("size-5", screen === "imbox" && "text-primary")}
        />
      </Button>
    </footer>
  );
};
