import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../Firebase/context'

export default function PrivateRouting({ component: Component, ...rest }) {
    const { currentUser } = useAuth()

    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to='/'/>
            }}
        >

        </Route>
    )
}