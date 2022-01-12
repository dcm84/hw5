import NewsTabs from './NewsTabs.js';
import News from './News.js';
import Currencies from './Currencies.js';
import ArticleAnons from './ArticleAnons.js';

/**
 * Отображает новостной блок, включающий табы, топ новостей и курс валют
 * инкапсулирует верстку таким образом, что эта часть страницы и ее составные блоки могут быть безболезненно вырезаны
 */
function NewsBlock() {

  return (
    <div className="container container__first container__line container_shrinkable_yes">
      <div className="row first text_black_yes widgets__row widgets__row_tr_1">
        <div className="col col_td_0 widgets__col widgets__col_td_1">
          <div className="i-bem widget widget_mode_plain widget_id_topnews widget_name_topnews widgets__item b-widget-fixed widget_js_inited">
            <div className="b-widget-data b-wrapper b-wrapper-">
              <div className="news news_animation_yes i-bem mix-tabber_theme_link news_js_inited">
                <div className="news__header widget__content">
                  <NewsTabs />
                  <News />
                </div>
                <Currencies />
              </div>
            </div>
          </div>
        </div>
        <ArticleAnons />
      </div>
    </div>
  )
}

export default NewsBlock;