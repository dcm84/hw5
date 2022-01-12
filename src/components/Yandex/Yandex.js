import NewsBlock from "./NewsBlock";
import SearchBlock from "./SearchBlock.js";
import BannerBlock from "./BannerBlock.js";
import WidgetsBlock from "./WidgetsBlock.js";

/**
 * основной компонет страницы яндекса, инспирированный https://web.archive.org/web/20190731052329/https://yandex.ru/
 * дизайн тщательно выпилен и упакован
 * работа сделана в предположении, что функциональный блоки получили данные (они объявлены в переменных внутри блоков)
 * передача параметров и вниз хорошо представлена в <WidgetsBlock />
 */
function Yandex() {
    return (
        <>
            <link rel="stylesheet" href="design/yandex.css"></link>
            <div className="rows-wrapper">
                <div className="container rows">
                    <div className="row rows__row rows__row_main">
                        <div className="col main widgets" role="main">
                            <NewsBlock />
                            <SearchBlock />
                            <BannerBlock />
                            <WidgetsBlock />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Yandex;