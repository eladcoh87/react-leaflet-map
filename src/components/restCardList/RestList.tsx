import React from 'react'
import RestCard from '../restCard/RestCard'
import './style.scss'
import {useSelector} from 'react-redux'
import { State } from '../../store/restReducer'
import { Rest } from '../../store/restReducer'




const RestList = () => {


  const state = useSelector((state:State) => state)

  const renderList = state.restList.map(((rest:Rest) => {

    return (

      <RestCard key={rest.id} id={rest.id} name={rest.name} description={rest.description} imgUrl={rest.imgUrl} lon={rest.lon} lat={rest.lat}  />
    )

    
  }))



  return (

    <div className='restlist-container'>

      {renderList}
    </div>

  )
}

export default RestList