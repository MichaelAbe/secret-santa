import React from 'react'
import WIshlist from './WIshlist'

export default function Profile() {
    return (
        <div>
            <h1>Name</h1>
            <WIshlist></WIshlist>
            {/* there will be some sort of card here that displays the user's top three wishlist items */}
        </div>
    )
}
