import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles';

// import classes from '*.module.css';
const Product = ({product, onAddToCart}) => {
    const classes = useStyles()

    return (  
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.src} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography> 
                </div>
                <Typography variant="body2" color="textSecondary">
                        {product.description}
                    </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id,1)}>
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    );
}
 
export default Product;