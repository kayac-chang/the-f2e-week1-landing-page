import SVG from "~/components/SVG";
import { RemoveScroll } from "react-remove-scroll";
import { useCallback, useState } from "react";
import { not } from "ramda";

function useToggle() {
  const [flag, setFlag] = useState(false);

  const toggle = useCallback(() => setFlag(not), [setFlag]);

  return [flag, toggle] as const;
}

function Header() {
  const [isMenuOpen, toggleMenu] = useToggle();
  return (
    <header className="ch fixed top-0 left-0 z-10 w-full bg-neutral-5">
      <div className="flex items-center px-4 py-5">
        {/* menu */}
        <button aria-label="open menu" type="button" onClick={toggleMenu}>
          <SVG className="s-8" src={require("~/assets/icon/menu.svg")} />
        </button>

        {/* logo */}
        <div className="ml-6">
          <img src={require("~/assets/image/logo.png")} alt="THE F2E LOGO" />
        </div>

        {/* register */}
        <button type="button" className="ml-auto border py-1.5 px-4">
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
    </header>
  );
}

export default Header;
