import Link from "next/link"
import AuthProvider from "../AuthProvider/AuthProvider"
import { signOut, useSession } from "next-auth/react"

const Layout = ({children}) => {
    const session = useSession()
    return (
        <>
        <AuthProvider>
        <header style={{width: '100%', height: '70px', backgroundColor: 'black', display: 'flex', alignItems: 'center'}}>
            <ul style={{margin: '0', padding: '0'}}>
                <li>
                <Link href={'/'}>
                Home
            </Link>
                </li>
                <li>
                <Link href={'/auth/register'}>
                Auth
            </Link>
                </li>
            </ul>
            <div style={{marginLeft: 'auto'}}>
                {session.status === 'authenticated' ? 
                <button style={{width: '100px', height: '50px'}} type="button" onClick={() => signOut()}>Вийти</button> :
                <Link href={'/auth/register'}>
                    Увійти
                </Link>
                }
            </div>
        </header>
        <main style={{width: '1200px', height: '800px', backgroundColor: 'green', margin: '0 auto', paddingTop: '64px'}}>
            {children}
        </main>
        </AuthProvider>
        </>


    )
}

export default Layout