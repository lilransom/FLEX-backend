const express = require("express");
const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(express.json());
app.use(require("cors")());

// ✅ Add Users Route
app.get("/api/users", (req, res) => {
    res.json([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
    ]);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
