import {
  Navbar as BaseNavbar,
  NavbarMenu as BaseNavbarMenu,
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from "@olinfo/react-components";
import { MenuIcon } from "lucide-react";
import { Link } from "wouter";

import logo from "~/logo.svg";

export function Navbar() {
  return (
    <BaseNavbar color="bg-base-300 text-base-content">
      <div>
        <Dropdown className="md:hidden">
          <DropdownButton>
            <MenuIcon aria-label="Menu" />
          </DropdownButton>
          <DropdownMenu>
            <NavbarMenu />
          </DropdownMenu>
        </Dropdown>
        <img {...logo} alt="Logo OII" className="mx-2 h-8 w-auto flex-none" />
        <div className="max-md:hidden">
          <BaseNavbarMenu>
            <NavbarMenu />
          </BaseNavbarMenu>
        </div>
      </div>
    </BaseNavbar>
  );
}

function NavbarMenu() {
  return (
    <>
      <li>
        <Link href="~/">Home</Link>
      </li>
      <li>
        <Link href="~/fibonacci-primarie/">Fibonacci - Primarie</Link>
      </li>
      <li>
        <Link href="~/fibonacci-secondarie/">Fibonacci - Secondarie</Link>
      </li>
      <li>
        <Link href="~/scolastiche/">OII - Scolastiche</Link>
      </li>
    </>
  );
}
