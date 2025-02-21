require("dotenv").config();
const express = require("express");
const router = express.Router();
const { WorkOS } = require("@workos-inc/node");

const workos = new WorkOS(process.env.WORKOS_API_KEY);

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const authResponse = await workos.userManagement.authenticateWithPassword({
      email,
      password,
      clientId: process.env.WORKOS_CLIENT_ID,
    });

    console.log("authResponse", authResponse);
    res.json({ token: authResponse.token, user: authResponse.user });
  } catch (error) {
    console.error("Error auth user:", error.response?.data || error.message);
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
