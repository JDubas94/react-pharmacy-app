import './AppStoreLinks.scss';
import appStoreImg from '../../assets/images/app-store.png';
import googlePlayImg from '../../assets/images/google-play.png';

function AppStoreLinks(){
    return(
        <div className="app-store-links">
            <a href="https://apps.apple.com" target="_blank" rel='noopener noreferrer'>
                <img className="app-store-links__img" src={appStoreImg} alt="Download on the App Store" />
            </a>
            <a  href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <img className="app-store-links__img" src={googlePlayImg} alt="Get it on Google Play"/>
            </a>
        </div>
    )
}