import React, { useContext, useState, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { toast } from "react-toastify";
import RatingSelect from "../components/RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setDesc(feedbackEdit.item.desc);
      setName(feedbackEdit.item.name);
      setEmail(feedbackEdit.item.email);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const isTextValid = text.length >= 5;
  const isDescValid = desc.length >= 10;
  const isNameValid = name.trim() !== "";
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isTextValid || !isDescValid || !isNameValid || !isEmailValid) {
      if (!isTextValid) {
        toast.error("Feedback text must be at least 5 characters.");
      }
      if (!isDescValid) {
        toast.error("Desc text must be at least 10 characters.");
      }
      if (!isTextValid) {
        toast.error("Name field is required.");
      }
      if (!isTextValid) {
        toast.error("Invalid email address.");
      }
    } else {
      const newFeedback = {
        text:text,
        rating:rating,
        desc:desc,
        name:name,
        email:email,
      };
      console.log(newFeedback);

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        // handleAdd(newFeedback);
        addFeedback(newFeedback);
      }

      setText("");
      setDesc("");
      setName("");
      setEmail("");

      toast.success("All got successfully");
    }
  };

  const setRatingFunction = (rating) => {
    return setRating(rating);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Review Our Product</h2>

        <RatingSelect select={setRatingFunction} />

        <div className="input-group">
          <input
            type="text"
            placeholder="add a title"
            onChange={(e) => {
              return setText(e.target.value)
            }}
            value={text}
          />

          <textarea
            placeholder="add a desc"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          ></textarea>

          <div className="d-flex">
            <input
              type="text"
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <Button type="submit" version="primary">
            {feedbackEdit.edit === true ? "Update" : "Send"}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
