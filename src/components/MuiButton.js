import React from 'react';
import { Box, Card, CardContent, CardHeader, Typography, makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import image2 from './images/icon-ellipsis.svg';
import { useStyles } from "./styles";

const CardBox = () => {
  const classes = useStyles();

  const cardsData = [
    { title: 'Work', hours: '32 hrs', lastWeekHours: 'Last week- 36hrs', backgroundColor: classes.outerCarda, imageSrc: image2 },
    { title: 'Play', hours: '10 hrs', lastWeekHours: 'Last week- 8hrs', backgroundColor: classes.outerCardb, imageSrc: image2 },
    { title: 'Study', hours: '4 hrs', lastWeekHours: 'Last week- 7hrs', backgroundColor: classes.outerCardc, imageSrc: image2 },
    { title: 'Exercise', hours: '4 hrs', lastWeekHours: 'Last week- 5hrs', backgroundColor: classes.outerCardd, imageSrc: image2 },
    { title: 'Social', hours: '3 hrs', lastWeekHours: 'Last week- 3hrs', backgroundColor: classes.outerCarde, imageSrc: image2 },
    { title: 'ShelfCare', hours: '2 hrs', lastWeekHours: 'Last week- 2hrs', backgroundColor: classes.outerCardf, imageSrc: image2 },
  ];

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card className={classes.outerCard2}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Outer Card
              </Typography>
              <Card className={classes.innerCard2}>
                <CardContent>
                  <Typography>hi</Typography>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </Grid>
        <Grid className={classes.grid2} item xs={6}>
          <Grid container spacing={2}>
            {cardsData.map((data, index) => (
              <Grid key={index} item xs={4}>
                <Card className={data.backgroundColor}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                     
                    </Typography>
                    <Card className={classes.innerCard}>
                      <CardContent>
                        <Typography className={classes.type2} gutterBottom variant="h6" component="div">
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <Typography variant="body1">{data.title}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <img className={classes.image2} src={data.imageSrc} alt="Image 2" />
                            </Grid>
                          </Grid>
                        </Typography>
                        <Typography className={classes.type3} gutterBottom variant="h3" component="div">
                          {data.hours}
                        </Typography>
                        <Typography className={classes.type2} gutterBottom variant="h6" component="div">
                          {data.lastWeekHours}
                        </Typography>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardBox;

