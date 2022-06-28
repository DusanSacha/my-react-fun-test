import { x } from "@xstyled/emotion";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
      <x.nav  display={{ _: "none", lg: "flex" }}>
        <x.ul flexDirection="row">
          <MenuItem>Objevuj</MenuItem>
          <MenuItem>Nauč se</MenuItem>
          <MenuItem>Otestuj se</MenuItem>
          <MenuItem>Pracuj</MenuItem>
        </x.ul>
      </x.nav>
  );
};

export default Menu;