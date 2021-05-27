import React,{useContext} from 'react'
import { Spinner } from '../Components/Layouts/Spinner';
import UserItem from './UserItem';
import PropTypes from 'prop-types'
import GithubContext from '../Context/github/githubContext';

const Users =  () => {
    const githubContext = useContext(GithubContext);
    const {loading,users}= githubContext;
    if(loading)
    {
        return <Spinner/>
    }else{
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        );
    }


}
Users.propTypes={
    users:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired
}
const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'

}
export default Users;