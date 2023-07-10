import Layout from "@/components/layout/layout"
import Login from "@/components/screen/auth/Login"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"


const LoginPage = () => {
    const session = useSession()
    const router = useRouter()
    console.log(session)
    if(session.status === 'authenticated'){
        router?.push('/card')
    }
    return (
        <>
        <Layout>
            <Login />
        </Layout>
        </>
    )
}

export default LoginPage