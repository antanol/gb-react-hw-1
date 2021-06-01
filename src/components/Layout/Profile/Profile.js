import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography} from '@material-ui/core';

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
                        <Typography variant='h4'>
                            Мои диалоги
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            
            <Container className='main'>
                <div className='left-column'>
                    <img src="http://placehold.it/200" />
                </div>
                <Typography variant='h4'>
                    Здесь будет имя пользователя с id = { userId }
                </Typography>
            </Container>
        </Container>
    )
};

export default Profile;