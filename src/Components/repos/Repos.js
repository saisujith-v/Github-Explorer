import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';
import { Spinner } from '../Layouts/Spinner';

const Repos = ({repos,repoloading}) => {
    if(repoloading)
    {
        return <Spinner/>
    }
  return <div>
    <h2>Top Repositories</h2>
    {repos.map((repo) => <RepoItem repo={repo} key={repo.id} />)}
  </div>
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;