/**
 * отображает список проектов яндекса
 */
const Projects = () => {
  const projects = [
    {
      title: "Видео",
      url: "#"
    },
    {
      title: "Картинки",
      url: "#"
    },
    {
      title: "Новости",
      url: "#"
    },
    {
      title: "Карты",
      url: "#"
    },
    {
      title: "Маркет",
      url: "#"
    },
    {
      title: "Переводчик",
      url: "#"
    },
    {
      title: "ещё",
      url: "#"
    }
  ];

  return (
    <div class="home-arrow__tabs">
      <div class="home-tabs stream-control dropdown2 dropdown2_switcher_elem i-bem home-tabs_js_inited" role="navigation">
        {projects.map(o =>
          <a 
            class="home-link home-link_blue_yes home-tabs__link home-tabs__search"
            href={o.url} 
            target="_blank" 
            rel="noopener" 
            key={o.title}>{o.title}</a>
        )}
      </div>
    </div>
  )
}

export default Projects;