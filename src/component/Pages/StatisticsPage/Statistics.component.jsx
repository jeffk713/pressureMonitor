import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Container from '../../Container/Container.component';
import MeasurementGauge from '../../Gauge/Gauge.component';
import StatChart from '../../Statistic-chart/Statistic-chart.component';
import NoData from '../../No-data/No-data.component';

import { selectStatData } from '../../../redux/data/data.selectors';

const StatisticsPage = ({ statData }) => (
  <Container>
    {
      isNaN(statData.avgSys) || statData.avgSys === null || statData.avgSys === '' ? 
      <NoData />
      : 
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
        <MeasurementGauge value={statData.avgSys} label='AVG.SYS' color={'#FF6384'} />
        <MeasurementGauge value={statData.avgDia} label='AVG.DIA' color={'#36A2EB'} />
        <MeasurementGauge value={statData.avgBpm} label='AVG.BPM' color={'#FFCE56'} />
        </div>
        <StatChart {...statData} />
      </div>
    }
    
  </Container>
)

const mapStateToProps = createStructuredSelector({
  statData: selectStatData
})

export default connect(mapStateToProps)(StatisticsPage);