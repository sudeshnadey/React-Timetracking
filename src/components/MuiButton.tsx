import React from 'react';
import { Box, Card, CardContent, CardHeader, Typography, makeStyles } from '@material-ui/core';
import { useStyles } from "./styles";
import { Grid } from '@material-ui/core';
import logoimg from './images/icon-exercise.svg';
import image2 from './images/icon-ellipsis.svg';

const CardBox = () => {
  const classes = useStyles();



  return (
    <div>
     <Grid container spacing={2}>
    <Grid item xs={6}>
    <Card className={classes.outerCard2}>
<CardContent >
  <Typography   variant="h5" gutterBottom>
    Outer Card
  </Typography>
  <Card className={classes.innerCard2}>
    <CardContent>
      <Typography >
      hi
      </Typography>
    </CardContent>
  </Card>
</CardContent>
</Card>
    </Grid>
<Grid className={classes.grid2} item xs={6}>
<Grid container spacing={2}>
  <Grid item xs={4}>
   <Card className={classes.outerCarda}>
<CardContent>
  <Typography variant="h5" gutterBottom>

  
  </Typography>
  <Card className={classes.innerCard}>
    <CardContent>
    <Typography className={classes.type2} gutterBottom variant="h6" component="div">
    <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1">Work</Typography>
            </Grid>
            <Grid item xs={6}>
            <img className={classes.image2} src={image2} alt="Image 2" />
            </Grid>
          </Grid>
          </Typography>
    <Typography className={classes.type3}gutterBottom variant="h3" component="div">
           32 hrs
          </Typography>
          <Typography className={classes.type2} gutterBottom variant="h6" component="div">
          Last week- 36hrs
          </Typography>
    
    </CardContent>
  </Card>
</CardContent>
</Card>
        </Grid>
        <Grid item xs={4}>
   <Card className={classes.outerCardb}>
<CardContent>
  <Typography variant="h5" gutterBottom>

  
  </Typography>
  <Card className={classes.innerCard}>
    <CardContent>
    <Typography className={classes.type2} gutterBottom variant="h6" component="div">
    <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1">Play</Typography>
            </Grid>
            <Grid item xs={6}>
            <img className={classes.image2} src={image2} alt="Image 2" />
            </Grid>
          </Grid>
          </Typography>
    <Typography className={classes.type3}gutterBottom variant="h3" component="div">
           10 hrs
          </Typography>
          <Typography className={classes.type2} gutterBottom variant="h6" component="div">
          Last week- 8hrs
          </Typography>
    
    </CardContent>
  </Card>
</CardContent>
</Card>
        </Grid>
        <Grid item xs={4}>
   <Card className={classes.outerCardc}>
<CardContent>
  <Typography variant="h5" gutterBottom>

  
  </Typography>
  <Card className={classes.innerCard}>
    <CardContent>
    <Typography className={classes.type2} gutterBottom variant="h6" component="div">
    <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1">Study</Typography>
            </Grid>
            <Grid item xs={6}>
            <img className={classes.image2} src={image2} alt="Image 2" />
            </Grid>
          </Grid>
          </Typography>
    <Typography className={classes.type3}gutterBottom variant="h3" component="div">
           4 hrs
          </Typography>
          <Typography className={classes.type2} gutterBottom variant="h6" component="div">
          Last week- 7hrs
          </Typography>
    
    </CardContent>
  </Card>
</CardContent>
</Card>
        </Grid>
        <Grid item xs={4}>
   <Card className={classes.outerCardd}>
<CardContent>
  <Typography variant="h5" gutterBottom>

  
  </Typography>
  <Card className={classes.innerCard}>
    <CardContent>
    <Typography className={classes.type2} gutterBottom variant="h6" component="div">
    <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1">Exercise</Typography>
            </Grid>
            <Grid item xs={6}>
            <img className={classes.image2} src={image2} alt="Image 2" />
            </Grid>
          </Grid>
          </Typography>
    <Typography className={classes.type3}gutterBottom variant="h3" component="div">
           4 hrs
          </Typography>
          <Typography className={classes.type2} gutterBottom variant="h6" component="div">
          Last week- 5hrs
          </Typography>
    
    </CardContent>
  </Card>
</CardContent>
</Card>
        </Grid>
        <Grid item xs={4}>
   <Card className={classes.outerCarde}>
<CardContent>
  <Typography variant="h5" gutterBottom>

  
  </Typography>
  <Card className={classes.innerCard}>
    <CardContent>
    <Typography className={classes.type2} gutterBottom variant="h6" component="div">
    <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1">Social</Typography>
            </Grid>
            <Grid item xs={6}>
            <img className={classes.image2} src={image2} alt="Image 2" />
            </Grid>
          </Grid>
          </Typography>
    <Typography className={classes.type3}gutterBottom variant="h3" component="div">
           5 hrs
          </Typography>
          <Typography className={classes.type2} gutterBottom variant="h6" component="div">
          Last week- 10hrs
          </Typography>
    
    </CardContent>
  </Card>
</CardContent>
</Card>
        </Grid>
        <Grid item xs={4}>
   <Card className={classes.outerCardf}>
<CardContent>
  <Typography variant="h5" gutterBottom>

  
  </Typography>
  <Card className={classes.innerCard}>
    <CardContent>
    <Typography className={classes.type2} gutterBottom variant="h6" component="div">
    <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1">Self Care</Typography>
            </Grid>
            <Grid item xs={6}>
            <img className={classes.image2} src={image2} alt="Image 2" />
            </Grid>
          </Grid>
          </Typography>
    <Typography className={classes.type3}gutterBottom variant="h3" component="div">
           2 hrs
          </Typography>
          <Typography className={classes.type2} gutterBottom variant="h6" component="div">
          Last week- 2hrs
          </Typography>
    
    </CardContent>
  </Card>
</CardContent>
</Card>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
 </div>
  );
};

export default CardBox;
