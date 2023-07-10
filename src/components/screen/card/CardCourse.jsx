import Image from 'next/image'
import styles from './CardCourse.module.css'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

// export const getStaticProps = async () => {
    
//     const data = await loadCourses()
//     console.log(data)
//     return {
//       props: { courses: data }
//     }
//   }

const CardCourse = () => {
const [getCourse, setGetCourse] = useState([])

useEffect(() => {
    getAllCourse()
}, [])

const getAllCourse = async () => {
try {
    const {data} = await axios.get('/api/getCourse')
console.log(data.data)
setGetCourse(data.data)
} catch (error) {
    console.log(error)
}

}
const handleSubscription = async (e, id) => {
e.preventDefault()
const {data} = await axios.post('/api/payment', 
{
    priceId: id
},
{
    headers: {
        'Content-Type': 'application/json',
    }
})

window.location.assign(data)
}
    return (
        <>
        <ul style={{display: 'flex'}}>
        {
            getCourse?.map(el => (
                <li key={el.id}>
  <div className={styles.card}>
      <Image className={styles.image} width={300} height={350} src="/download.jpg" alt="Course" />
      <h3 className={styles.title}>{el.nickname}</h3>
      <p className={styles.description}>{el.description}</p>
      <div className={styles.price}>
        <span className={styles.amount}>{el.unit_amount / 100}</span>
        <span className={styles.currency}>$</span>
      </div>
      <button onClick={(e) => handleSubscription(e, el.id)}>
      Buy Now
      </button>
      
    </div>
                </li>
            ))
        }
        </ul>
        
        </>
    )
}

export default CardCourse