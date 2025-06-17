import ProductList from "../components/ProductList/ProductList";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import AppBanner from "../components/AppBanner/AppBanner";
import './Home.scss'

function Home(){
    return(
        <>
        <div className="home-section">
        <SidebarMenu />
        <AppBanner />
        </div>
        <ProductList />
        </>
    )
}
export default Home;