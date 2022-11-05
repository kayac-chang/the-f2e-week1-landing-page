import SVG from "~/components/SVG";
import clsx from "clsx";
import { button, flex, tab as _tab, theme } from "~/styles/common";
import { useToggle } from "~/hooks/useToggle";

/* === Styles === */
const tab = clsx(_tab, "py-4");

/* === Data === */
const links = Object.freeze({
  news: "https://2022.thef2e.com/news",
  resources: "https://hexschool.tw/OsAcp",
  jobs: "https://2022.thef2e.com/jobs",
  register: "https://2022.thef2e.com/signup",
});

/* === Components === */
function Header() {
  const [isMenuOpen, toggleMenu] = useToggle();
  return (
    <header className="ch related z-10 w-full">
      {/* sm */}
      <div className={clsx("px-4 py-5 lg:hidden", flex.row_center, theme.main)}>
        {/* menu trigger */}
        <button
          type="button"
          aria-label={isMenuOpen ? "close menu" : "open menu"}
          onClick={toggleMenu}
        >
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
        <>
          {/* backdrop */}
          <div
            className="fixed inset-0 -z-10 bg-black/25"
            onClick={toggleMenu}
          />

          {/* menu */}
          <nav className={clsx("absolute left-0 w-full px-4", theme.main)}>
            {/* close button */}
            <div className="flex py-2">
              <button
                type="button"
                aria-label="close menu"
                className="ml-auto"
                onClick={toggleMenu}
              >
                <SVG className="w-8" src={require("~/assets/icon/close.svg")} />
              </button>
            </div>

            {/* nav links */}
            <ul className="flex flex-col gap-8 pb-8 text-center">
              <li>
                <a className={tab} href={links.news}>
                  關卡資訊
                </a>
              </li>
              <li>
                <a className={tab} href={links.resources}>
                  攻略資源
                </a>
              </li>
              <li>
                <a className={tab} href={links.jobs}>
                  求職專區
                </a>
              </li>
              <li>
                <a
                  className={clsx(
                    button.outline,
                    "block text-center",
                    "py-2 px-6"
                  )}
                  href={links.register}
                >
                  登入
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}

      {/* lg */}
      <div className="hidden items-center px-4 py-5 lg:flex">
        {/* logo */}
        <div className="ml-6">
          <img alt="THE F2E LOGO" src={require("~/assets/image/logo-1x.png")} />
        </div>

        {/* nav links */}
        <nav className="ml-auto">
          <ul className="flex items-center gap-8">
            <li>
              <a className={tab} href={links.news}>
                關卡資訊
              </a>
            </li>
            <li>
              <a className={tab} href={links.resources}>
                攻略資源
              </a>
            </li>
            <li>
              <a className={tab} href={links.jobs}>
                求職專區
              </a>
            </li>
            <li>
              <a
                className={clsx(
                  button.outline,
                  "block text-center",
                  "py-2 px-6"
                )}
                href={links.register}
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
