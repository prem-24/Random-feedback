import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


const Feedbackstats = () => {

  const { feedback } = useContext(FeedbackContext);


  return (
    <div>
      <h4>Feedbacks {feedback.length}</h4>
    </div>
  )
}

export default Feedbackstats