import { x } from "@xstyled/emotion";
import { Button } from "anolis-ui";

const Hero = () => {
  return (
    <x.div
      py={20}
      px={10}
      bg="hero"
    >
      <x.h1>
        Nauč se React s&nbsp;námi!
      </x.h1>
      <x.p p={10}>
        Sérií místa by dostal stopa kotel soudí byl,
        miliony obou v superexpoloze
        s oborechjednou hibernujícím výborná slavný.
      </x.p>
      <x.div textAlign="center">
        <Button color="dark" bg={{_: "primary", hover: "secondary"}}>
          C2A Fun Academy
        </Button>
      </x.div>
    </x.div>
  );
};

export default Hero;
