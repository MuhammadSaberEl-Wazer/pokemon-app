import React from "react";

export const BrowserRouter = ({ children }: { children: React.ReactNode }) =>
  React.createElement("div", null, children);
export const Routes = ({ children }: { children: React.ReactNode }) =>
  React.createElement("div", null, children);
export const Route = ({ element }: { element: React.ReactNode }) =>
  React.createElement("div", null, element);
export const Link = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => React.createElement("a", { href: to }, children);
export const useParams = () => ({ id: "1" });
