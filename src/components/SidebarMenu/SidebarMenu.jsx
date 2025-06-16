import sidebarMenu from "../../data/sidebarMenu";
import SidebarMenuItem from "./SidebarMenuItem";
import './SidebarMenu.scss';

function SidebarMenu(){
    return(
        <ul className="sidebar-menu">
            {sidebarMenu.map((item) => (
                <SidebarMenuItem
                key={item.slug}
                name={item.name}
                slug={item.slug} />
            ))}
        </ul>
    )
}

export default SidebarMenu;