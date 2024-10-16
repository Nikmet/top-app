import { ISideBarProps } from "./SideBar.props";

export const SideBar = ({ ...props }: ISideBarProps): JSX.Element => {
    return <div {...props}>
        SideBar
    </div>;
};
