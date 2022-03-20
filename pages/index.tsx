import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import RatingBox from '../components/RatingBox'
import RatingSub from '../components/RatingSub'
import {useState} from 'react'

const Home: NextPage = () => {

    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const [feedbackRate, setFeedbackRate] = useState(0);

  return (
    <div className={styles.container}>
      <div>
        {!feedbackSubmitted?<RatingBox setFeedbackSubmitted={setFeedbackSubmitted} setFeedbackRate={setFeedbackRate} feedbackRate={feedbackRate}/>:
<RatingSub feedbackRate={feedbackRate}/>}
      </div>
    </div>
  )
}

export default Home
