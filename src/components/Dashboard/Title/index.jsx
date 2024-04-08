import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';

function Title(props) {
    const {
        color = '#1F77FD'
    } = props

    return (
        <Typography component="h2" variant="h5" sx={{ color }} gutterBottom>
            {props.children}
        </Typography>
    );
}

Title.propTypes = {
    children: PropTypes.node,
};

export default Title;