const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Koneksi ke database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_porto_messages",
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.stack);
        return;
    }
    console.log("Connected to database");
});

// Endpoint untuk menerima data
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    const query = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
    db.query(query, [name, email, message], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            res.status(500).send("Error saving data");
        } else {
            res.status(200).send("Data saved successfully");
        }
    });
});

// Menjalankan server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
