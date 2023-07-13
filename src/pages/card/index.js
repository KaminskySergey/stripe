import Layout from '@/components/layout/layout'
import CardCourse from '@/components/screen/card/CardCourse'

import axios from 'axios'
import { useSession } from 'next-auth/react'
import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'



const CardPage = () => {
    const {asPath, pathname} = useRouter()
    const [userCurrent, setCurrentUser] = useState({})

    const session = useSession()
    const router = useRouter()
console.log(session)
    if(session.status === 'unauthenticated'){
        router?.push('/auth/register')
    }

    useEffect(() => {
        currentUser()
    }, [])

const currentUser = async () => {
    const response = await axios.get('/api/currentUser')
    const data = response.data;
    setCurrentUser(data)
}
console.log(userCurrent, 'userCurrentuserCurrentuserCurrent')
    return (
        <>
        <Layout>
            <CardCourse userCurrent={userCurrent}/>
        </Layout>
        </>
    )
}

export default CardPage