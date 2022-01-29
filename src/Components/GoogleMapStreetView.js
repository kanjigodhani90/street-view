import React, {useEffect} from 'react';
import ReactStreetview from 'react-streetview';

const GoogleMapStreetView = ({position, Pov, handlePosition, handlePov, disable}) => {

    const googleMapsApiKey = 'AIzaSyAbauiCI4GFXZZOPK6Xl4TwD2eJ40TqgSU';

    const handlePovChange = (changedPov) => {
        if (changedPov !== Pov && typeof changedPov.heading === "number") {
            typeof handlePov === "function" && handlePov(changedPov)
        }
    };

    const handlePositionChange = (value) => {
        // console.log("value",value)
        const position = {lat: value.lat(), lng: value.lng()};
        typeof handlePosition === "function" && handlePosition(position);
    };

    const streetViewPanoramaOptions = {
        position: position,
        pov: {heading: Pov.heading, pitch: Pov.pitch},
        zoom: Pov.zoom
    };

    return (
        <div className={`map-wrapper ${disable ? "disable-event" : ""} `}>
            <ReactStreetview
                apiKey={googleMapsApiKey}
                streetViewPanoramaOptions={streetViewPanoramaOptions}
                onPovChanged={
                    !disable ? handlePovChange : () => {
                    }
                }
                onPositionChanged={
                    !disable ? handlePositionChange : () => {
                    }
                }
            />
        </div>
    );
};



export default GoogleMapStreetView;
