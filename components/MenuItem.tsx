import { x } from "@xstyled/emotion"
import { FC } from "react"
import styled from '@emotion/styled'

type MenuItemProps = {
  children: string;
};

const Link = styled.a`
  display: block;
  text-decoration: none;
  color: #00D8FF;
  &::after{
    display:inherit;
    content: '';
    background: transparent;
    height: 2px;
    margin: auto;
    position: relative;
    width: 2rem;
    top: 26px;
  }
  &:hover {
    color: white;
    &::after {
      background: #01FF97;
      transition: 0.5s;

    }
  }
`

const MenuItem: FC<MenuItemProps> = ({children}) => {
  return (
    <x.li 
      display="inline-block"
      px={8}
      >
      <Link href="#">
        {children}
      </Link>
    </x.li>
  );
};

export default MenuItem;