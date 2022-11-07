import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Navigation";
import Ads from "./components/Cards";

import Dashboard from "./pages/Dashboard";
import UserSettings from "./pages/UserSettings";
import Search from "./pages/Search";
import Detail from "./pages/Detail";

import HotelImg from "./components/images/HotelImg.jpeg";
import AirplaneImg from "./components/images/Airplane.jpg";

function App() {
    return (
        <div>
            <Header />
            <main style={style.sectionEdit}>
                <Nav />
                <section>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="user" element={<UserSettings />} />
                        <Route path="search" element={<Search />} />
                        <Route path="detail" element={<Detail />} />
                    </Routes>
                </section>

                <aside>
                    <Ads
                        AdsImg={HotelImg}
                        AdsTitle="Travel"
                        AdsDescription="Stay at one of our signiture hotel for a lifetime offer today!"
                    />
                    <Ads
                        AdsImg={AirplaneImg}
                        AdsTitle="Flights"
                        AdsDescription="Take one of our signiture flights to a tropical designation today!"
                    />
                </aside>
            </main>
        </div>
    );
}

export default App;

const style = {
    sectionEdit: {
        // dimensions
        marginTop: "50px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
};
