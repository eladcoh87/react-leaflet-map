import React from 'react'
import { ActionConstant } from './action-constant'



export const choosenRestAction = (id:number) => {


  return (


    {
        type:ActionConstant.CHOOSEN_REST,
        payload:id
    }



  )
}

