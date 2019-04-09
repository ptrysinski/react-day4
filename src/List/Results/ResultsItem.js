import React from 'react'

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { Avatar } from '@material-ui/core';

const ResultsItem = ({ user }) => {

    const name = user.name.first + ' ' + user.name.last
    const email = user.email

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
        <ListItemText
            primary = {email}
            secondary = {''}
        />
        </ListItem>
    )
}

export default ResultsItem