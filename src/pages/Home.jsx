import ProductList from "../components/ProductList/ProductList";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import AppBanner from "../components/AppBanner/AppBanner";
import TabsSection from "../components/TabsSection/TabsSection";
import DiscountedProducts from "../components/DiscountedProducts/DiscountedProducts";
import './Home.scss'

function Home(){
    return(
        <>
        <div className="home-section">
        <SidebarMenu />
        <AppBanner />
        </div>
        <TabsSection />
        <DiscountedProducts />
        </>
    )
}
export default Home;