import Logo from "./Logo";
import NavLinks from "./NavbarLink";
import NavbarActions from "./NavbarActions";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Logo />

        <NavLinks />

        <div className="flex items-center gap-2">
          <NavbarActions />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}