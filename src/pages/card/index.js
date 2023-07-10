import Layout from '@/components/layout/layout'
import CardCourse from '@/components/screen/card/CardCourse'
import { useSession } from 'next-auth/react'
import {useRouter} from 'next/router'

import { loadCourses } from '@/lib/load-courses';

export async function getStaticProps() {
    const data = await loadCourses()
    return { props: { data } }
  }

const CardPage = (props) => {
    const {asPath, pathname} = useRouter()
    
    const session = useSession()
    const router = useRouter()

    if(session.status === 'unauthenticated'){
        router?.push('/auth/register')
    }
    return (
        <>
        <Layout>
            <CardCourse data={props}/>
        </Layout>
        </>
    )
}

export default CardPage