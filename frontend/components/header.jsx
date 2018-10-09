import React from 'react';
import { Route, Redirect, Switch, Link,HashRouter } from 'react-router-dom';
import {AuthRoute} from '../util/auth_util';

const Header = ({store}) => (
 <div className="header-main">
   <h1>Fliquor</h1>
</div>
);

export default Header;
