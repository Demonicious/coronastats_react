export default function makeLineChart(lines) {
    let data = {
            labels: [],
            datasets: [
                {
                    data: [],
                    label: 'New Deaths',
                    pointBorderWidth: 3,
                    // backgroundColor: 'rgba(255, 65, 108, 0.6)',
                    borderColor: '#c5163e'
                },
                {
                    data: [],
                    label: 'Critical Cases',
                    pointBorderWidth: 3,
                    // backgroundColor: 'rgba(255, 201, 40, 0.6)',
                    borderColor: '#c5970d',
                },
                {
                    data: [],
                    label: 'New Cases',
                    pointBorderWidth: 3,
                    // backgroundColor: 'rgba(172, 119, 249, 0.6)',
                    borderColor: '#732ed8',
                },
            ]
        }
        const monthNames = ["Jan", "Feb", "Mar", "April", "May", "June",
        "July", "Aug", "Sept", "Oct", "Nov", "Dec"
        ];
        const indexes = Object.keys(lines).reverse();
        indexes.forEach((i) => {
            let dataset = lines[i];
            let date = new Date(parseInt(dataset.time.stamp) * 1000);
            data.datasets[2]['data'].push({
                t: date,
                y: dataset.new_cases
            });
            data.datasets[1]['data'].push({
                t: date,
                y: dataset.critical
            });
            data.datasets[0]['data'].push({
                t: date,
                y: dataset.new_deaths
            });
            data.labels.push(`${monthNames[date.getMonth()]} ${date.getDate()}`);
        })
        let options = {
            legend: {
                display: true,
                labels: {
                    boxWidth: 12,
                    fontColor: '#b3b3f4',
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: '#b3b3f4',
                    },
                }],
                xAxes: [{
                    ticks: {
                        fontColor: '#b3b3f4',
                    },
                }]
            },
            maintainAspectRatio: false,
            responsive: true,
        };

    return [data, options];
}