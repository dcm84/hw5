import Widget from "./Widget.js";

/**
 * Отображает анонс статьи
 */
const ArticleAnons = () => {
    const article = {
        title: "Работа над ошибками",
        text: "Смотрите Яндекс и запоминайте",
        img: "design/sha.png",
        url: "#",
        id: 456
    };

    return (
        <div className="col col_td_0 widgets__col widgets__col_td_1">
            <Widget title={article.title} url="#" img={article.img} items={[{title: article.text}]} />
        </div>
    )
}

export default ArticleAnons;