import express from 'express';
import cors from 'cors';

const host = 'localhost';
const port = 3000;

const app = express();

//middleware คือ ฟังก์ชันที่ทำงานก่อนที่จะไปทำงานใน route ที่เราต้องการ
app.use(cors())
app.use(express.json());



app.listen(3000, () => {
    console.log(`Server is running at http://${host}:${port}`);
})