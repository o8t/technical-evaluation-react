import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ClownCard from './ClownCard';
import { Clown } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '25ch',
      },
      flexGrow: 1,
    },
  }),
);

const ClownGallery: React.FC<any> = (props) => { // TODO: fix typing, too loose
  const classes = useStyles();
  const { creepyClownData } = props;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {
            Object.entries(creepyClownData).map(clownData => {
              const clownDataObject = JSON.parse('' + clownData[1]);
              const clown = new Clown(clownDataObject.id, clownDataObject.name, clownDataObject.posse,
                clownDataObject.age, clownDataObject.image);

              return <Grid key={clown.id} item>
                      <ClownCard key={clown.id} clown={clown} />
                     </Grid>
            })
          }
          </Grid>
      </Grid>
    </Grid>
  );
}

export default ClownGallery;
