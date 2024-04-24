import styles from '../../styles/Structure.module.scss';
import Card from "@/components/card";

export default function Structure() {
  return(
    <div style={{display: "flex", flexDirection: "row"}}>
      <Card>
        <div className={styles.highlightscss}>Structure</div>
      </Card>
      <Card>
        <div className={styles.highlightscss}>Structure</div>
      </Card>
    </div>
  )
}