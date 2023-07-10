import { useState } from 'react'
import styles from './Login.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'


const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const router = useRouter()
    
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const status = await signIn('credentials', {email, password})
        console.log(status)
        if(status.ok){
            router.push('/card')
        }
    }

    const handleChange = (e) => {
        
        const {name, value} = e.target
        switch (name) {
            case 'email':
                setEmail(value)
            break;
            case 'password':
                setPassword(value)
            break;
                    
            default:
                break;
        }
    }
    return (
        <>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '450px', margin: '0 auto'}}>
        <form className={styles.container} onSubmit={handleSubmit}>
            <label className={styles.label}>
                Email:
                <input className={styles.input} type="email" name="email" value={email} onChange={handleChange}/>
            </label>
            <label className={styles.label}>
                Password:
                <input className={styles.input} type="password" name="password" value={password} onChange={handleChange}/>
            </label>
            <button className={styles.button} type="submit">Login</button>
            {error && "Что-то пошло не так"}
        </form>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Link href={'/auth/register'}>
            з'явилося бажання зареєструватися
            </Link>
            <button style={{marginTop: '5px'}} onClick={() => signIn('google')}>
                увійти через Google
            </button>
        </div>
        
        </div>
        </>
    )
}


export default Login