import express  from 'express';
export const router = express.Router();

router.get('/', (res,req)=>{
    res.json({message: 'auth-service'});
});