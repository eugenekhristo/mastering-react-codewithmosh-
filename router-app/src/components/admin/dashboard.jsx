import React from 'react';
import Posts from './posts';
import Users from './users';
import { Route, Link } from 'react-router-dom';

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link to="/admin/posts">Posts</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
      </ul>
      <Route path="/admin/posts" component={Posts} />
      <Route path="/admin/users" component={Users} />
    </div>
  );
};

export default Dashboard;
