import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import {connect} from 'react-redux';
import {getSingleCandy, increaseQuantity, decreaseQuantity} from '../reducers'

const styles = {
  card: {
    maxWidth: 500,
  },
  media: {
    objectFit: 'cover',
  },
};

class SingleCandy extends React.Component {
  constructor(props) {
    super(props);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  componentDidMount() {
    this.props.getSingleCandy(this.props.match.params.id);
  }

  increase() {
    this.props.increaseQuantity(this.props.match.params.id);
  }

  decrease() {
    this.props.decreaseQuantity(this.props.match.params.id);
  }

  render() {
    const {candy, classes} = this.props;
    const disabledIncrease = (candy.quantity === 10);
    const disabledDecrease = (candy.quantity === 0);
    return (
      <div className="box-container">
        <Card className={classes.card}>
          <CardMedia
            component="img"
            alt={`${candy.name} candy image`}
            className={classes.media}
            height="300"
            image={candy.imageUrl}
            title={`${candy.name} candy image`}
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {candy.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {candy.description}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Quantity: {candy.quantity}
              </Typography>
            </CardContent>
          </div>
          <CardActions>
            <Button size="small" color="primary" disabled={disabledDecrease} onClick={this.decrease}>
              Decrease
            </Button>
            <Button size="small" color="primary" disabled={disabledIncrease} onClick={this.increase}>
              Increase
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  candy: state.singleCandy
});

const mapDispatchToProps = (dispatch) => ({
  getSingleCandy: (id) => dispatch(getSingleCandy(id)),
  increaseQuantity: (id) => dispatch(increaseQuantity(id)),
  decreaseQuantity: (id) => dispatch(decreaseQuantity(id))
});

SingleCandy.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SingleCandy));



{/* <div>
        <div>
          <img src={imageUrl} />
          <p>{name}</p>
          <p>{description}</p>
          <p>{quantity}</p>
        </div>
        <button type="button" disabled={disabledIncrease} onClick={this.increase}>Increase Quantity</button>
        <button type="button" disabled={disabledDecrease} onClick={this.decrease}>Decrease Quantity</button>
      </div> */}
