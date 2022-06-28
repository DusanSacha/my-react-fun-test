import { x } from "@xstyled/emotion";
import { FC } from "react";

type AppProps = {
  children: JSX.Element[];
};

const App: FC<AppProps> = ({children}) => {
  return (
    <x.div bg="dark">
      {children}
    </x.div>
  );
};

export default App;
