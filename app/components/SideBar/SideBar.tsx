import { Menu } from "../Menu/Menu";
import { ISideBarProps } from "./SideBar.props";

export const SideBar = ({ ...props }: ISideBarProps): JSX.Element => {
    return (
        <div {...props}>
            SideBar
            <Menu />
        </div>
    );
};
