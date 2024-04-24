import styles from '../../styles/History.module.scss';

export default function History() {
  return(
    <div style={{display: "flex", flexDirection: "row", }}>
        <div className={styles.container}>
          <p >
            Why do we use it?
          </p>
          <p>
          It is a long established fact that a reader will be distracted by 
          the readable content of a page when looking at its layout.
          ere, 
          </p>
        </div>
      
        <div className={styles.container}>
          <ul>
            <li style={{paddingBottom: "10px"}}>content here, making it look like readable English. </li>
            <li style={{paddingBottom: "10px"}}>content here, making it look like readable EnglishIt is 
              a long established fact that a reader will be distracted 
              by the readable content of a page when looking at its layout. </li>
            <li style={{paddingBottom: "10px"}}>content here, makingr will be distracted sing Lorem Ipsum 
            is that it has a more-or-less normal distribution of letters, as opposed to using,  </li>
            <li style={{paddingBottom: "10px"}}>content here, making it look like readable English. </li>
            <li style={{paddingBottom: "10px"}}>content here, making it look like readable EnglishIt is a 
              long established fact that a reader will be distracted by the 
              readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less 
              normal distribution of letters, as opposed to using. </li>
          </ul>
        </div>
    </div>
  )
}