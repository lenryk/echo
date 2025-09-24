"use client";

// import { WidgetFooter } from "../components/widget-footer";
// import { WidgetHeader } from "../components/widget-header";
import { WidgetAuthScreen } from "../screens/widget-auth";

interface Props {
  organizationId: string;
}

export const WidgetView = (props: Props) => {
  const { organizationId } = props;

  return (
    <main className="min-h-screen flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
      <WidgetAuthScreen />

      {/* <WidgetFooter /> */}
    </main>
  );
};
