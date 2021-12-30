import {useState, useRef, useEffect} from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../../elements/logo/Logo";
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import Darkmode from "./Darkmode";
import useStickyHeader from "./useStickyHeader";


const HeaderOne = ({btnStyle, HeaderSTyle}) => {
const [ofcanvasShow, setOffcanvasShow] = useState(false);
const onCanvasHandler = () => {
    setOffcanvasShow(prev => !prev);
}
const ref = useRef();
let [check, setCheck] = useState(true);
const sticky = useStickyHeader( 50 );
const headerClasses = `header-default ${(sticky && check) ? 'sticky' : ''}`
const { clientHeight } = ref;

const checkChange = (value) => {
    setCheck(value);
};

const [data, setData] = useState({v1: 'GOLD', v2: '1,813.30', v3: '$5.80', v4: '-0.32%', state: 'minus'})


useEffect(() => {

    const fun = () => {
        if(data.state == 'minus'){
            setData({v1: 'Silver', v2: '2,813.30', v3: '$10.20', v4: '+5.20%', state: 'plus'})
        }else{
            setData({v1: 'GOLD', v2: '1,813.30', v3: '$5.80', v4: '-0.32%', state: 'minus'})
        }
    }
    const interval = setInterval(fun, 3000);

return () => {
    clearInterval(interval);
  };

}, [data]);

return (
    <>
        <header ref={ref} className={`rn-header header-default ${HeaderSTyle} ${headerClasses}`}>
            <div className="container position-relative">
                <div className="row align-items-center row--0">
                    <div className="col-lg-3 col-md-6 col-4">
                        <Logo 
                            image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                            image2={`${process.env.PUBLIC_URL}/images/logo/logo-dark.png`}
                        />
                    </div>
                    <div className="col-lg-9 col-md-6 col-8 position-static">
                        <div className="header-right">
                            <div className="nav-info">
                                <div className="main"><span>{data.v1}</span><span>{data.v2}</span></div>
                                <div className={`change ${data.state}`}>
                                <div className="svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
                                </div>
                                <div className="sec"><span>({data.v3})</span> <span>{data.v4}</span></div>
                                </div>
                            </div>
                            <nav className="mainmenu-nav d-none d-lg-block">
                                <Nav />
                            </nav>
                            <div className="header-btn">
                                <a className={`btn-default ${btnStyle}`} target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">BUY NOW</a>
                            </div>
                            <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                                <div className="hamberger">
                                    <span className="hamberger-button" onClick={onCanvasHandler}><FiMenu /></span>
                                </div>
                            </div>
                            <Darkmode />
                        </div>  
                    </div>
                </div>
            </div>
        </header>
        <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler}  />
    </>
)
}
export default HeaderOne;