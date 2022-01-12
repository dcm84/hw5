import Widget from "./Widget.js";

/**
 * отображает виджеты под строкой поиска
 * компонент Widget умеет рисовать все виды виджетов
 */
const WidgetsBlock = () => {
  const visited = [
    { title: "Трекер", comment: "планирование задач", url: "#", id: 123 },
    { title: "Недвижимость", comment: "о сталинках", url: "#", id: 1232 },
    { title: "Коллекции", comment: "валяние из шерсти", url: "#", id: 321 }
  ];

  const tv = [
    { time: "01:05", title: "Мухтар. Новый след", comment: "НТВ-Мир", url: "#", id: 11 },
    { time: "02:25", title: "Прииск", comment: "ТВ Центр-International", url: "#", id: 12 },
    { time: "03:20", title: "Дорожный патруль-4", comment: "НТВ-Мир", url: "#", id: 13 }
  ];

  const afisha = [
    { title: "Оленья кожа", comment: "премьера в пт", url: "#", id: 21 },
    { title: "Король Лев", comment: "мультфильм", url: "#", id: 22 },
    { title: "Человек-паук: Вдали от дома", comment: "фантастика", url: "#", id: 23 }
  ];

  return (
    <div className="container container__heap container__line heap heap_direction_column">
      <div className="row text_black_yes heap__row widgets__row widgets__row_tr_2">
        <div className="col text_black_yes heap__item widgets__col widgets__col_td_3">
          <Widget title="Погода" url="#">
            <div className="weather__content">
              <a className="home-link home-link_black_yes weather__grade" href="#">
                <div className="weather__icon weather__icon_bkn_n"></div>
                <div className="weather__temp">+23°</div>
              </a>
              <div className="weather__forecast">
                <a className="home-link home-link_black_yes"
                  href="#">Утром&nbsp;+26</a>,<br />
                <a className="home-link home-link_black_yes" href="#">днём&nbsp;+31</a>
              </div>
            </div>
          </Widget>
          <Widget title="Посещаемое" url="#" dashed={true} items={visited} />
        </div>
        <div className="col text_black_yes heap__item widgets__col widgets__col_td_4">
          <Widget title="Карта Германии" url="#" items={[{ title: "Расписания" }]} />
          <Widget title="Телепрограмма" url="#" items={tv} />
        </div>
        <div className="col text_black_yes heap__item widgets__col widgets__col_td_5">
          <Widget title="Афиша" url="#" items={afisha} />
        </div>
      </div>
    </div>
  )
}

export default WidgetsBlock;