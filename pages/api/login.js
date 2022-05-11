
import { serialize } from 'cookie';
import jwt from 'jsonwebtoken'; 

export default function handler(req, res) {

  let name =  "titi"
  let token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    name: name, 
  }, 'secret123456');

  res.setHeader('Set-Cookie', serialize('token', token, { path: '/' }));
  res.status(200).json({ name })
}
