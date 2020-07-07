import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 500,
  },
  media: {
    objectFit: 'cover',
  },
};

const Candy = (props) => {
  const {candy, classes} = props;

  return (
    <Link to={`/candies/${candy.id}`}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={`${candy.name} candy image`}
            className={classes.media}
            height="140"
            image={candy.imageUrl}
            title={`${candy.name} candy image`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {candy.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

Candy.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Candy);
