import express from 'express';
import mysql from 'mysql2/promise';

import cors from  'cors'

const app = express();
const PORT = 5000;

// Create a connection pool (recommended for production apps)
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'mysql',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.use(cors())
app.use(express.json());

// Sample route to fetch data
app.post('/bankcustomer', async (req, res) => {
    try {
        const {customer_id,customer_name,bank_name,location}= req.body;
        const [rows] = await pool.query('insert into customer(customer_id,customer_name,bank_name,location) values(?,?,?,?)',[customer_id,customer_name,bank_name,location]); // change table name if needed
        res.json(rows);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/updateBook',async (req,res)=>{

    const {book_id, book_name, author_name}=req.body;

    const [rows]= await pool.query('update book set author_name=?  where book_id=?',[author_name, book_id]);

    res.send(rows);
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});