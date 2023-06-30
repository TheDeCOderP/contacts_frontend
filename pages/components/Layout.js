import Header from './Header';
import Footer from './Footer';
import AdsBar from './AdsBar';

const Layout = ({ children }) => {
    return (
<>
     <header><Header/></header>  
     <div className="container-fluid">
        <div className="row">
            <div className="col-sm-12 col-lg-9 col-md-9">
        {children}
        </div>
            <div className="col-sm-12 col-lg-3 col-md-3 Ads_bar">
        <AdsBar/>
        </div>
        </div> 
        </div>
        <footer><Footer/></footer>
        </>
    )
}
export default Layout;