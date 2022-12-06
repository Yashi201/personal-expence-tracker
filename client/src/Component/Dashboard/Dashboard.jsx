import React from 'react'
import BasicState from '../Reusable/DashBoardComp/BasicState'
import DashBoardCartCom from '../Reusable/DashBoardComp/DashBoardCartCom'
import DashBoardTop from '../Reusable/DashBoardComp/DashBoardTop'

function Dashboard() {
  return (
    <>
    <DashBoardTop />
    <BasicState />
    <DashBoardCartCom />
    </>
  )
}

export default Dashboard