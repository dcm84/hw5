import Projects from './Projects.js';
import SearchBar from './SearchBar.js';

/**
 * Отображает центральный блок со строкой поиска и проектами яндекса
 * инкапсулирует верстку таким образом, что эта часть страницы может безболезненно быть вырезана
 */
function SearchBlock() {

  return (
    <div className="container container__search container__line">
      <div className="row second text_black_yes">
        <div className="col col_home-logo">
          <div className="home-logo"><a className="home-link home-logo__link" href="#">
            <div className="home-logo__default" role="img"></div>
          </a></div>
        </div>
        <div className="col col_home-arrow">
          <div className="home-arrow i-bem home-arrow_js_inited">
            <Projects />
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBlock;