import { Component } from 'react';
import Nav from '../nav/nav';
import Header from '../header/header';
import About from '../about/about';
import OurBest from '../our-best/our-best';
import Footer from '../footer/footer';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        { name: 'Solimo Coffee Beans 2 kg', price: '10.73', im: require('../../images/815O9ktyfUL.png'), id: '1'},
        { name: 'Presto Coffee Beans 1 kg', price: '15.99', im: require('../../images/71qBQnpQFYL.png'), id: '2'},
        { name: 'AROMISTICO Coffee 1 kg', price: '6.99', im: require('../../images/91Ryk2gKejL.png'), id: '3'}
      ]
    }
  }

  render(){
    const {data} = this.state;

    return (
      <>
        <Nav/>
        <main>
            <Header/>
            <About/>
            <OurBest
              items={data}/>
        </main>
        <Footer/>
      </>
      
    );
  }
  
}

export default App;
