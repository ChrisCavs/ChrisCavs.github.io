import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { MobileContext } from '../App';

const CardWrapper = (props) => {
    const isMobile = useContext(MobileContext)

    if (isMobile && props.invisible) return null

    return (
        <Card variant="outlined" sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: props.image ? '350px' : '300px',
            height: props.image ? '300px' : '150px',
            marginBottom: '20px',
            visibility: props.invisible ? 'hidden' : 'visible',
        }}>
            {props.image && <CardMedia
                image={props.image.image}
                title={props.image.title}
                sx={{height: '150px'}}
            />}
            <CardContent>
                <Typography variant="h6" sx={{marginBottom: '10px'}}>{props.title}</Typography>
                <Typography variant="body1">{props.body}</Typography>
            </CardContent>
            <CardActions>
                <Button href={props.gitUrl} target='_blank' size="small">GitHub</Button>
                {props.demoUrl && <Button href={props.demoUrl} target='_blank' size="small">Demo</Button>}
            </CardActions>
        </Card>
    )
}

export default CardWrapper