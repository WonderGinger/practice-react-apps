import React from 'react';
import { 
  Container, 
  Card, 
  CardHeader, 
  CardContent, 
  CardMedia, 
  CardActionArea,
  CardActions, 
  Avatar, 
  Typography 
} from '@material-ui/core';

const SocialCard = ({ data, index }) => {
  return (
    <Container maxWidth="sm" style={styles.container}>
      <Card>
        <CardHeader
          style={styles.header}
          avatar={ <Avatar style={styles.avatar} alt={data.name} src={data.profileImg}/> }
          title={data.name}
          subheader={'@' + data.handle + " · " + data.date}
        />
        <CardContent style={styles.body}>
          <Typography variant="body1" color="textPrimary" component="p">{data.body}</Typography>
        </CardContent>
        <CardActionArea>
          <CardMedia
            style={styles.media}
            image={data.image}
            title="Shared image"
          />
        </CardActionArea>
      </Card>
    </Container>

  )
}

const styles = {
  container: {
    margin: 15,
  },
  media: {
    height: 140
  },
  avatar: {
    width: 60,
    height: 60,
  },
  header: {
    textAlign: "left",
  },
  body: {
    textAlign: "left",
  }
}

export default SocialCard
