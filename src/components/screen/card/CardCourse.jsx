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

const CardCourse = ({userCurrent}) => {
const [getCourse, setGetCourse] = useState([])
const [currentId, setCurrentId] = useState('')
const [currentSubscription, setCurrentSubscription] = useState([])
const session = useSession()
  useEffect(() => {
    
    getAllCourse();
    // findIdSub()
        // getCurrentUserId()
  }, []);

  useEffect(() => {
    if (userCurrent && getCourse) {
      findIdSub();
    }
  }, [userCurrent, getCourse]);
  
const getCurrentUserId = async () => {
    try {
        
        const response = await axios.post('/api/subscriptions');
        const data = response.data;
    
        console.log(data, 'rrr');
    
        return data;
      } catch (error) {
        console.error(error);
        
      }
}



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
  console.log(userCurrent?.user?.courseId , 'current')
  console.log(getCourse, 'get')
  const findIdSub = () => {
    if (userCurrent?.user?.courseId && getCourse.length > 0) {
      const array = userCurrent.user.courseId.filter(courseIdItem => {
        const match = getCourse.some(obj => obj.id === courseIdItem);
        console.log(courseIdItem, match);
        return match;
      });
      setCurrentSubscription(array);
    }
  };
  console.log(currentSubscription, 'qqqqqqqqqqqqqqqqqqqqqqqqqqqq')
  
    return (
        <>
        <ul style={{ display: 'flex' }}>
  {getCourse?.map(el => {
    const foundSubscription = currentSubscription.find(subscriptionId => subscriptionId === el.id);

    return (
      <li key={el.id}>
        <div className={styles.card}>
          <Image className={styles.image} width={300} height={350} src="/download.jpg" alt="Course" />
          <h3 className={styles.title}>{el.nickname}</h3>
          <p className={styles.description}>{el.description}</p>
          <div className={styles.price}>
            <span className={styles.amount}>{el.unit_amount / 100}</span>
            <span className={styles.currency}>$</span>
          </div>
          {!foundSubscription ? (
            <button onClick={e => handleSubscription(e, el.id)}>Buy Now</button>
          ) : (
            <button onClick={e => handleSubscription(e, el.id)}>Відписатися</button>
          )}
        </div>
      </li>
    );
  })}
</ul>
        
        </>
    )
}

export default CardCourse