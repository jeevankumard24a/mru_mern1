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
app.get('/users', async (req, res) => {
    try {
        const username='kalam'
        const [rows] = await pool.query('insert into users(username) values(?)',[username]); // change table name if needed
        res.json(rows);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});