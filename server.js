
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let events = [
    { id: 1, name: "Tech Fest", date: "2026-12-10", venue: "Main Hall" },
    { id: 2, name: "Cultural Fest", date: "2026-12-15", venue: "Auditorium" }
];

// Display all events
app.get("/api/events", (req, res) => {
    res.json(events);
});

// Add a new event
app.post("/api/events", (req, res) => {
    const event = {
        id: Date.now(),
        name: req.body.name,
        date: req.body.date,
        venue: req.body.venue
    };

    events.push(event);
    res.json({ message: "Event added successfully", event });
});

// Delete an event
app.delete("/api/events/:id", (req, res) => {
    events = events.filter(
        event => event.id != req.params.id
    );

    res.json({ message: "Event deleted successfully" });
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});
