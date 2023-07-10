import { useState } from "react"
import styles from './Register.module.css'
import axios from "axios"
import { useRouter } from 'next/router';
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const router = useRouter()
    const session = useSession()

    if(session.status === 'authenticated'){
        router.push('/')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            console.log(name, email, password)
            const response = await axios.post("/api/auth/register", {name, email, password})
            console.log(response.data)
            if (response.status === 201) {
                router.push("/auth/login");
              }
        } catch (error) {
            console.error(error.response.data); 
            setError(error)
        }
    }

    const handleChange = (e) => {
        
        const {name, value} = e.target
        switch (name) {
            case 'name':
                setName(value)
            break;
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
                Name:
                <input className={styles.input} type="text" name="name" value={name} onChange={handleChange}/>
            </label>
            <label className={styles.label}>
                Email:
                <input className={styles.input} type="email" name="email" value={email} onChange={handleChange}/>
            </label>
            <label className={styles.label}>
                Password:
                <input className={styles.input} type="password" name="password" value={password} onChange={handleChange}/>
            </label>
            <button className={styles.button} type="submit">Register</button>
            {error && "Что-то пошло не так"}
        </form>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Link href={'/auth/login'}>
            в мене вже є аккаунт
            </Link>
            <button style={{marginTop: '5px'}} onClick={() => signIn('google')}>
                увійти через Google
            </button>
        </div>
        </div>
        </>
    )
}

export default Register