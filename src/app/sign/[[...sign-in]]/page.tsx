import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="flex justify-center items-center h-screen">
            <SignIn
                fallbackRedirectUrl={
                    process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL
                }
            />
        </div>
    )
}
