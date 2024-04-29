import { useContext } from 'react'
import FeedBackItem from './FeedBackItem';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {


  const { feedback } = useContext(FeedbackContext);

  if(!feedback || feedback.length === 0){
    return <h4>There is no data</h4>
  } 

  


  return (
   <div className='feedback-list'>
      {feedback.map((item) =>(
        <FeedBackItem key={item.id} item={item}/>
      ))}
   </div>
  )
}

export default FeedbackList