import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import SwitchTheme from "./SwitchTheme";
import RefetchButton from "./buttons/RefetchButton";

export default function Navigation() {
  return (
    <Navbar className="h-[10dvh]">
      <NavbarContent>
        <NavbarBrand>
          <p className="font-bold text-inherit uppercase">Star Wars</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex gap-4" justify="center">
        <NavbarItem>
          <RefetchButton />
        </NavbarItem>
        <NavbarItem>
          <SwitchTheme />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
