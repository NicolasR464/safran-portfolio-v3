import {
    clerkClient,
    clerkMiddleware,
    createRouteMatcher,
} from '@clerk/nextjs/server'

const isAdminRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware(async (auth, req) => {
    const { userId } = await auth()

    console.log('userId', userId)

    if (userId) {
        const client = await clerkClient()

        const user = await client.users.getUser(userId)

        const role = user.publicMetadata.role

        if (role !== 'admin' && isAdminRoute(req)) {
            return Response.redirect(new URL('/', req.url))
        }
    }

    if (isAdminRoute(req)) {
        await auth.protect()
    }
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}
