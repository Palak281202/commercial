import React from 'react'
import MainNavigation from '../components/Header/MainNavigation'
import { Outlet } from 'react-router-dom'
import ProductNavigation from '../components/productsNav/ProductNavigation'

export default function RootLayout() {
  return (
    <div>
        <MainNavigation/>
        <hr></hr>
        <ProductNavigation/>
        <hr />
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
