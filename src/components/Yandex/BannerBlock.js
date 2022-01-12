/**
 * Отображает блок баннера
 */
const BannerBlock = () => {
    const banner = {
        img: "design/banner.png",
    };

    return (
        <div class="container__first container__line ">
            <div class="row text_black_yes widgets__row widgets__row_tr_1 widget" >
                <img src={banner.img} />
            </div>
        </div>
    )
}

export default BannerBlock;