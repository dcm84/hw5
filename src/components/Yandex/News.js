

/**
 * Отображает список новостей с иконками
 */
const News = () => {
  const news = [
    {
      title: "Закон об ипотечных каникулах вступил в силу",
      url: "#",
      img: "design/logo-square_006.png",
      id: 123
    },
    {
      title: "Трамп планирует заключить сделку с РФ по контролю над вооружениями",
      url: "#",
      img: "design/logo-square_005.png",
      id: 122
    },
    {
      title: "Путин упростил получение автомобильных номеров",
      url: "#",
      img: "design/logo-square_003.png",
      id: 124
    },
    {
      title: "«Турпомощь» прокомментировала гибель десятков россиян в Анталье",
      url: "#",
      img: "design/logo-square.png",
      id: 125
    },
    {
      title: "В команде Зеленского раскрыли план реформ на Украине",
      url: "#",
      img: "design/logo-square.png",
      id: 126
    },
  ];

  return (
    <div className="news__panels mix-tabber-slide2__panels">
      <div className="news__panel mix-tabber-slide2__panel" role="tabpanel" id="news_panel_news">
        <ol className="list news__list">
          {news.map(o =>
            <li className="list__item  list__item_icon" key={o.id}><a
              className="home-link list__item-content list__item-content_with-icon home-link_black_yes"
              href={o.url}><span className="news__item-inner">
                <div
                  className="news__agency-icon news__agency-icon_desktop news__agency-icon_image_yes">
                  <object className="news__agency-icon-image" data={o.img} type="image/png">
                    <div className="news__agency-icon-image-empty"></div>
                  </object>
                </div>
                <span className="news__item-content">{o.title}</span>
              </span></a></li>
          )}
        </ol>
      </div>
    </div>
  )
}

export default News;