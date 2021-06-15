import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
    messageHeader: {
        padding: '10px 10px 0',
    },
    message: {
        padding: '0',
        paddingLeft: '60px'
    },
    unreadChat:{
        backgroundColor: 'rgb(210, 225, 245)'
    }
});

function Contact(props){
    const { chats } = props;
    const users = useSelector( globalState => globalState.profile.users );
    
    const classes = useStyles();

    return (
        Object.keys(chats).map((chatId, index)=>
            <Link to = {`/chat/${chatId}`} key={index} >
                <Card 
                    className = { chats[chatId].unread ? classes.unreadChat : '' }
                >
                    <CardHeader
                        avatar={         
                            <Skeleton variant="circle" width={40} height={40} />
                        }
                        
                        title={
                            users[chats[chatId].userId]?.name ? users[chats[chatId].userId].name : 'Пользователь не найден'
                        }

                        subheader={
                            (chats[chatId].messages.length > 0) ? chats[chatId].messages[chats[chatId].messages.length-1].time : ""
                        }

                        className = {classes.messageHeader}
                    />
                    <CardContent
                        className = {classes.message}
                    >
                        <Typography variant="body2" color="textSecondary">
                            {
                                (chats[chatId].messages.length > 0) ? chats[chatId].messages[chats[chatId].messages.length-1].text : ""
                            }
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        )
    );
};

export default Contact;