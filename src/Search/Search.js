import React from 'react'
import TextField from '@material-ui/core/TextField'

const Search = (props) => (
    <div>
        <TextField
            fullWidth={true}
            value={props.searchTerm}
            onChange={props.searchTermChangeHandler}
        />
    </div>

)
export default Search