



import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import FeedbackDataTwo from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState(FeedbackDataTwo);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit:false
    })


    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        // console.log(uuidv4())
        setFeedback([ newFeedback,...feedback]);
    }

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const updateFeedback = (id, updItem) => {
       setFeedback(feedback.map((item) => item.id === id ? {
        ...item, ...updItem
            //??????????????????? doubt this !!!!!!!!!!!!!!!!
       } : item));
    }



    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        feedbackEdit
    }}>
        {children}
    </FeedbackContext.Provider>

}


export default FeedbackContext;
