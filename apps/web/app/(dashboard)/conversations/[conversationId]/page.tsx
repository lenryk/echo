import { ConversationDetailsView } from "@/modules/dashboard/ui/views/conversations-id";
import { Id } from "@workspace/backend/_generated/dataModel";
import React from "react";

const ConversationDetails = async ({
  params,
}: {
  params: Promise<{ conversationId: string }>;
}) => {
  const { conversationId } = await params;

  return (
    <ConversationDetailsView
      conversationId={conversationId as Id<"conversations">}
    />
  );
};

export default ConversationDetails;
