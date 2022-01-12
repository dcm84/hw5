import PropTypes from 'prop-types';
import CurrentDate from './CurrentDate.js';

const NewsTabs = () => {
  const tabs = [
    {
      title: "Сейчас в СМИ",
      url: "#",
      id: 23
    },
    {
      title: "в Германии",
      url: "#",
      id: 24
    },
    {
      title: "Рекомендуем",
      url: "#",
      id: 25
    }
  ];

  return (
    <div className="news__tabs">
      {tabs.map(o =>
        <h1 className="news__tab-wrapper news__head-item" key={o.id}>
          <a className="home-link home-link_blue_yes news__tab news__tab_selected_yes mix-tabber__tab mix-tabber__tab_selected_yes"
            tabindex="0" role="tab" href={o.url}>{o.title}</a>
        </h1>
      )}
      <CurrentDate />
    </div>
  )
}


/* StepsTable.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.instanceOf(StepModel)).isRequired,
    onRemove: PropTypes.func.isRequired
} */

export default NewsTabs;