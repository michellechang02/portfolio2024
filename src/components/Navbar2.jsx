import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Navbar2() {
  return (
    <Navbar isBordered={false} isBlurred>
      <NavbarBrand href="/">
        <p className="font-bold text-inherit">mɪˈʃɛl</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/fun">
            Fun
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}