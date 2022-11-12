import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import SVG from "~/components/SVG";
import { useToggle } from "~/hooks/useToggle";
import { links } from "~/utils/const";
import { button, flex, tab as _tab, theme } from "~/styles/common";

const tab = clsx(_tab, "py-4");

function Header() {
  const [isMenuOpen, toggleMenu] = useToggle();
  return (
    <header className="related z-10 w-full font-noto-sans-tc">
      {/* sm */}
      <div
        className={clsx(
          "relative z-10 px-4 py-5 lg:hidden",
          flex.row_center,
          theme.main
        )}
      >
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

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* backdrop */}
            <motion.div
              className="fixed inset-0 -z-10 bg-black/25"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* menu */}
            <motion.nav
              className={clsx("absolute left-0 w-full px-4", theme.main)}
              initial={{ opacity: 0 }}
              animate={{ y: ["-30%", "0%"], opacity: 1 }}
              exit={{ y: "-30%", opacity: 0 }}
              transition={{ ease: "circOut", duration: 0.5 }}
            >
              {/* close button */}
              <div className="flex py-2">
                <button
                  type="button"
                  aria-label="close menu"
                  className="ml-auto"
                  onClick={toggleMenu}
                >
                  <SVG
                    className="w-8"
                    src={require("~/assets/icon/close.svg")}
                  />
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
            </motion.nav>
          </>
        )}
      </AnimatePresence>

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
                  "py-2 px-6",
                  "hover:text-secondary-1",
                  "hover:bg-secondary-1/10",
                  "hover:border-secondary-1",
                  "hover:shadow-secondary-1 hover:shadow-md"
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
