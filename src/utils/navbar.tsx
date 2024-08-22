import {
  Navbar as BaseNavbar,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
} from "@olinfo/react-components";
import { Link } from "wouter";

import logo from "~/logo.svg";

export function Navbar() {
  return (
    <BaseNavbar color="bg-base-300 text-base-content">
      <NavbarBrand>
        <img {...logo} alt="Logo OII" className="h-full w-auto" />
      </NavbarBrand>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="~/">Home</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="~/fibonacci-primarie/">Fibonacci - Primarie</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="~/fibonacci-secondarie/">Fibonacci - Secondarie</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="~/scolastiche/">OII - Scolastiche</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </BaseNavbar>
  );
}
