import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as cardActions from "../../redux/actions/cardActions";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SortCardContainer extends Component {

    handleSortCardChange = event => {
        this.props.actions.sortCardsBy(event.target.value);
    };

    render() {
        const { classes, sortCardsBy } = this.props;

        return (
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="sort-cards">Sort Cards By:</InputLabel>
                    <Select
                        value={sortCardsBy}
                        onChange={this.handleSortCardChange}
                        input={<Input name="sortBy" id="sort-cards" />}
                    >
                        <MenuItem value="updated">Last updated</MenuItem>
                        <MenuItem value="created">Last created</MenuItem>
                        <MenuItem value="title">Title</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
    }
}

const mapStateToProps = ({ cardReducer }) => {
    return {
        sortCardsBy: cardReducer.sortCardsBy,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(cardActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SortCardContainer));