import appBaner from '../../assets/images/app-baner.png';
import AppStoreLinks from '../AppStoreLinks/AppStoreLinks'
import './AppBanner.scss'

function AppBanner(){
    return(
        <div className='app-banner'>
            <div className='app-banner__content-box'>
                <h1 className='app-banner__title'>Загружайте приложение Medline.ua</h1>
                <p className='app-banner__content'>Бронируйте лекарства в аптеке рядом, экономьте до 30%</p>
                <AppStoreLinks />
            </div>
            <img className="app-banner__image" src={appBaner} alt='Medline.ua app banner'></img>
        </div>
    )
}
export default AppBanner;