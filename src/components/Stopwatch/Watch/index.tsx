import style from "./Watch.module.scss"

interface Props {
    time: number | undefined
}

export default function Watch({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    // guarantees that string will have 2 digits, filling with '0'
    const [minTen, minUnit] = String(minutes).padStart(2, '0');
    const [secTen, secUnit] = String(seconds).padStart(2, '0');

    return (
        <>
            <span className={style.watchNumber}>{minTen}</span>
            <span className={style.watchNumber}>{minUnit}</span>
            <span className={style.watchDiv}>:</span>
            <span className={style.watchNumber}>{secTen}</span>
            <span className={style.watchNumber}>{secUnit}</span>
        </>
    )
}