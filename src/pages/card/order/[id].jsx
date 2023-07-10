import Layout from "@/components/layout/layout"
import PaymentForm from "@/components/screen/order/PaymentForm"
// import { loadCourseById, loadCourses } from "@/lib/load-courses"

// export const getStaticPaths = async () => {
//     const data = await loadCourses()
//     const  paths = data.map(item => {
//         return {
//             params: {id: item.id.toString()}
//         }
//     })
//     console.log(paths, '444444444444444444444444')
//     return {
//         paths,
//         fallback: false,
//     }
// }

// export const getStaticProps = async (context) => {
// const id = context.params
// console.log(id, 'iddddddddddddddddddddddd')
// const data = await loadCourseById(id)
// console.log(data, '555555555555555')
// return {props: {course: data}}
// }

const OrderPage = () => {
    // console.log(course, 'coursecoursecoursecoursecoursecourse')
    return (
        <>
        <Layout>
            <PaymentForm  />
        </Layout>
        </>
    )
}


export default OrderPage