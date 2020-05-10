import React from 'react';
import Header from './components/Header';
import Section01 from './components/Section01';
import Section02 from './components/Section02';
import Section03 from './components/Section03';
import Section04 from './components/Section04';
import Section05 from './components/Section05';
import Footer from './components/Footer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pic: []
    }
  }

  componentDidMount() {
    let page = Math.floor(Math.random() * 30) + 1; //total_pages 30

    const query = 'jellyfish';
    const per_page = '4';
    const orientation = 'landscape';
    fetch(`https://api.unsplash.com/search/photos/?client_id=_PddIXc9E6hWsR9-ItExkNG46hXQiu8JjJNZVE46O5s&query=${query}&per_page=${per_page}&orientation=${orientation}&page=${page}`)
    .then(res => res.json())
    .then(
      json => {
        this.setState({
          pic: json.results
        })
      }
    )
    
    setInterval(() => {
      let page = Math.floor(Math.random() * 30) + 1; //total_pages 30
      //const color = 'black';
      fetch(`https://api.unsplash.com/search/photos/?client_id=_PddIXc9E6hWsR9-ItExkNG46hXQiu8JjJNZVE46O5s&query=${query}&per_page=${per_page}&orientation=${orientation}&page=${page}`)
        .then(res => res.json())
        .then(
          json => {
            this.setState({
              pic: json.results
            })
          }
        )
    }, 15000)
  }

  render() {
    return (
      <div>
        <Header />
        <Section01 src={this.state.pic} picNumber={0} />
        <Section02 src={this.state.pic} picNumber={1} />
        <Section03 src={this.state.pic} picNumber={2} />
        <Section04 src={this.state.pic} picNumber={3} />
        <Section05 src={this.state.pic} />
        <Footer />
      </div>
    )
  }
}

export default App;