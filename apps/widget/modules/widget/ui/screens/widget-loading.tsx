"use client";

import { useSetAtom, useAtomValue } from "jotai";
import { LoaderIcon } from "lucide-react";
import {
  contactSessionIdAtomFamily,
  errorMessageAtom,
  loadingMessageAtom,
  organizationIdAtom,
  screenAtom,
  widgetSettingsAtom,
} from "../../atoms/widget";
import { WidgetHeader } from "../components/widget-header";
import { useEffect, useState } from "react";
import { useAction, useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";

type InitStep = "org" | "session" | "settings" | "vapi" | "done";

export const WidgetLoadingScreen = ({
  organizationId,
}: {
  organizationId: string | null;
}) => {
  const [step, setStep] = useState("org");
  const [sessionValid, setSessionValid] = useState(false);

  const loadingMessage = useAtomValue(loadingMessageAtom);
  const setWidgetSettings = useSetAtom(widgetSettingsAtom);
  const setErrorMessage = useSetAtom(errorMessageAtom);
  const setOrganizationId = useSetAtom(organizationIdAtom);
  const setScreen = useSetAtom(screenAtom);
  const setLoadingMessage = useSetAtom(loadingMessageAtom);

  const contactSessionId = useAtomValue(
    contactSessionIdAtomFamily(organizationId || "")
  );

  const validateOrganization = useAction(api.public.organizations.validate);

  useEffect(() => {
    const effect = async () => {
      if (step !== "org") {
        return;
      }

      setLoadingMessage("Finding organization ID...");

      if (!organizationId) {
        setErrorMessage("Organization ID is required");
        setScreen("error");
        return;
      }

      setLoadingMessage("Verifying organization...");

      try {
        const result = await validateOrganization({ organizationId });
        if (result.valid) {
          setOrganizationId(organizationId);
          setStep("session");
        } else {
          setErrorMessage(result.reason || "Invalid configuration");
          setScreen("error");
        }
      } catch {
        setErrorMessage("Unable to verify organization");
        setScreen("error");
      }
    };

    effect();
  }, [
    step,
    organizationId,
    setErrorMessage,
    setScreen,
    setOrganizationId,
    setStep,
    validateOrganization,
    setLoadingMessage,
  ]);

  const validateContactSession = useMutation(
    api.public.contactSessions.validate
  );
  useEffect(() => {
    const effect = async () => {
      if (step !== "session") {
        return;
      }

      setLoadingMessage("Finding contact session ID...");

      if (!contactSessionId) {
        setSessionValid(false);
        setStep("settings");
        return;
      }

      setLoadingMessage("Validating session...");

      try {
        const result = await validateContactSession({
          contactSessionId,
        });

        setSessionValid(result.valid);
        setStep("settings");
      } catch {
        setSessionValid(false);
        setStep("settings");
      }
    };

    effect();
  }, [step, contactSessionId, setLoadingMessage]);

  useEffect(() => {
    if (step !== "done") {
      return;
    }

    const hasValidSession = contactSessionId && sessionValid;
    setScreen(hasValidSession ? "selection" : "auth");
  }, [step, contactSessionId, sessionValid, setScreen]);

  const widgetSettings = useQuery(
    api.public.widgetSettings.getByOrganizationId,
    organizationId
      ? {
          organizationId,
        }
      : "skip"
  );

  useEffect(() => {
    if (step !== "settings") {
      return;
    }

    setLoadingMessage("Loading widget settings...");

    if (widgetSettings !== undefined) {
      setWidgetSettings(widgetSettings);
      setStep("done");
    }
  }, [step, widgetSettings, setStep, setLoadingMessage, setWidgetSettings]);

  return (
    <>
      <WidgetHeader>
        <div className="flex flex-col justify-between gap-y-2 px-2 py-6 font-semibold">
          <p className="text-3xl">Hi there! 👋</p>
          <p className="text-lg">Let's get you started</p>
        </div>
      </WidgetHeader>
      <div className="flex flex-1 flex-col items-center justify-center gap-y-4 p-4 text-muted-foreground">
        <LoaderIcon className="animate-spin" />
        <p>{loadingMessage || "Loading..."}</p>
      </div>
    </>
  );
};
