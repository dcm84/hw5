import PropTypes from 'prop-types';

/**
 * Отображает типовой Widget
 * умеет показывать виджеты с картинкой, названием, списоком данных (в различных вариациях), в крайнем случае, цепляет внутрь блока children
 */
const Widget = ({ ...props }) => {

    return (
        <div
            className="i-bem widget widget_mode_plain widget_id_tv widget_name_tv widgets__item b-widget-fixed widget_js_inited">
            <div className="b-widget-data b-wrapper b-wrapper-">
                <div className="tv" role="complementary">
                    {props.img && <img src={props.img} />}
                    {props.url && <h1><a className="home-link home-link_blue_yes" href={props.url}>{props.title}</a></h1>}
                    <div className="widget__content">
                        {
                            props.items
                            && <ul className="list tv__list">
                                {
                                    props.items.map(o =>
                                        <li className="list__item tv__item" key={o.title}>
                                            {o.time && <span className="tv__time">{o.time}</span>}
                                            {
                                                o.url && props.dashed && 
                                                    <><a className="home-link home-link_bold_yes home-link_black_yes"
                                                href={o.url}>{o.title}</a><span>&nbsp;—&nbsp;</span>{o.comment}</>
                                            }
                                            {
                                                !o.url && props.dashed && 
                                                   <>{o.title}<span>&nbsp;—&nbsp;</span>{o.comment}</>
                                            }
                                            {
                                                o.url && !props.dashed && 
                                                <span className="tv__title">
                                                <a className="home-link tv__name home-link_black_yes" href={o.url}>{o.title}</a>
                                                <a className="home-link tv__channel home-link_gray_yes" href={o.url}>{o.comment}</a>
                                            </span>
                                            }
                                            {
                                                !o.url && !props.dashed && 
                                                <span className="tv__title">
                                                <span className="home-link tv__name home-link_black_yes">{o.title}</span>
                                                <span className="home-link tv__channel home-link_gray_yes">{o.comment}</span>
                                            </span>
                                            }
                                        </li>
                                    )
                                }
                            </ul>
                        }
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

Widget.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    img: PropTypes.string,
    dashed: PropTypes.bool,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            time: PropTypes.string,
            title: PropTypes.string.isRequired,
            url: PropTypes.string,
            comment: PropTypes.string
        })
    )
}

export default Widget;