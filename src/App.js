// App.js
import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Cards from './containers/Cards';
import Filters from './containers/Filter';
import Loader from './containers/Loader';
import './index.css';
import * as actionCreators from './services'
let filter = ['2006', '2007', '2008', '2009'];
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      spaceData: null,
      filterType: { lyActive: '' }, isBack: null
    };
  }


  /**
   * the get the current path and used for routing and active class 
   */
  getPathName = () => this.props.history.location.pathname.substr(1)

  componentDidUpdate(prevtProps, prevState) {
    const { match, spaceData } = this.props;
    const pathname = this.getPathName();
    if (prevtProps.match !== match) {
      if (match.url !== '/') {
        this.setState({ filterType: { lyActive: pathname }, spaceData });
        if (prevState.isBack === this.state.isBack) {
          this.props.filterBy(pathname);
        }
      }
    }
  }


  componentDidMount() {
    const { match, history, spaceData } = this.props;
    const pathname = this.getPathName();
    filter = filter !== null ? JSON.parse(localStorage.getItem('filterData')) : [];    //global array
    if (match.url !== '/') {
      this.props.filterBy(pathname);
      this.setState({ filterType: { lyActive: pathname }, isBack: history.location, spaceData });
    } else {
      this.props.fetchAllData();
    }
  }

  getRecords = (e, value) => {
    const { history } = this.props;
    e.preventDefault();
    const elem = this.getPathName(); //to take the url path and split /
    this.props.filterBy(elem);
    this.setState({ filterType: { lyActive: elem }, isBack: history.location });
  }

  render() {
    const { spaceData, loading, filterData } = this.props;
    const records = filterData && filterData.length ? filterData : filter;
    return (
      <main>
        <div className='container'>
          <header><h1>SpaceX Launch Programs</h1></header>
          <div className='row'>
            <Filters
              records={records}
              filterBy={this.getRecords}
              activeClass={this.state.filterType}
              history={this.props.history.location}
            />
            {loading ? <Loader /> :
              <>
                <Cards data={spaceData} loading={loading} />
              </>
            }
          </div>
        </div>
        <footer>
          <h1>Developed By : Anshuk Sharma</h1>
        </footer>
      </main>
    )
  }
}

App.propTypes = {};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(actionCreators, dispatch)
  };
};
const mapStateToProps = (state) => {
  const { spaceList, loading, filterData, error } = state.SpaceReducer || {}
  return {
    spaceData: spaceList,
    loading,
    filterData,
    error
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);