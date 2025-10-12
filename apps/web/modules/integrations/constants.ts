export const INTEGRATIONS = [
  {
    id: "html",
    title: "HTML",
    icon: "/languages/html5.svg",
  },
  {
    id: "react",
    title: "React",
    icon: "/languages/react.svg",
  },
  {
    id: "nextjs",
    title: "Next.js",
    icon: "/languages/nextjs.svg",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: "/languages/javascript.svg",
  },
];

export type IntegrationId = (typeof INTEGRATIONS)[number]["id"];

const WIDGET_URL =
  process.env.NEXT_PUBLIC_WIDGET_URL || "http://localhost:3001/widget.js";
const INTEGRATION_SCRIPT = `<script src="${WIDGET_URL}" data-organization-id="{{ORGANIZATION_ID}}"></script>`;

export const HTML_SCRIPT = INTEGRATION_SCRIPT;
export const REACT_SCRIPT = INTEGRATION_SCRIPT;
export const NEXTJS_SCRIPT = INTEGRATION_SCRIPT;
export const JAVASCRIPT_SCRIPT = INTEGRATION_SCRIPT;
