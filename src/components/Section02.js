import React from 'react';
var timer;
class Section02 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: { backgroundImage: 'url(public/../assets/img/nik-ramzi-nik-hassan-mbpKRQEjZis-unsplash.jpg)' }
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
                <div id="section02" className="container-fluid d-flex align-items-center vh-100" style={this.state.backgroundImage}>
                    <div className="container">
                        <div className="jumbotron col-md-4 float-left bg-dark text-light border">
                            <h1 className="text-center border-bottom pb-3 display-mobile">اطلاعات اولیه</h1>
                            <div className="carousel slide" id="jumbotron-Sec2" data-ride="carousel" data-interval={10000} style={{ minHeight: 184 }}>
                                <ul className="carousel-indicators">
                                    <li data-target="#jumbotron-Sec2" data-slide-to={0} className="bg-light" />
                                    <li data-target="#jumbotron-Sec2" data-slide-to={1} className="bg-light" />
                                </ul>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <p className="text-justify display-mobile">
                                            عمومی‌ترین صفات جانوران که طی مراحل رشد نیز قبل از همه ظاهر می‌شود، تراز ساختمانی
                                            آنهاست. همه جانوران زندگی را از یک سلول آغاز می‌کنند و برخی از تراز بافت بالاتر
                                            نمی‌روند، اما بقیه آن‌ها از این تراز می‌گذرند و بدن پیچیده‌تری می‌یابند. بدین ترتیب
                                            جانوران
                                            (متازوآ) را صاحب دو شعبه رده‌بندی در نظر می‌گیرند. در شعبه شبه جانوران، بالاترین
                                            تراز
                                            ساختمانی را بافت تشکیل می‌دهد. این شعبه فقط شاخه اسفنج‌ها را شامل می‌شود. همه
                                            جانوران
                                            دیگر که به شعبه هوپس‌زیان تعلق دارند، با داشتن
                                            اندام و دستگاه مشخص می‌شوند
                                        </p>
                                    </div>
                                    <div className="carousel-item">
                                        <p className="text-justify display-mobile">
                                            دومین صفت عمومی که بعد از تراز ساختمانی در حین رشد جانوران ظاهر می‌شود، نوع تقارن
                                            آنهاست. در ابتدا جنین همه جانوران دارای تقارن شعاعی یعنی به صورت کره‌ای توپر یا
                                            توخالی و
                                            متشکل از تعدادی سلول است. بعضی از گروه‌های جانوری مانند عروس دریایی این تقارن شعاعی
                                            را تا مرحله بلوغ حفظ می‌کنند، اما در بقیه پس از مدتی جنین تقارن شعاعی ثانویه (مانند
                                            ستاره دریایی) یا تقارن دو طرفی می‌یابد و لارو و جانور بالغ حاصل از آن‌ها نیز معمولاً
                                            همین نوع تقارن را نگه می‌دارند
                                        </p>
                                    </div>
                                </div>
                                <a href="#jumbotron-Sec2" className="carousel-control-prev" role="button" data-slide="prev">
                                    <img className="only-md" src="public/../assets/img/favicon.png" />
                                </a>
                                <a href="#jumbotron-Sec2" className="carousel-control-next" role="button" data-slide="next">
                                    <img className="only-md" src="public/../assets/img/favicon.png" />
                                </a>
                            </div>
                        </div>
                        <div className="alert bg-dark text-light alert-dismissible col-md-7 fade show only-md">
                            <button type="button" className="close" data-dismiss="alert">×</button>
                            <div className="text-right">
                                <em className="badge p-2 badge-primary alert-heading" style={{ fontFamily: 'sans-serif' }}>
                                    HO2
                                </em>
                            </div>
                            <p className="text-justify">
                                <br /> تنها حدود ۵ درصد از بدن عروس‌های دریایی از پروتئین‌های ساختاری، ماهیچه و سلول‌های عصبی
                            ساخته
                            شده و ۹۵ درصد آن را آب تشکیل می‌دهد. جهت مقایسه، خوب است بدانید که بدن انسان‌ها تا ۶۰ درصد
                            از آب
                            تشکیل شده
                            </p><div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '95%' }}>
                                    95%
                                </div>
                            </div>
                            <p />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section02;