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
import Footer from "~/components/Footer";
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
    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=optional",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=optional",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.cdnfonts.com/css/monument-extended",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.cdnfonts.com/css/pilot-command",
  },
  {
    rel: "icon",
    type: "image/x-icon",
    href: "https://2022.thef2e.com/favicon.ico",
  },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "The F2E 前端 & UI 修煉精神時光屋",
  description:
    "你想變強嗎？你想獲得力量嗎？你想透過前端 / UI 改變你的生活，但找不到地方修練嗎？如果你的答案是「Yes」那麼你來對地方了！",
  viewport: "width=device-width,initial-scale=1",
  "og:image": require("~/assets/image/preview.jpg"),
});

export async function loader() {
  return json({});
}

export default function App() {
  return (
    <html lang="en">
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
