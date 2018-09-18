import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Tooltip from '@material-ui/core/Tooltip';
import Info from '@material-ui/icons/Info';

const Charts = (props) =>  (
    <React.Fragment>
        <Tooltip
            title="Sorry this isn't showing true representation of label counts. Simply didn't have enough time. Hopefully it give the general idea of where I was going."
            placement="bottom"
        >
            <Info style={{ float: 'left', margin: '5px' }} color="disabled" />
        </Tooltip>
        <Doughnut
            data={{
                datasets: [{
                    data: [19, 3, 5, 2, 10],
                    backgroundColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    label: 'Labels'
                }],
                labels: [
                    'default',
                    'work',
                    'personal',
                    'rockets',
                    'Other'
                ]
            }}
            options={{
                legend: {
                    position: 'right'
                }
            }}
        />
    </React.Fragment>
);

export default Charts;