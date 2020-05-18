import React from 'react';
var timer;
class Section03 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: { backgroundImage: 'url(public/../assets/img/irina-iriser-dxk6tMxNkJY-unsplash.jpg)' }
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
                <div id="section03" className="container-fluid d-flex align-items-center vh-100" style={this.state.backgroundImage}>
                    <div className="container">
                        <div className="card bg-dark border-light text-light col-md-5">
                            <h3 className="card-header text-center border-bottom">ساختار عروس دریایی</h3>
                            <div className="card-body">
                                <p className="card-text text-justify display-mobile">
                                    هر گونه فضا یا حفره عمومی که کاملاً توسط بافت‌های مزودرمی و به ویژه توسط پرده‌های صفاقی
                                    احاطه
                                    شده باشد، سلوم (Coelom) نام دارد. بنابراین جانوران دارای سلوم را متعلق به گروه سلوماتها،
                                    می‌دانند. معنای اصطلاحات آسلومات و پزدوسلومات نیز به همین ترتیب روشن
                                    می‌شود. آسلوماتها جانوران فاقد سلوم و در واقع فاقد هر گونه حفره عمومی هستند. پزدوسلوماتها
                                    دارای
                                    پزدوسل یا سلوم کاذب یعنی حفره عمومی هستند که پوشش آن را مستقیماً اکتودرم و آندودرم تشکیل
                                    می‌دهند
                                    نه صفاق. چنین حفره‌ای در ظاهر به سلوم
                                    واقعی می‌ماند. عروس دریایی جز آسلوماتها می‌باشد. بر خلاف باور بیشتر مردم داماد دریایی وجود
                                    ندارد
                                </p>
                            </div>
                            <div className="card-footer border-light">
                                <p className="text-justify display-mobile">
                                    <strong className="badge-light text-dark badge">
                                        آسلومات
                                    </strong> به گروهی از جانوران گفته می‌شود که حفره عمومی حقیقی یا کاذب ندارند. اسفنج‌ها ،
                                    کیسه
                                    تنان و کرم‌های پهن به این گروه از جانوران تعلق دارند
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section03;