import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Home, User, Briefcase, Database, FileText } from 'react-feather'

export default function Navbar2() {
  return (
    <Navbar isBordered={false} isBlurred className="mt-4">
      <NavbarBrand href="/">
        <p className="font-bold text-inherit">mɪˈʃɛl</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-7" justify="center">
      <NavbarItem>
          <Link color="foreground" href="/">
            <Home />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            <User />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/projects">
            <Briefcase />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/fun">
           <Database />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/textsum">
           <FileText />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}