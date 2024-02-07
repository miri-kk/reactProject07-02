import React from "react"
import { observer } from "mobx-react"
import { Outlet } from "react-router-dom"
import BusinnessTab from "./BusinnessTab"

const AdminHome = (observer(() => {

  return (
    <>
      <BusinnessTab/>
    </>
  )
}))

export default AdminHome