
import { serialize } from 'cookie';
import jwt from 'jsonwebtoken'; 

export default function handler(req, res) {



  res.setHeader('Set-Cookie', serialize('token', "", { path: '/' }));
  res.status(200).json({ message : 'ok' })
}
