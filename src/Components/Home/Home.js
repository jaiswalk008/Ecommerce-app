import TourList from "./TourList";
import './Home.css'
const Home = () => {
    return (
        <>
            <h1 className="text-center mt-3">Tours</h1>
            <div className="tourlist">
                <TourList key="1" date="Jul 16" city="DETROIT, MI" desc="DTE ENERGY MUSIC THEATRE"/>
                <TourList key="2" date="Jul 19" city="TORONTO,ON" desc="BUDWEISER STAGE"/>
                <TourList key="3" date="Jul 22" city="BRISTOW, VA" desc="JIGGY LUBE LIVE"/>
                <TourList key="4" date="Jul 29" city="PHOENIX, AZ" desc="AK-CHIN PAVILION"/>
                <TourList key="5" date="AUG 2" city="LAS VEGAS, NV" desc="T-MOBILE ARENA"/>
                <TourList key="6" date="AUG 7" city="CONCORD, CA" desc="CONCORD PAVILION"/>
               
            </div>
        </>
    )
}
export default Home;