import Layout from "@/components/layout/layout"
import { useSession } from "next-auth/react"
import Link from "next/link"


const HomePage = () => {
    const session = useSession()
    return (
        <>
        <div style={{margin: '0 auto', width: '400px', textAlign: 'center'}}>
            
        <h1>
            Хочете увійти в IT
        </h1>
        <br />
        <p>Купити підписку на курс</p>
        {session.status === 'authenticated' ? <Link href={'/card'}>
        Замовити
        </Link> : 
        <p>
            спочатку потрібна  
            <Link href={'/auth/register'}>
            реєстрація
            </Link>
        </p>
        }
        
        </div>
        </>
    )
}

export default HomePage