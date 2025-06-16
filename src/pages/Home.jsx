import ProductList from "../components/ProductList/ProductList";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";

function Home(){
    return(
        <>
        <h1>Головна сторінка</h1>
        <SidebarMenu />
        <ProductList />
        </>
    )
}
export default Home;