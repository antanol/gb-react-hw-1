import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

function Contact(props){
    const { chats } = props;

    return (
        chats.map((chat, index)=>
            <Link to = {`/chat/${index}`} key={index} >
                <Card>
                    <CardHeader
                        avatar={         
                            <Skeleton variant="circle" width={40} height={40} />
                        }
                        
                        title={
                            chat.title
                        }
                        subheader={<Skeleton height={10} width="40%" />}
                    />
                </Card>
            </Link>
        )
    );
};

export default Contact;