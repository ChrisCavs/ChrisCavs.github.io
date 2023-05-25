import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Star } from '@mui/icons-material';

const CardWrapper = (props) => (
    <Card variant="outlined" sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '320px',
        marginBottom: '20px',
        height: props.image ? '300px' : '150px',
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
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '95%',
        }}>
            <CardActions>
                <Button href={props.gitUrl} target='_blank' size="small">GitHub</Button>
                {props.demoUrl && <Button href={props.demoUrl} target='_blank' size="small">Demo</Button>}
            </CardActions>
            {props.stars && <Box sx={{
                display: 'flex',
                alignItems: 'center',
                width: '60px',
                paddingBottom: '3px',
            }}>
                <Star sx={{ marginRight: '4px', color: 'rgba(0, 0, 0, 0.54)'}} />
                <Typography variant='body1'>{props.stars}</Typography>
            </Box>}
        </Box>
    </Card>
)

export default CardWrapper