import express from 'express';
import cors from 'cors';

const host = 'localhost';
const port = 3000;

const app = express();

//middleware คือ ฟังก์ชันที่ทำงานก่อนที่จะไปทำงานใน route ที่เราต้องการ
app.use(cors())
app.use(express.json());

app.post('/aAddB', (req,res) => {
    //log the request body
    console.log()
    console.log('[aAddB]');
    console.log('req body:', req.body);
    

    //retreive a and b from request body
    const {a,b} = req.body;

    //validate a
    if(a === undefined || typeof a !== 'number'){
        return res.status(400).json({message: 'Error parameter a'});
    }
    //validate b
    if(b === undefined || typeof b !== 'number'){
        return res.status(400).json({message: 'Error parameter b'});
    }

    //calculate the result
    const result = a + b;

    //generate response
    const response = {message: 'Success', result: result};

    //log the response
    console.log('res:',response);
    //send response
    res.json(response);
})

app.post('/a2AddB2', (req,res) => {
    const {a,b} = req.body;
    console.log()
    console.log('[a2AddB2]')
    console.log('req body:', req.body);

    if(a === undefined || typeof a !== 'number'){
        return res.status(400).json({message: 'Error parameter a'});
    }
    if(b === undefined || typeof b !== 'number'){
        return res.status(400).json({message: 'Error parameter b'});
    }

    const result = a*a + b*b;
    const response = {message: 'Success', result: result};

    console.log('res:',response);
    res.json(response);
})

app.post('/aPowB', (req,res) => {
    const {a,b} = req.body;
    console.log()
    console.log('[aPowB]')
    console.log('req body:', req.body);

    if(a === undefined || typeof a !== 'number'){
        return res.status(400).json({message: 'Error parameter a'});
    }
    if(b === undefined || typeof b !== 'number'){
        return res.status(400).json({message: 'Error parameter b'});
    }

    const result = Math.pow(a,b);
    const response = {message: 'Success', result: result};

    console.log('res:',response);
    res.json(response);
})

app.post('/aMulB', (req,res) => {
    const {a,b} = req.body;
    console.log()
    console.log('[aMulB]')
    console.log('req body:', req.body);

    if(a === undefined || typeof a !== 'number'){
        return res.status(400).json({message: 'Error parameter a'});
    }
    if(b === undefined || typeof b !== 'number'){
        return res.status(400).json({message: 'Error parameter b'});
    }

    const result = a*b;
    const response = {message: 'Success', result: result};

    console.log('res:',response);
    res.json(response);
})

app.listen(3000, () => {
    console.log(`Server is running at http://${host}:${port}`);
})