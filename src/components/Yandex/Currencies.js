/**
 * Отображает курсы валют с изменениями
 */
const Currencies = () => {
  const currencies = [
    {
      title: "USD MOEX",
      value: "63,52",
      delta: "+0,09"
    },
    {
      title: "EUR MOEX",
      value: "70,86",
      delta: "+0,14"
    },
    {
      title: "Нефть",
      value: "64,90",
      delta: "+1,63%"
    },
  ];

  return (
    <div
      className="inline-stocks i-bem inline-stocks_new_yes _popup2-destructor _popup2-destructor_js_inited inline-stocks_js_inited"
      role="complementary">
      <div className="inline-stocks__content text_black_yes">
        {currencies.map(o =>
          <div key={o.title}
            className="b-inline inline-stocks__item inline-stocks__item_id_2002 hint__item inline-stocks__part">
            <a className="home-link home-link_black_yes inline-stocks__link" href="#">{o.title}</a><span
              className="inline-stocks__value"><span
                className="inline-stocks__value_inner">{o.value}</span></span><span
                  className="inline-stocks__cell inline-stocks__cell_type_delta  inline-stocks__cell_change_small">{o.delta}</span>
          </div>
        )}

      </div>
    </div>
  )
}

export default Currencies;