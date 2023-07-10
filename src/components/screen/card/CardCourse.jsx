import Image from 'next/image'
import styles from './CardCourse.module.css'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

// export const getStaticProps = async () => {
    
//     const data = await loadCourses()
//     console.log(data)
//     return {
//       props: { courses: data }
//     }
//   }

const CardCourse = () => {
const [getCourse, setGetCourse] = useState([])
const [currentId, setCurrentId] = useState('')
const session = useSession()
  useEffect(() => {
    getAllCourse();
    // checkSubscriptionStatus();
    // getCurrentUserId()
  }, []);
  
// const getCurrentUserId = async () => {
//     try {
//         const email = await session?.data?.user?.email;
//         const response = await axios.post('/api/subscriptions', { email });
//         const data = response.data;
    
//         console.log(data, 'rrr');
    
//         return data;
//       } catch (error) {
//         console.error(error);
        
//       }
// }



  const getAllCourse = async () => {
    try {
      const { data } = await axios.get('/api/getCourse');
      setGetCourse(data.data);
      
      
    } catch (error) {
      console.log(error);
    }
  };
   
  

  const handleSubscription = async (e, id) => {
    e.preventDefault();
    setCurrentId(id);
    
    const { data } = await axios.post('/api/payment', {
      priceId: id,
    });
    
    window.location.assign(data);
  };
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