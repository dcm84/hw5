/**
 * Отображает поисковую строку яндекса
 */
const SearchBar = () => {

    return (
        <>
            <div className="home-arrow__search-wrapper">
                <div className="home-arrow__search">
                    <form className="search2 suggest2-form suggest2-form__node suggest2-counter i-bem suggest2-form_stats_yes suggest2-counter_js_inited search2_js_inited suggest2-form_js_inited" action="">
                        <input type="hidden" name="lr" value="87" />
                        <input type="hidden" name="msid" value="1564550611.56784.140426.283475" />
                        <div className="search2__input">
                            <span className="input suggest2-form__input input_size_ws-head input_theme_websearch input_search2-clear-hide_yes input_ahead_yes input_autofocus_capture input_keyboard_yes input_clear_yes i-bem input_js_inited">
                                <span
                                    className="input__box"><span className="input__clear" unselectable="on">&nbsp;</span>
                                    <div className="keyboard-loader input__keyboard-button i-bem b-opacity b-opacity-hold-ie keyboard-loader_lang_ru keyboard-loader_js_inited">
                                        <i className="b-ico keyboard-loader__icon b-ico-kbd"></i>
                                    </div>
                                    <div className="input__ahead">
                                        <input className="input__ahead-hint" type="text" disabled="disabled" />
                                        <span className="input__ahead-filler"></span>
                                        <div className="input__ahead-hintholder"></div>
                                    </div>
                                    <input
                                        className="input__control input__input" tabindex="2" autocomplete="off"
                                        autocorrect="off" autocapitalize="none" spellcheck="false" id="text" maxlength="400"
                                        autofocus="" name="text" />
                                </span>
                            </span>
                        </div>
                        <div className="search2__button">
                            <button className="button suggest2-form__button button_theme_websearch button_size_ws-head i-bem"
                                tabindex="-1" role="button" type="submit"><span className="button__text">Найти</span></button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="home-arrow__bottom">
                <div className="home-arrow__sample">Найдётся всё.
                    <span className="home-arrow__sample-what">Например,</span>
                    <span className="home-link home-link_pseudo_yes home-link_gray_yes home-arrow__sample-link" tabindex="0"> сколько материков на земле</span>
                </div>
            </div>
        </>
    )
}

export default SearchBar;