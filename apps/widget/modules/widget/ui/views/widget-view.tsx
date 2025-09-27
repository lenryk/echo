"use client";

import { useAtomValue } from "jotai";
// import { WidgetFooter } from "../components/widget-footer";
// import { WidgetHeader } from "../components/widget-header";
import { WidgetAuthScreen } from "../screens/widget-auth";
import { screenAtom } from "../../atoms/widget";
import { WidgetErrorScreen } from "../screens/widget-error";
import { WidgetLoadingScreen } from "../screens/widget-loading";
import { WidgetSelectionScreen } from "../screens/widget-selection";
import { WidgetChatScreen } from "../screens/widget-chat";

interface Props {
  organizationId: string;
}

export const WidgetView = (props: Props) => {
  const { organizationId } = props;
  const screen = useAtomValue(screenAtom);

  const screenComponents = {
    error: <WidgetErrorScreen />,
    loading: <WidgetLoadingScreen organizationId={organizationId} />,
    auth: <WidgetAuthScreen />,
    voice: <p>TODO: Voice</p>,
    inbox: <p>TODO: Inbox</p>,
    selection: <WidgetSelectionScreen />,
    chat: <WidgetChatScreen />,
    contact: <p>TODO: Contact</p>,
  };

  return (
    <main className="min-h-screen flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
      {screenComponents[screen]}
      {/* <WidgetFooter /> */}
    </main>
  );
};
