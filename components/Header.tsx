import { x } from "@xstyled/emotion";
import Image from 'next/image'
import { FC } from "react";
import { Button } from "anolis-ui";

import Menu from "./Menu";

const Header: FC = () => {
  return (
    <x.header
      py={4}
      maxWidth={1140}
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      m="auto"
    >
      <Image  src="/static/logo-small.png" alt="Logo" width={134} height={32}/>
      <Menu></Menu>
      <Button
        color="dark"
        bg="secondary"
        display={{ _: "none", lg: "flex" }}
      >
             Pracuj v Reactu (9)
      </Button>
    </x.header>
  );
};

export default Header;
