import React from 'react';

class Section05 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            htmlPhotographer: ['https://unsplash.com/photos/KLbUohEjb04', 'https://unsplash.com/photos/dxk6tMxNkJY', 'https://unsplash.com/photos/mbpKRQEjZis', 'https://unsplash.com/photos/tBnLsg_VDJw'],
            namePhotographer: ['Pathum Danthanarayana', 'Irina Iriser', 'Nik Ramzi Nik Hassan', 'Mathieu Turle'],
            imgPhotographer: ['public/../assets/img/pathum-danthanarayana-KLbUohEjb04-unsplash.jpg', 'public/../assets/img/irina-iriser-dxk6tMxNkJY-unsplash.jpg', 'public/../assets/img/nik-ramzi-nik-hassan-mbpKRQEjZis-unsplash.jpg', 'public/../assets/img/mathieu-turle-tBnLsg_VDJw-unsplash.jpg']
        }
    }

    componentDidMount() {
        setInterval(() => {
            let htmlPhotographer = [];
            let namePhotographer = [];
            let imgPhotographer = [];
            this.props.src.map(
                item => (
                    htmlPhotographer.push(item.links.html),
                    namePhotographer.push(item.user.name),
                    imgPhotographer.push(item.urls.thumb)
                )
            )
            this.setState(
                () => {
                    return {
                        htmlPhotographer: htmlPhotographer,
                        namePhotographer: namePhotographer,
                        imgPhotographer: imgPhotographer
                    }
                }
            )
        }, 15000)
    }

    render() {
        return (
            <div className="row">
                <div id="section05" className="container-fluid d-flex align-items-center bg-dark vh-100">
                    <div className="container">
                        <div className="card-columns text-center only-md">
                            <div className="card p-3">
                                <img src={this.state.imgPhotographer[0]} className="card-img-top" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <a href={this.state.htmlPhotographer[0]}>Photo by {this.state.namePhotographer[0]} on Unsplash</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-3">
                                <img src="public/../assets/img/eugenia-clara-95GPGCq_cdg-unsplash.jpg" className="card-img-top" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <a href="https://unsplash.com/photos/95GPGCq_cdg">Photo by Eugenia Clara on Unsplash</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-3">
                                <img src={this.state.imgPhotographer[1]} className="card-img-top" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <a href={this.state.htmlPhotographer[1]}>Photo by {this.state.namePhotographer[1]} on Unsplash</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-3">
                                <img src={this.state.imgPhotographer[2]} className="card-img-top" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <a href={this.state.htmlPhotographer[2]}>Photo by {this.state.namePhotographer[2]} on
                                        Unsplash</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-3">
                                <img src="public/../assets/img/m.m.jpg" className="card-img-top" />
                                <div className="card-body">
                                    <a href="https://github.com/Mohammadreza4mn">
                                        <p className="rounded-pill bg-dark text-light">M . M</p>
                                    </a>
                                </div>
                            </div>
                            <div className="card p-3">
                                <img src="public/../assets/img/palash-jain-GxWZCbUolf0-unsplash.jpg" className="card-img-top" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <a href="https://unsplash.com/photos/GxWZCbUolf0">Photo by Palash Jain on Unsplash</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-3">
                                <img src="public/../assets/img/tony-reid-luanaxyvbpQ-unsplash.jpg" className="card-img-top" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <a href="https://unsplash.com/photos/luanaxyvbpQ">Photo by Tony Reid on Unsplash</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-3">
                                <img src={this.state.imgPhotographer[3]} className="card-img-top" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <a href={this.state.htmlPhotographer[3]}>Photo by {this.state.namePhotographer[3]} on Unsplash</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="only-lg" style={{ display: 'none' }}>
                            <div className="carousel slide" id="card-Sec5" data-ride="carousel" data-interval={10000}>
                                <ul className="carousel-indicators">
                                    <li data-target="#card-Sec5" data-slide-to={0} className="bg-light" />
                                    <li data-target="#card-Sec5" data-slide-to={1} className="bg-light" />
                                    <li data-target="#card-Sec5" data-slide-to={2} className="bg-light" />
                                    <li data-target="#card-Sec5" data-slide-to={3} className="bg-light" />
                                    <li data-target="#card-Sec5" data-slide-to={4} className="bg-light" />
                                    <li data-target="#card-Sec5" data-slide-to={5} className="bg-light" />
                                    <li data-target="#card-Sec5" data-slide-to={6} className="bg-light" />
                                    <li data-target="#card-Sec5" data-slide-to={7} className="bg-light" />
                                </ul>
                                <div className="carousel-inner text-center">
                                    <div className="carousel-item active">
                                        <div className="card p-3">
                                            <img src={this.state.imgPhotographer[0]} className="card-img-top" />
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <a href={this.state.htmlPhotographer[0]}>Photo by {this.state.namePhotographer[0]} on
                                                    Unsplash</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card p-3">
                                            <img src="public/../assets/img/eugenia-clara-95GPGCq_cdg-unsplash.jpg" className="card-img-top" />
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <a href="https://unsplash.com/photos/95GPGCq_cdg">Photo by Eugenia Clara on
                                                    Unsplash</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card p-3">
                                            <img src={this.state.imgPhotographer[1]} className="card-img-top" />
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <a href={this.state.htmlPhotographer[1]}>Photo by {this.state.namePhotographer[1]} on
                                                    Unsplash</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card p-3">
                                            <img src={this.state.imgPhotographer[2]} className="card-img-top" />
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <a href={this.state.htmlPhotographer[2]}>Photo by {this.state.namePhotographer[2]} on
                                                    Unsplash</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card p-3">
                                            <img src="public/../assets/img/m.m.jpg" className="card-img-top" />
                                            <div className="card-body">
                                                <a href="https://github.com/Mohammadreza4mn">
                                                    <p className="rounded-pill bg-dark text-light">M . M</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card p-3">
                                            <img src="public/../assets/img/palash-jain-GxWZCbUolf0-unsplash.jpg" className="card-img-top" />
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <a href="https://unsplash.com/photos/GxWZCbUolf0">Photo by Palash Jain on
                                                    Unsplash</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card p-3">
                                            <img src="public/../assets/img/tony-reid-luanaxyvbpQ-unsplash.jpg" className="card-img-top" />
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <a href="https://unsplash.com/photos/luanaxyvbpQ">Photo by Tony Reid on
                                                    Unsplash</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card p-3">
                                            <img src={this.state.imgPhotographer[3]} className="card-img-top" />
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <a href={this.state.htmlPhotographer[3]}>Photo by {this.state.namePhotographer[3]} on
                                                    Unsplash</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#card-Sec5" className="carousel-control-prev" role="button" data-slide="prev">
                                    <img className="only-md" src="public/../assets/img/jellyfish.png" />
                                </a>
                                <a href="#card-Sec5" className="carousel-control-next" role="button" data-slide="next">
                                    <img className="only-md" src="public/../assets/img/jellyfish.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section05;