import SVG from "~/components/SVG";
import { RemoveScroll } from "react-remove-scroll";
import { useCallback, useState } from "react";
import { not } from "ramda";
import { button, tab as _tab } from "~/styles/common";
import clsx from "clsx";

const tab = clsx(_tab, "py-4");

function useToggle() {
  const [flag, setFlag] = useState(false);

  const toggle = useCallback(() => setFlag(not), [setFlag]);

  return [flag, toggle] as const;
}

function Header() {
  const [isMenuOpen, toggleMenu] = useToggle();
  return (
    <header className="ch fixed top-0 left-0 z-10 w-full bg-neutral-5">
      {/* sm */}
      <div className="flex items-center px-4 py-5 lg:hidden">
        {/* menu */}
        <button aria-label="open menu" type="button" onClick={toggleMenu}>
          <SVG className="s-8" src={require("~/assets/icon/menu.svg")} />
        </button>

        {/* logo */}
        <div className="ml-6">
          <img
            alt="THE F2E LOGO"
            src={require("~/assets/image/logo-0.5x.png")}
          />
        </div>

        {/* register */}
        <button
          type="button"
          className={clsx(button.outline, "ml-auto", "py-1.5 px-4")}
        >
          立即報名
        </button>
      </div>

      {isMenuOpen && (
        <RemoveScroll>
          <div className="fixed inset-0 -z-10 bg-black/25" />
          <nav className="h-full w-full px-4">
            <div className="flex py-2">
              <button className="ml-auto" onClick={toggleMenu}>
                <SVG className="w-8" src={require("~/assets/icon/close.svg")} />
              </button>
            </div>
            <ul className="flex flex-col gap-8 pb-8 text-center">
              <li>
                <a className="text-neutral-2" href="/">
                  關卡資訊
                </a>
              </li>
              <li>
                <a className="text-neutral-2" href="/">
                  攻略資源
                </a>
              </li>
              <li>
                <a className="text-neutral-2" href="/">
                  求職專區
                </a>
              </li>
              <li>
                <a href="/" className="button block border py-2 text-center">
                  登入
                </a>
              </li>
            </ul>
          </nav>
        </RemoveScroll>
      )}

      {/* lg */}
      <div className="hidden items-center px-4 py-5 lg:flex">
        {/* logo */}
        <div className="ml-6">
          <img alt="THE F2E LOGO" src={require("~/assets/image/logo-1x.png")} />
        </div>

        <nav className="ml-auto">
          <ul className="flex items-center gap-8">
            <li>
              <a
                className={tab}
                aria-current="page"
                href="https://2022.thef2e.com/news"
              >
                關卡資訊
              </a>
            </li>
            <li>
              <a className={tab} href="https://hexschool.tw/OsAcp">
                攻略資源
              </a>
            </li>
            <li>
              <a className={tab} href="https://2022.thef2e.com/jobs">
                求職專區
              </a>
            </li>
            <li>
              <a
                href="/"
                className={clsx(
                  button.outline,
                  "block text-center",
                  "py-2 px-6"
                )}
              >
                登入
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
