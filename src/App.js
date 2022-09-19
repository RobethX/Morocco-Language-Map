import "./App.css";
import Footer from "./components/Footer";
import Map from "./components/Map";
import useMapData from "./hooks/useMapData";

const PROVINCE_DATA_URL = "https://raw.githubusercontent.com/yousfiSaad/morocco-map/main/data/provinces.json";
const REGION_DATA_URL = "https://raw.githubusercontent.com/yousfiSaad/morocco-map/main/data/regions.json";

function App() {
    const { data, error, loading } = useMapData(REGION_DATA_URL);

    return (
        <div className="App">
            <header className="App-header">
                <p>Edit <code>src/App.js</code> and save to reload.</p>
            </header>

            <div className="App-map">
                {loading ? <p>Loading...</p> : error ? <p>Error!</p> : (
                    <Map data={data} width="800" height="800"/>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default App;
