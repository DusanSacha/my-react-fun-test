import { x } from "@xstyled/emotion";
import { Tag } from "anolis-ui";
import { FC } from "react";

type CardStoryProps = {
  headline: string,
  children: string;
};

const CardStory: FC<CardStoryProps> = ({headline, children}) => {
  return (
    <x.div
      flex={{ _: 1, md: "0 1 29%" }}
      p={8}
      m={4}
      color="white"
      borderWidth={2}
      borderStyle="solid"
      borderColor={{_: "hero", hover: "copy"}}
    >
      <Tag
        color="dark"
        backgroundImage="gradient-to-r"
        gradientFrom="primary"
        gradientTo="secondary"
      >
        Tag / Badge
      </Tag>

      <x.div color={{hover: "white"}}>
        <x.h4 py={8}>
          {headline}
        </x.h4>
        <x.p textAlign="left">
          {children}
        </x.p>
      </x.div>

      <x.a
        color={{_: "primary", hover: "secondary"}}
        py={8}
        display="inline-block"
        href="#"
      >
        Story detail
      </x.a>
    </x.div>

  );
};

export default CardStory;
