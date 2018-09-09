import React,{Component} from 'react';
import './App.css';
// Load Pure/Stateless React Component
import Counter from './Counter.js';
// Load JSON Translate file
import language from './Lang.json';

class App extends Component{
  constructor(props){
    super(props)
    this.interval = setInterval(() => {   //Set New date every seconds
      this.setState({Date: new Date()})
    },1000)
    this.state = {
        Date:null,
        Lang:"en"
    }

  }

  render(){
    return(
          <div className="timergroup">
            <Counter date={this.state.Date} show="day" lang={this.state.Lang}/>
            <Counter date={this.state.Date} show="hours" lang={this.state.Lang}/>
            <Counter date={this.state.Date} show="minutes" lang={this.state.Lang}/>
            <Counter date={this.state.Date} show="seconds" lang={this.state.Lang}/>
            <div className="CounterDesc">{language.Title[this.state.Lang]}</div>
            <br></br><br></br>
            <p>
              {language.SelectLang[this.state.Lang]}
            </p>
            <div className="SelectLang"><button onClick={this.SelectLang.bind(this)} value="en">English</button><button onClick={this.SelectLang.bind(this)} value="fa">Persian</button><button onClick={this.SelectLang.bind(this)} value="du">Dutch</button></div>
          </div>
    )
  }

  SelectLang(l){
      this.setState({Lang:l.target.value})

  }


}




export default App
