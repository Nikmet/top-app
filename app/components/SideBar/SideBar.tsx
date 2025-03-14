import { Menu } from "../Menu/Menu";
import { ISideBarProps } from "./SideBar.props";
import Logo from "../logo.svg";
import cn from "classnames";
import styles from "./SideBar.module.css";
import { Search } from "@/components/Search/Search";

export const SideBar = ({ className, ...props }: ISideBarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <Logo />
            <Search />
            <Menu />
        </div>
    );
};
