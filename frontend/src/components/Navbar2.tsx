import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Image } from "@nextui-org/react";
import { Home, User, Briefcase, Database, BookOpen } from 'react-feather';

const Navbar2: React.FC = () => {
  return (
    <Navbar isBordered={false} isBlurred className="mt-4">
      <NavbarBrand>
        <Image
          src="/holo.png"
          alt="Logo"
          width={40}
          height={40}
        />
        <p className="font-bold text-inherit ml-1">mɪˈʃɛl</p>
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
          <Link color="foreground" href="/blog">
            <BookOpen />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navbar2;
