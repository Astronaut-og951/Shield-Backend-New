const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const account = require("../db/models/account");
dotenv.config();

const authkey = process.env.AUTHKEY;

app.get("/lexia/api/login", async (req, res) => {
    const { email, password, authkey } = req.query;
    if (authkey !== authkey) return res.status(401).send({ error: "invalid authkey" });
    try {
        if (!email) return res.status(400).send({ error: "Email is required" });
        if (!password) return res.status(400).send({ error: "Password is required" });
    
        const user = await account.findOne({ email }).lean();
        if (!user) return res.status(400).send({ error: "Account not found." });
    
        res.json(200).send({
            success: true,
            email: email,
            password: password,
        });
    } catch {
        res.json(400).send({
            success: false,
        });
    }
});

module.exports = app;