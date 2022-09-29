import jwt, { Secret } from 'jsonwebtoken'
import { IAuthToken } from './createAuthToken'
import { BGyellow, black, reset } from './escapeColors'

const decodeAuthToken = (token: string) => {
  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET as Secret)

    const { _id, username, email } = decoded as IAuthToken

    return {
      _id,
      username,
      email,
    }
  } catch (err: any) {
    console.log(BGyellow, black)
    console.log('err: ', err)
    console.log(reset)
    throw new Error(err)
  }
}

export default decodeAuthToken
