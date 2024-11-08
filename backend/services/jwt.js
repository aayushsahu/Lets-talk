import jwt from 'jsonwebtoken';
const secret = 'my-secret-key';
export const generateToken = (emailId) => jwt.sign({emailId: emailId}, secret , {
  expiresIn: '10m'
});

export const verifyToken = (req, resp, next) =>  {
  const token = req.header('authorization');
  if(!token) return resp.status(401).json({error: 'Access denied'});
  try {
    console.log('Token', JSON.stringify(token));
    const decoded = jwt.verify(token, secret);
    console.log('Decoded', JSON.stringify(decoded));
    req.emailId = decoded.emailId;
    next();
  } catch (_error) {
    resp.status(401).json({error: 'Invalid token'});
  }
};