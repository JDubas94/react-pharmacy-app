import {Link} from "react-router-dom"

function SidebarMenuItem({name, slug}){
    return(
        <li className="sidebar-menu__item">
            <Link to={`/category/${slug}`}>{name}</Link>
        </li>
    )
}

export default SidebarMenuItem;