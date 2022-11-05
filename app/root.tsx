import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from "~/components/Header";
import tailwindStylesheetUrl from "~/styles/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStylesheetUrl },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Noto+Sans+TC:wght@400;500;700&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.cdnfonts.com/css/monument-extended",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.cdnfonts.com/css/pilot-command",
  },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader() {
  return json({});
}

function Footer() {
  return (
    <footer className="flex p-4">
      <small className="mx-auto text-center font-montserrat">
        Copyright © 2022 HexSchool.All rights reserved.
      </small>
    </footer>
  );
}

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex h-screen flex-col overflow-hidden bg-neutral-5 text-white">
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
