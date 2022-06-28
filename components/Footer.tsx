import { x } from "@xstyled/emotion";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <x.footer 
      py={16}
      bg="darker" 
      color="white"
      textAlign="center"
    >
      <x.p>© 2022 React.fun</x.p>
    </x.footer>
  );
};

export default Footer;
