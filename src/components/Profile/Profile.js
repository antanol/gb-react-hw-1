import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography} from '@material-ui/core';

import './Profile.scss';

function Profile(props){
    let { userId } = props;
    if (!userId){
        userId = 0;
    }

    return (
        <Container maxWidth='md' className='layout' style={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <AppBar position='static'>
                <Toolbar>
                    <Link to = {`/`} >
                        <Typography variant='h6'>
                            Мои диалоги
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            
            <Container className='main'>
                <div className='left-column'>
                    <img src="http://placehold.it/250" />
                </div>
                <div className='info'>
                    <Typography variant='h6'>
                        Допустим, Громов (id = { userId })
                    </Typography>
                </div>
            </Container>
        </Container>
    )
};

export default Profile;