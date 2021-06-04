import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, CardHeader } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

function Contact(props){
    const { chats } = props;
    const users = useSelector( globalState => globalState.profile.users );

    console.log(chats);
    console.log(users)
    return (
        Object.keys(chats).map((chatId, index)=>
            <Link to = {`/chat/${chatId}`} key={index} >
                <Card>
                    <CardHeader
                        avatar={         
                            <Skeleton variant="circle" width={40} height={40} />
                        }
                        
                        title={
                            users[chats[chatId].userId].name
                        }
                        subheader={<Skeleton height={10} width="40%" />}
                    />
                </Card>
            </Link>
        )
    );
};

export default Contact;