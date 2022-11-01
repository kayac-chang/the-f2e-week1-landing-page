import SVG from "~/components/SVG";

function Header() {
  return (
    <header className="fixed top-0 left-0 z-10 w-full bg-neutral-5">
      <div className="flex items-center px-4 py-5">
        {/* menu */}
        <button aria-label="open menu" type="button">
          <SVG className="s-8" src={require("~/assets/icon/menu.svg")} />
        </button>

        {/* logo */}
        <div className="ml-6">
          <img src={require("~/assets/image/logo.png")} alt="THE F2E LOGO" />
        </div>

        {/* register */}
        <button type="button" className="ch ml-auto py-1.5 px-4 border">
          立即報名
        </button>
      </div>
    </header>
  );
}

export default Header;
