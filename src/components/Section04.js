import React from 'react';
var timer;
class Section04 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: { backgroundImage: 'url(public/../assets/img/mathieu-turle-tBnLsg_VDJw-unsplash.jpg)' }
        }
    }

    componentDidMount() {
        timer=setInterval(() => {
            let url = [];
            this.props.src.map(
                item => (
                    url.push(item.urls.regular)
                )
            )
            this.setState(
                () => {
                    return {
                        backgroundImage: { backgroundImage: `url(${url[this.props.picNumber]})` }
                    }
                }
            )
        }, 15000)
    }

    componentWillUnmount(){
        clearTimeout(timer)
      }

    render() {
        return (
            <div className="row">
                <div id="section04" className="container-fluid d-flex align-items-center vh-100" style={this.state.backgroundImage}>
                    <div className="container">
                        <div className="column card-deck only-md">
                            <div className="card bg-dark text-light border">
                                <img className="card-img-top cardImg" src="public/../assets/img/palash-jain-GxWZCbUolf0-unsplash.jpg"/>
                                <div className="card-body">
                                    <p className="card-text text-justify">
                                        چرخه زندگی در اورلیا شامل دو مرحله جنسی و غیر جنسی است. در ضمن جنس‌ها جدا از هم هستند.
                                        در
                                        تکثیر جنسی، دو جنس نر و ماده اسپرم و تخمک خود را داخل آب رها نموده و پدیده باروری در
                                        داخل آب
                                        انجام می‌پذیرد. محل قرارگیری گنادها نیز در داخل و جدار درونی بدن قرار
                                        دارد. پس از پدیده رسیدگی، گامتهای نر و ماده به داخل معده ریخته و از آنجا به دهان و سپس
                                        به
                                        داخل آب رها می‌شوند. گاهی اوقات عمل باروری تخمک‌ها با رهاسازی اسپرم در داخل آب و انتقال
                                        آن
                                        از راه آب ورودی به حفره دهانی انجام می‌پذیرد
                                    </p>
                                </div>
                            </div>
                            <div className="card bg-dark text-light border">
                                <img className="card-img-top cardImg" src="public/../assets/img/eugenia-clara-95GPGCq_cdg-unsplash.jpg" />
                                <div className="card-body">
                                    <p className="card-text text-justify">
                                        در مرحله جنسی، غدد جنسی نعل اسبی شکل، به تعداد ۴ عدد در قسمت زیر چتر در کنار کیسه‌های
                                        معدی
                                        قرار دارند و از قسمت بیرون اورلیا می‌توان آن را دید. در مدوز نر یا اورلیای نر، اسپرم‌ها
                                        از
                                        غدد تناسلی آزاد شده، وارد حفره گوارشی شده و از راه دهان در آب دریا آزاد
                                        می‌شوند و در جستجوی مدوز ماده خواهند بود. اسپرم‌ها از طریق دهان اورلیای ماده، وارد حفره
                                        گوارشی شده و در آنجا با تخمک‌های آزاد شده از غدد جنسی ماده ترکیب می‌شوند. لقاح که صورت
                                        گرفت،
                                        تخم‌های حاصل از لقاح، حفره گوارشی را ترک کرده
                                        و در کیسه‌های پرورشی مخصوصی که در شیار بازوها به‌وجود می‌آید، جای می‌گیرند
                                    </p>
                                </div>
                            </div>
                            <div className="card bg-dark text-light border">
                                <img className="card-img-top cardImg" src="public/../assets/img/tony-reid-luanaxyvbpQ-unsplash.jpg"  />
                                <div className="card-body">
                                    <p className="card-text text-justify">
                                        تخم‌ها بعد از طی مراحل رشد و نمو، هر کدام به صورت لاروی مژک‌دار درمی‌آیند و سپس این قسمت
                                        را
                                        ترک کرده و به صورت وارونه روی سطح سخت دیگر متصل می‌شوند. در این حالت لارو، مژک‌ها را از
                                        دست
                                        داده و ساکن می‌شود و حدود ۱۲ سانتیمتر اندازه دارد و در این حالت به
                                        صورت پولیپ است. لارو بدون مژک ممکن است برای ماه‌ها یا سال‌ها به این شکل باقی بماند. در
                                        اواخر
                                        پاییز و با شروع سرما، پولیپ رشد کرده و به‌طور عرضی تقسیم می‌شود، قطعه قطعه شده و قطعات
                                        عمیق‌تر می‌گردند و پولیپ به صورت مجموعه‌ای
                                        از قطعات نعلبکی شکل درمی‌آید که لبه آن‌ها دندانه‌دار است و این قطعات به وسیلهٔ لوله
                                        مرکزی با
                                        هم ارتباط دارند
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="only-lg" style={{ display: 'none' }}>
                            <div className="carousel slide" id="card-Sec4" data-ride="carousel" data-interval={10000} style={{ minHeight: 434 }}>
                                <ul className="carousel-indicators">
                                    <li data-target="#card-Sec4" data-slide-to={0} className="bg-light" />
                                    <li data-target="#card-Sec4" data-slide-to={1} className="bg-light" />
                                    <li data-target="#card-Sec4" data-slide-to={2} className="bg-light" />
                                </ul>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="card bg-dark text-light border">
                                            <img className="card-img-top cardImg" src="public/../assets/img/palash-jain-GxWZCbUolf0-unsplash.jpg" />
                                            <div className="card-body">
                                                <p className="card-text text-justify">
                                                    چرخه زندگی در اورلیا شامل دو مرحله جنسی و غیر جنسی است. در ضمن جنس‌ها جدا از
                                                    هم هستند.
                                                    در
                                                    تکثیر جنسی، دو جنس نر و ماده اسپرم و تخمک خود را داخل آب رها نموده و پدیده
                                                    باروری در
                                                    داخل آب
                                                    انجام می‌پذیرد. محل قرارگیری گنادها نیز در داخل و جدار درونی بدن قرار
                                                    دارد. پس از پدیده رسیدگی، گامتهای نر و ماده به داخل معده ریخته و از آنجا به
                                                    دهان و سپس
                                                    به
                                                    داخل آب رها می‌شوند. گاهی اوقات عمل باروری تخمک‌ها با رهاسازی اسپرم در داخل
                                                    آب و انتقال
                                                    آن
                                                    از راه آب ورودی به حفره دهانی انجام می‌پذیرد
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card bg-dark text-light border">
                                            <img className="card-img-top cardImg" src="public/../assets/img/eugenia-clara-95GPGCq_cdg-unsplash.jpg" />
                                            <div className="card-body">
                                                <p className="card-text text-justify">
                                                    در مرحله جنسی، غدد جنسی نعل اسبی شکل، به تعداد ۴ عدد در قسمت زیر چتر در کنار
                                                    کیسه‌های
                                                    معدی
                                                    قرار دارند و از قسمت بیرون اورلیا می‌توان آن را دید. در مدوز نر یا اورلیای
                                                    نر، اسپرم‌ها
                                                    از
                                                    غدد تناسلی آزاد شده، وارد حفره گوارشی شده و از راه دهان در آب دریا آزاد
                                                    می‌شوند و در جستجوی مدوز ماده خواهند بود. اسپرم‌ها از طریق دهان اورلیای
                                                    ماده، وارد حفره
                                                    گوارشی شده و در آنجا با تخمک‌های آزاد شده از غدد جنسی ماده ترکیب می‌شوند.
                                                    لقاح که صورت
                                                    گرفت،
                                                    تخم‌های حاصل از لقاح، حفره گوارشی را ترک کرده
                                                    و در کیسه‌های پرورشی مخصوصی که در شیار بازوها به‌وجود می‌آید، جای می‌گیرند
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card bg-dark text-light border">
                                            <img className="card-img-top cardImg" src="public/../assets/img/tony-reid-luanaxyvbpQ-unsplash.jpg" />
                                            <div className="card-body">
                                                <p className="card-text text-justify">
                                                    تخم‌ها بعد از طی مراحل رشد و نمو، هر کدام به صورت لاروی مژک‌دار درمی‌آیند و
                                                    سپس این قسمت
                                                    را
                                                    ترک کرده و به صورت وارونه روی سطح سخت دیگر متصل می‌شوند. در این حالت لارو،
                                                    مژک‌ها را از
                                                    دست
                                                    داده و ساکن می‌شود و حدود ۱۲ سانتیمتر اندازه دارد و در این حالت به
                                                    صورت پولیپ است. لارو بدون مژک ممکن است برای ماه‌ها یا سال‌ها به این شکل باقی
                                                    بماند. در
                                                    اواخر
                                                    پاییز و با شروع سرما، پولیپ رشد کرده و به‌طور عرضی تقسیم می‌شود، قطعه قطعه
                                                    شده و قطعات
                                                    عمیق‌تر می‌گردند و پولیپ به صورت مجموعه‌ای
                                                    از قطعات نعلبکی شکل درمی‌آید که لبه آن‌ها دندانه‌دار است و این قطعات به
                                                    وسیلهٔ لوله
                                                    مرکزی با
                                                    هم ارتباط دارند
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#card-Sec4" className="carousel-control-prev" role="button" data-slide="prev">
                                    <img className="only-md" src="public/../assets/img/favicon.png" />
                                </a>
                                <a href="#card-Sec4" className="carousel-control-next" role="button" data-slide="next">
                                    <img className="only-md" src="public/../assets/img/favicon.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section04;