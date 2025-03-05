import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "./global.css";
import { Toaster } from "./shared/ui/atoms/Sonner";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
        <Meta />
        <Links />
      </head>
      <body className="font-primary">
        {children}
        <ScrollRestoration />
        <Scripts />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
