import React from 'react';
import {connect} from 'react-redux';
import {getAllCandies} from '../reducers';
import Candy from './Candy';

class AllCandies extends React.Component {
  componentDidMount() {
    this.props.getAllCandies();
  }

  render() {
    return (
      <div>
        <h2 className="section-title">Candies</h2>
        <ul className="container">
          {this.props.candies.map(candy => (
            <div className="card" key={candy.id}>
              <Candy candy={candy} />
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  candies: state.allCandies
});

const mapDispatchToProps = (dispatch) => ({
  getAllCandies: () => dispatch(getAllCandies())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllCandies);
