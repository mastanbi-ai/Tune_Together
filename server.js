require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 🔹 Connect to MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) throw err;
    console.log("✅ MySQL Connected...");
});

// 🔹 Register User (Sign Up)
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Hash password
        const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        db.query(sql, [name, email, hashedPassword], (err, result) => {
            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    return res.status(400).json({ message: "Email already exists" });
                }
                return res.status(500).json({ message: "Database error" });
            }
            res.status(201).json({ message: "User registered successfully" });
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// 🔹 Login User (Sign In)
app.post("/signin", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], async (err, results) => {
        if (err) return res.status(500).json({ message: "Database error" });

        if (results.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });

        res.status(200).json({
            message: "Login successful",
            token,
            user: { name: user.name, email: user.email }
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
