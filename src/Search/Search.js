import React from 'react'
import TextField from '@material-ui/core/TextField'

const Search = (props) => (
    <div>
        <TextField
            placeholder={'Szukaj po imieniu lub nazwisku'}
            fullWidth={true}
            value={props.searchTerm}
            onChange={props.searchTermChangeHandler}
        />
        <TextField
            placeholder={'Szukaj po adresie email'}
            fullWidth={true}
            value={props.searchEmail}
            onChange={props.searchEmailChangeHandler}
        />
    </div>

)
export default Search