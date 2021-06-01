import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Profile from './Profile/Profile';

function Router(){
    return (
        <Switch>
            <Route exact path='/' component={ Layout } />
            
            <Route exact
                    path='/chat/:chatId/'
                    render={ obj => <Layout
                            chatId={ Number(obj.match.params.chatId) }
                    />
                    } 
            />

            <Route exact
                    path='/profile/:userId/'
                    render={ obj => <Profile
                        userId={ Number(obj.match.params.userId) }
                    />
                    } 
            />
        </Switch>
    )
}

export default Router;