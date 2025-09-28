import { HomeIcon, InboxIcon } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { Button } from "@workspace/ui/components/button";
import { useSetAtom } from "jotai";
import { screenAtom } from "../../atoms/widget";

export const WidgetFooter = () => {
  const setScreen = useSetAtom(screenAtom);

  let screen = "selection";
  return (
    <footer className="flex items-center justify-between border-t bg-background">
      <Button
        className="h-14 flex-1 rounded-none"
        onClick={() => setScreen("selection")}
        size="icon"
        variant="ghost"
        aria-label="Home"
        title="Home"
        type="button"
      >
        <HomeIcon
          className={cn("size-5", screen === "selection" && "text-primary")}
        />
      </Button>
      <Button
        className="h-14 flex-1 rounded-none"
        onClick={() => setScreen("inbox")}
        size="icon"
        variant="ghost"
        aria-label="Inbox"
        title="Inbox"
        type="button"
      >
        <InboxIcon
          className={cn("size-5", screen === "inbox" && "text-primary")}
        />
      </Button>
    </footer>
  );
};
