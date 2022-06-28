import { x } from "@xstyled/emotion";
import { FC } from "react";
import CardStory from "./CardStory";

const CardStories: FC = () => {
  return (
    <x.section 
      py={20}
      px={10}
      maxWidth={1140}
      m="auto"
      bg="dark"
    >
      <x.h2>H2 Card Stories</x.h2>
      <x.p p={10}>
        Sérií místa by dostal stopa kotel soudí byl,
        miliony obou v superexpoloze s oborechjednou
        hibernujícím výborná slavný.
      </x.p>
      <x.div display="flex" flexWrap="wrap" flexDirection={{_: "column", lg: "row"}} >
        <CardStory headline="Card story headline">Ně masovým osobního druhem párající, či tóny
          když kubických, v tři ať veliký svatého kontinentální,
          s ovládá jí kdy zkusit. Dana, dna získat. Jednotlivá
          hmatatelný, chtít řadě odhalil urychlovač v tlupa zdvihla
          žila přepůlené k vážně u vytvoří rozpoutal té zatím jsem
          k v. Četné chování unikal utká tj. vůbec supererupce, kde o jednoduché.
        </CardStory>
        <CardStory headline="Card story headline">Ně masovým osobního druhem párající, či tóny
          když kubických, v tři ať veliký svatého kontinentální,
          s ovládá jí kdy zkusit. Dana, dna získat. Jednotlivá
          hmatatelný, chtít řadě odhalil urychlovač v tlupa zdvihla
          žila přepůlené k vážně u vytvoří rozpoutal té zatím jsem
          k v. Četné chování unikal utká tj. vůbec supererupce, kde o jednoduché.
        </CardStory>
        <CardStory headline="Card story headline">Ně masovým osobního druhem párající, či tóny
          když kubických, v tři ať veliký svatého kontinentální,
          s ovládá jí kdy zkusit. Dana, dna získat. Jednotlivá
          hmatatelný, chtít řadě odhalil urychlovač v tlupa zdvihla
          žila přepůlené k vážně u vytvoří rozpoutal té zatím jsem
          k v. Četné chování unikal utká tj. vůbec supererupce, kde o jednoduché.
        </CardStory>
        <CardStory headline="Card story headline">Ně masovým osobního druhem párající, či tóny
          když kubických, v tři ať veliký svatého kontinentální,
          s ovládá jí kdy zkusit. Dana, dna získat. Jednotlivá
          hmatatelný, chtít řadě odhalil urychlovač v tlupa zdvihla
          žila přepůlené k vážně u vytvoří rozpoutal té zatím jsem
          k v. Četné chování unikal utká tj. vůbec supererupce, kde o jednoduché.
        </CardStory>
        <CardStory headline="Card story headline">Ně masovým osobního druhem párající, či tóny
          když kubických, v tři ať veliký svatého kontinentální,
          s ovládá jí kdy zkusit. Dana, dna získat. Jednotlivá
          hmatatelný, chtít řadě odhalil urychlovač v tlupa zdvihla
          žila přepůlené k vážně u vytvoří rozpoutal té zatím jsem
          k v. Četné chování unikal utká tj. vůbec supererupce, kde o jednoduché.
        </CardStory>
      </x.div>
    </x.section>
  );
};

export default CardStories;
