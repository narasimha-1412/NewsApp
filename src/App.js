import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  // c='John'
  pageSize=9
  state={
    progress:0
  }
  

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        {/* Hello {this.c} */}

      <Router>

          <Navbar/>

          <LoadingBar
            height={2}
            color='#f11946'
            progress={this.state.progress}
          />

          <Routes>
              <Route path='/' element={<News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="general"/>} exact={true} />
              <Route path='/sports' element={<News setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country="in" category="sports"/>} exact={true} />
              <Route path='/business' element={<News setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country="in" category="business"/>} exact={true} />
              <Route path='/entertainment' element={<News setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>} exact={true} />
              <Route path='/health' element={<News setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country="in" category="health"/>} exact={true} />
              <Route path='/science' element={<News setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country="in" category="science"/>} exact={true} />
              <Route path='/technology' element={<News setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country="in" category="technology"/>} exact={true} />
          </Routes>

      </Router>

      </div>
    )
  }
}


//News key="" Api key:  165ea706605c4183a44a3cc42b5168ef