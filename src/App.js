import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this)
    this.state = {
      pic: []
    }
  }

  componentDidMount() {
    let query = 'jellyfish';
    let per_page = '4';
    let orientation = 'landscape';
    let page=Math.floor(Math.random()*30)+1; //there are only 30 pages
    let color = 'black';
    fetch(`https://api.unsplash.com/search/photos/?client_id=_PddIXc9E6hWsR9-ItExkNG46hXQiu8JjJNZVE46O5s&query=${query}&per_page=${per_page}&orientation=${orientation}&page=${page}&color=${color}`)
      .then(res => res.json())
      .then(
        json => {
          this.setState({
            pic: json.results
          })
        }
      )
  }

  render() {
    return (
      <div>
        <div>
          Hello World!!
        </div>
      </div>
    )
  }
}

export default App;