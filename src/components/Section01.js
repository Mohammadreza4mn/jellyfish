import React from 'react';

class Section01 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: { backgroundImage: 'url(public/../assets/img/pathum-danthanarayana-KLbUohEjb04-unsplash.jpg)' }
        }
    }

    componentDidMount() {
        setInterval(() => {
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

    render() {
        return (
            <div className="row">
                <div id="section01" className="container-fluid d-flex align-items-center vh-100" style={this.state.backgroundImage}>
                    <div className="container">
                        <div className="card col-md-4 bg-dark text-light border">
                            <h1 className="card-header text-center border-bottom display-mobile">عروس دریایی</h1>
                            <div className="card-body">
                                <p className="card-text text-justify display-mobile">
                                    عروس دریایی گونه‌ای از بی‌مهرگان است که در شاخه مرجانیان طبقه‌بندی می‌شود. این موجودات قادر به
                                    شنا
                                    کردن می‌باشند گونه‌های متفاوتی از این جاندار وجود دارد از جمله Scyphozoa (بیش از ۲۰۰ گونه)،
                                    Staurozoa (در حدود ۵۰ گونه)، Cubozoa (در حدود ۲۰ گونه) و Hydrozoa
                                    (در حدود ۱۰۰۰-۱۵۰۰ گونه)، عروس دریایی در همه اقیانوسها یافت می‌شود گونه‌ای از آن‌ها در آب شیرین
                                    زندگی می‌کند که اندازه‌ای کمتر از نیم اینچ و رنگی سفید و روشن دارد. این گونه نیش ندارد در بسیاری
                                    از
                                    مناطق عروس دریایی‌ها را در آکواریوم
                                    نگهداری می‌کنند. عروس‌های دریایی از قدیمی ترین موجودات زنده دریایی‌اند که از ۶۵۰ میلیون سال پیش
                                    تاکنون در دریاها زیست می‌نمایند. عروس‌های دریایی از نظر شکل، اندازه و رنگ‌های متنوع به گونه‌های
                                    مختلف تقسیم‌بندی می‌شوند
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section01;