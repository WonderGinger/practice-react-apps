import React from 'react';
import Post from './Post';
import { Card, CardContent, Box, Typography } from '@material-ui/core';
import Purple from '@material-ui/core/colors/purple';
import ActionButton from './ActionButton';

const Lane = ({ lane, laneIndex, laneCount, onAddPost }) => {
    return (
        <Card style={styles.lane}>
            <CardContent>

                <Typography>
                    <Box textAlign="left" fontWeight={600} m={1}>{lane.name}</Box>
                </Typography>

                {lane.posts.map((post, postIndex) => (
                    <Post 
                        key={postIndex}
                        post={post}
                        postIndex={postIndex}
                        postDraggable={true}
                    />
                ))}
                <ActionButton/>
            </CardContent>
        </Card>
    )
};

const styles = {
    lane: {
        flexGrow: 1,
        flexShrink: 1,
        margin: '15px',
        backgroundColor: Purple[50],
    },
};

export default Lane
