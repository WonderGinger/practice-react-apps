import React from 'react'
import { Card, CardContent } from '@material-ui/core';
import Purple from '@material-ui/core/colors/purple';

const Post = ({ post, postIndex }) => {
    return (
        <Card style={styles.post}>
            <CardContent>{post.body}</CardContent>
        </Card>
    )
}

const styles = {
    post: {
        padding: '5px',
        backgroundColor: '#ffffff',
    }
};

export default Post
