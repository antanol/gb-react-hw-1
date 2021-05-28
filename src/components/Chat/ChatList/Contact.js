import React from 'react';
import { Card, CardHeader } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

function Contact(){
    return (
        <Card>
            <CardHeader
                avatar={         
                    <Skeleton variant="circle" width={40} height={40} />
                }
                
                title={
                    <Skeleton height={10} width="80%" style={{ marginBottom: 6 }} />
                }
                subheader={<Skeleton height={10} width="40%" />}
            />
        </Card>
    );
};

export default Contact;