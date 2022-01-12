/**
 * Отображает время
 */
const CurrentDate = () => {

    var currentDate = new Date();
    return (
        <span className="news__head-item">
            <span className="datetime text_gray_yes i-bem datetime_js_inited datetime_time-hidden_yes">
                <span className="datetime__date">{
                    currentDate.toLocaleString("ru", { day: 'numeric', month: 'long' }) + ", " +
                    currentDate.toLocaleString("ru", { weekday: 'short' }) + " " +
                    currentDate.toLocaleString("ru", { hour: 'numeric', minute: 'numeric', })}
                </span>
            </span>
        </span>
    )
}

export default CurrentDate;