import styles from '../../styles/Jobs.module.scss';
import Card from "@/components/card";


export default function Jobs() {
  return(
    <div style={{display: "flex", flexDirection: "row"}}>
      <Card>
        <div className={styles.highlightscss}>Jobs</div>
      </Card>
      <Card>
        <div className={styles.highlightscss}>Jobs</div>
      </Card>
    </div>  )
}

