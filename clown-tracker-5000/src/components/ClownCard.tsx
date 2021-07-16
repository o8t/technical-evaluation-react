import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia } from "@material-ui/core";

import CreateEditModal from "./CreateEditModal";
import { Clown } from "../types";
import * as CRUD from "../utils/CRUD";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '40ch',
      },
      textAlign: 'center',
    },
    media: {
      height: '40ch',
      width: '40ch',
    },
    center: {
      justifyContent: 'center',
      margin: 'auto',
    },
  }),
);

const ClownCard: React.FC<{ clown: Clown }> = (props) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const classes = useStyles();
  const { clown } = props;

  return (
      <Grid container justifyContent="center" spacing={0}>
        <Card className={classes.root}>
          <CardActionArea className={classes.center}>
            <CardMedia
              onClick={() => setConfirmOpen(true)}
              component="img"
              className={classes.media}
              image={clown.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {clown.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Age: {clown.age}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Posse: {clown.posse}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.center} >
            <CreateEditModal
              existingClown={clown}
              submitAction={CRUD.updateClown}
              open={confirmOpen}
              setOpen={setConfirmOpen}
              promptTitle={"Edit clown details"}
            />
            <Button size="small" color="primary" onClick={() => setConfirmOpen(true)}>
              Edit
            </Button>
            <Button size="small" color="primary" onClick={() => CRUD.deleteClown(clown.id)}>
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
  );
}

export default ClownCard;
