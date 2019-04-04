import React from 'react'
import Error from './Error'
import Loading from './Loading'
import NotLoaded from './NotLoaded'
import NoUsers from './NoUsers'
import Result from './Results';


const List = (props) => (
    <div>
        {
            props.isError ?
                <Error />
                :
                props.isLoading ?
                    <Loading />
                    :
                    !props.users ?
                        <NotLoaded />
                        :
                        props.users.length === 0 ?
                            <NoUsers />
                            :
                            <Result
                                data={props.users}
                            />
        }
    </div>
)

export default List