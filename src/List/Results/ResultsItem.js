import React from 'react'

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { Avatar } from '@material-ui/core';

const ResultsItem = ({ user }) => {

    const name = user.name.first + ' ' + user.name.last

    return (
        <ListItem
            alignItems="flex-start"
        >
        <ListItemAvatar>
            <Avatar
                alt = {name}
                src = {user.picture.medium}
            />
        </ListItemAvatar>
        <ListItemText
            primary = {name}
            secondary = {''}
        />
        </ListItem>
    )
}

export default ResultsItem