import React from 'react'
import './InfoBox.css'
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  return (
    <Card className="infoBox">
      <CardContent>
        <Typography className="infoBox_title" color="textPrimary"><h3>{title}</h3></Typography>
        <br />
        <hr />
        <br />
        <h3 className="infoBox_today">Today</h3>
        <h2 className="infoBox_cases infoBox_today">{cases}</h2>
        <br />
        <hr />
        <br />
        <Typography><h3 className="infoBox_total">Total</h3></Typography>
        <Typography className="infoBox_total">{total}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default InfoBox
