'use client'

import { useAuth, useUser } from '@clerk/nextjs'

/** Force sign out for non invited users. */
export const SignOut = () => {
    const { isSignedIn, user } = useUser()
    const { signOut } = useAuth()

    if (isSignedIn && user && user.publicMetadata.role !== 'admin') {
        console.log('user', user)
        signOut()
    }

    return null
}
