const express = require("express");
const router = express.Router();
const { WorkOS } = require("@workos-inc/node");

const workos = new WorkOS(process.env.WORKOS_API_KEY);

async function activateUser(userId) {
  try {
    console.log(`Sending request to WorkOS for userId: ${userId}`);

    const response = await workos.userManagement.updateUser(userId, {
      metadata: { state: "active" },
    });

    console.log(`WorkOS API Response:`, response);
    return response;
  } catch (error) {
    console.error("Error activating user:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to activate user");
  }
}

router.post("/", async (req, res) => {
  console.log("Request received:", req.body);
  const { userId } = req.body;

  if (!userId) {
    console.error(" Missing userId in request");
    return res.status(400).json({ error: "User ID is required." });
  }

  try {
    console.log("Activating user:", userId);
    const user = await activateUser(userId);
    res.json({ message: "User is now active.", user });
  } catch (error) {
    res.status(500).json({ error: "Error when updating user status" });
  }
});

module.exports = router;
