const Feedback = require('../models/Feedback');

const submitFeedback = async(req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        res.status(400).json({ message: "All fields are Required" })
    }
    try {
        const newFeedback = new Feedback({ name, email, message });
        await newFeedback.save();
        res.status(201).json({ message: "Feedback submitted successfully!" });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }


}
const getFeedback = async(req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ timestamp: -1 });
        res.status(200).json(feedbacks);

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = {
    submitFeedback,
    getFeedback
};