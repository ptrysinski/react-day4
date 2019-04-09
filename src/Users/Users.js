import React from 'react'
import List from '../List';
import Search from '../Search/Search';

class Users extends React.Component {
    state = {
        users: null,
        isLoading: false,
        isError: false,
        searchTerm: '',
        searchEmail: ''
    }

    componentDidMount() {
        this.setState({ isLoading: true })

        fetch('https://randomuser.me/api?results=10')
            .then(response => response.json())
            .then(data => this.setState({ users: data.results }))
            .catch(() => this.setState({ isError: true }))
            .finally(() => this.setState({ isLoading: false }))
    }

    searchTermChangeHandler = (event) => this.setState({
        searchTerm: event.target.value,
    })

    searchEmailChangeHandler = (event) => this.setState({
        searchEmail: event.target.value,
    })

    render() {

        const filteredUsers = (
            this.state.users &&
            this.state.users.filter &&
            this.state.users.filter(
                user => {
                    const name = (user.name.first + user.name.last).toLowerCase()
                    const email = user.email
                    const searchTerm = this.state.searchTerm.toLowerCase()
                    const searchEmail = this.state.searchEmail
                    const searchTermWithoutSpaces = searchTerm.replace(/ /g, '')
                    const searchTermWithoutDiacritics = searchTermWithoutSpaces.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                    
                    return(
                        name.includes(searchTermWithoutDiacritics) && email.includes(searchEmail)
                        )
                        
                }
            )
        ) 

        return (
            <div>
                <Search
                    searchTermChangeHandler={this.searchTermChangeHandler}
                    searchEmailChangeHandler={this.searchEmailChangeHandler} 
                    searchTerm={this.state.searchTerm}
                    searchEmail={this.searchEmail}
                />
                <List
                    users={filteredUsers}
                    isLoading={this.state.isLoading}
                    isError={this.state.isError}
                />
            </div>
        )
    }

}

export default Users