import styles from '../styles/Rating.module.scss'

const RatingBox = ({feedbackRate, setFeedbackSubmitted, setFeedbackRate}:any) => (
  <div className={styles.rating}>
     <div className={styles.svg_container}><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>  </div>
    <h2>How did we do?</h2>
    <p>Please let us know how we did with your support request. All feedback is appreciated
    to help us improve our offering!</p>
    <div className={styles.rate_btn}>
        <button type="button" onClick={()=>setFeedbackRate(1)} className={feedbackRate===1 ? styles.clicked_btn_style : styles.unclicked_btn_style}>1</button>
        <button type="button" onClick={()=>setFeedbackRate(2)} className={feedbackRate===2 ? styles.clicked_btn_style : styles.unclicked_btn_style}>2</button>
        <button type="button" onClick={()=>setFeedbackRate(3)} className={feedbackRate===3 ? styles.clicked_btn_style : styles.unclicked_btn_style}>3</button>
        <button type="button" onClick={()=>setFeedbackRate(4)} className={feedbackRate===4 ? styles.clicked_btn_style : styles.unclicked_btn_style}>4</button>
        <button type="button" onClick={()=>setFeedbackRate(5)} className={feedbackRate===5 ? styles.clicked_btn_style : styles.unclicked_btn_style}>5</button>
    </div>
        <button type="button" className={styles.Submit_btn} onClick={()=>setFeedbackSubmitted(true)}>Submit</button>
  </div>
);

export default RatingBox;
