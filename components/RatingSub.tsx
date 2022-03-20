import styles from '../styles/Rating.module.scss'
import Image from 'next/image'
import feedbackImage from '../assets/illustration-thank-you.svg'

const RatingSub = ({feedbackRate}:any) => (
  <div className={styles.rating} style={{textAlign:"center"}}>
    <Image src={feedbackImage} alt="Thanks for submit your feedback" layout='fixed' width="150px" height="100px"/>
    <p className={styles.submit_log}>{`You selected ${feedbackRate?feedbackRate:"nothing"} out of 5.`}</p>
    <h2>Thank You!</h2>
    <p>We appreciate you taking the time to give a rating. If you ever need more support,
    don’t hesitate to get in touch!</p>

  </div>
);

export default RatingSub;
