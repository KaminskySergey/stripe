import Image from 'next/image'
import styles from './CardCourse.module.css'
import Link from 'next/link';

// export const getStaticProps = async () => {
    
//     const data = await loadCourses()
//     console.log(data)
//     return {
//       props: { courses: data }
//     }
//   }

const CardCourse = ({data}) => {

    // console.log(data.data.data, '1111111111111')
    
    return (
        <>
        <ul style={{display: 'flex'}}>
        {
            data.data?.map(el => (
                <li key={el.id}>
  <div className={styles.card}>
      <Image className={styles.image} width={300} height={350} src="/download.jpg" alt="Course" />
      <h3 className={styles.title}>{el.title}</h3>
      <p className={styles.description}>{el.description}</p>
      <div className={styles.price}>
        <span className={styles.currency}>$</span>
        <span className={styles.amount}>{el.amount}</span>
      </div>
      <Link href={`/card/order/${el.id}`}>
      Buy Now
      </Link>
      
    </div>
                </li>
            ))
        }
        </ul>
        
        </>
    )
}

export default CardCourse