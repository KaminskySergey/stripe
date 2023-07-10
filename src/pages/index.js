import HomePage from '@/components/screen/home/Home'
import Image from 'next/image'
import axios from "axios"
import Layout from '@/components/layout/layout'

// export const getStaticProps = async () => {
//   try {
//     // const response = await axios.get('http://localhost:3000/api/hello');
//     // Обработка ответа
//     // console.log(response);
//     return {
//       props: {
//         response
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         // Обработка ошибки
//       },
//     };
//   }
// };
export default function Home() {
  return (
    <>
    <Layout>
    <HomePage />
    </Layout>
    
    </>
  )
}
