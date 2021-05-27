import React from 'react'

import { User } from '@consta/uikit/User';
import { Text } from '@consta/uikit/Text';

import "./app-header.css"

const AppHeader = () => {


    return (
        <div className = "app-header">
            <Text className = "app-header-text" size="3xl" view="brand" spacing="s" >Тестовое задание для компании <b>Nedra</b>,</Text>
            <div className= "made-by">
                <Text size="xl" >made by</Text>
                <User  name="Романенко Максим" info="React разработчик" />
            </div>
        </div>
    )
}

export default AppHeader