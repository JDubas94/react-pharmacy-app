import { useState, useMemo } from "react";
import products from "../../data/products";
import ProductList from "../ProductList/ProductList"
import AllOffersLink from "../AllOffersLink/AllOffersLink"
import './TabsSection.scss';



function TabsSection(){
    const [activeTab, setActiveTab] = useState("Спеціальні пропозиції");

    const tabData = useMemo(() => ({
    "Спеціальні пропозиції": products.filter(product => product.category.includes("Спеціальні пропозиції")),
    "Ліки для провілактики грипу": products.filter(product => product.category.includes("Ліки для провілактики грипу")),
    "Вітаміни": products.filter(product => product.category.includes("Вітаміни")),
    "Ліки від кашля": products.filter(product => product.category.includes("Ліки від кашля"))
}),[products])

    return(
    <section className="tabs-section">
    <div className="tabs-section__container">
        <div className="tabs-section__btn">
        {Object.keys(tabData).map((tab) =>(
            <button
            key={tab}
            className={`tabs-section__btn ${tab === activeTab ? "tabs-section__btn-active" : ""}`}
            onClick={() =>setActiveTab(tab)}>
            {tab}</button>
        ))}
        </div>
        <AllOffersLink />
    </div>
     <div className="tabs-section__content">
        <ProductList products={tabData[activeTab]} />
     </div>
    </section>
    )
}

export default  TabsSection;