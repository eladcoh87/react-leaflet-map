import React, { useEffect, useState } from 'react'

import { MapContainer,TileLayer,useMap,Marker} from 'react-leaflet'
import { useSelector } from 'react-redux'
import { State } from '../store/restReducer';
import './leaf.scss'
import Recenter from './Recenter';


const Leaf = () => {


    const state = useSelector((state:State) => state)
  

const position:any = [state.choosenRest.lat,state.choosenRest.lon]

console.log(position)





  return (
   
     <div className='map-container'>  
    <MapContainer className='map' center={position} zoom={18} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
   <Marker position={position}></Marker>
  {/* <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker> */}
  <Recenter lat={state.choosenRest.lat} lon={state.choosenRest.lon} />
</MapContainer>
</div> 
  )
}

export default Leaf