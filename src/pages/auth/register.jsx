import Layout from "@/components/layout/layout"
import Register from "@/components/screen/auth/Register"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

const RegisterPage = () => {
    const session = useSession()
    const router = useRouter()
    console.log(session)
    if(session.status === 'authenticated'){
        router?.push('/card')
    }
    return (
        <>
        <Layout>
            <Register />
        </Layout>
        </>
    )
}

export default RegisterPage