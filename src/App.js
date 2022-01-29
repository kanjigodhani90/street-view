import React, {useState} from "react";
import './App.css';
import GoogleMapStreetView from "./Components/GoogleMapStreetView";

function App() {
    const [pov, setPov] = useState({
        heading: 75.22,
        zoom: 1,
        pitch: 0
    });
    const [position, setPosition] = useState({lat: 41.8896762, lng: 12.491388});
    const [update, setUpdate]= useState(false);

    React.useEffect(()=> {}, [pov, position]);

    const handlePov = (value) => {
        setUpdate(true);
        setPov(() => ({...value}));
        setUpdate(false);
    };

    const handlePosition = (value) => {
        setUpdate(true);
        setPosition(() => ({...value}));
        setUpdate(false);
    };

    const getPov = (value) => {
      return{
          heading: pov.heading + value,
          zoom: pov.zoom,
          pitch: pov.pitch
      }

    };
    return (
        <div className="App">
            {!update &&
            <GoogleMapStreetView
                key={1}
                position={position}
                Pov={getPov(-90)}
                disable={true}
            />
            }
            <GoogleMapStreetView
                key={2}
                position={position}
                handlePosition={handlePosition}
                handlePov={handlePov}
                Pov={getPov(0)}
            />
            {!update &&
                <GoogleMapStreetView
                    key={3}
                    position={position}
                    Pov={getPov(90)}
                    disable={true}
                />
            }
        </div>
    );
}

export default App;
