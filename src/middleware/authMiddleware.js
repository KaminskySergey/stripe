import { getSession } from 'next-auth/react'

export default function authMiddleware(handler) {
  return async (req, res) => {
    const session = await getSession({ req })
console.log(session, 'aaaaaaaaaaaaaaaaaaaaaaa')
    if (!session) {
      // Если пользователь не авторизован, вернуть ошибку или перенаправить на страницу входа
      return res.status(401).json({ error: 'Unauthorized' })
    }

    // Если пользователь авторизован, передать управление следующему обработчику
    return handler(req, res)
  }
}