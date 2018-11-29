import React, { Component } from 'react';
import JournalSearchForm from './JounralSearchForm';
import JournalSearchDisplay from './JournalSearchDisplay';

class JounralSearch extends Component {
  state={
    results: null,
    selectedEntry: null
  }

  setSearchResults = (entries) => {
    this.setState({
      results: entries
    })
  }

  setSelectedEntry = (entry) => {
    this.setState({
      selectedEntry: entry
    })
  }


  render (){
    return(
      <div className="search container">

          <h3 className="page-header">
            See what other people are writing about:
          </h3>


        <JournalSearchForm user={this.props.user} setSearchResults={this.setSearchResults}/>
        <JournalSearchDisplay results={this.state.results} selectedEntry={this.state.selectedEntry} setSelectedEntry={this.setSelectedEntry}/>
    </div>
    )
  }
}

export default JounralSearch
