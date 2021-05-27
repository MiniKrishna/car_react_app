import React from 'react'

import AppHeader from '../app-header/app-header'
import CarTable from '../car-table/car-table'
import CarData from './data'

import './app.css'

import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

const App = () => {
    return (
        <main className = "content">
            <Theme preset={presetGpnDefault}>
                <AppHeader />
                <CarTable cars = {CarData}/>
            </Theme>
        </main>
    );
}

export default App;