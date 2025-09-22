"use client";

import { Button } from "@workspace/ui/components/button";
import { useVapi } from "@/modules/widget/hooks/use-vapi";

export default function Page() {
  const {
    isSpeaking,
    isConnecting,
    isConnected,
    transcript,
    startCall,
    endCall,
  } = useVapi();

  return (
    <div>
      <Button onClick={() => startCall()}>Start Call</Button>
      <Button onClick={() => endCall()} variant="destructive">
        End Call
      </Button>
      <p>is Connected: {`${isConnected}`}</p>
      <p>is isConnecting: {`${isConnecting}`}</p>
      <p>is isSpeaking,: {`${isSpeaking}`}</p>
    </div>
  );
}
