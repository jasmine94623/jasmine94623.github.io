const initialChart = {
    type: 'bar',
    data:{
        labels: ['10/28','10/29','10/30','10/31','11/1','11/2','11/3'],
        datasets:[{ 
            type:'line',
            label: '溫度',
            yAxisID: 'y-axis-1',
            backgroundColor: 'gray',
            borderColor: 'gray',
            fill: false,
            data: [26,27,28,30,29,29,27],
        },{ 
            type:'line',
            label: '臨界值溫度',
            yAxisID: 'y-axis-1',
            backgroundColor: '#fc4757',
            borderColor: '#fc4757',
            fill: false,
            data: [25,25,25,25,25,25,25],
            pointStyle: 'dash',
            beginAtZero: true,
        },{
            type:'bar',
            label: '高度',
            yAxisID: 'y-axis-2',
            backgroundColor: 'green',
            borderColor: 'green',
            fill: false,
            data: [5,5,5,6,7,7,7],
            
        }]
    } ,
    options: {
        responsive: true,
        title: {
            display: true,
            text: '溫度與高度比較圖',
            fontSize: 20
        },
        tooltips: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel:{
                    display: true,
                    labelString:'時間',   
                },
                barPercentage: 0.2,
            }],
            yAxes: [{
                    id: 'y-axis-1',
                   gridLines: {
                   drawBorder: false,
                   },
                    display: true,
                    position: 'left',
                    scaleLabel:{
                        display: true,
                        labelString:'溫度 (℃)'
                    },
                    ticks: {
                        min: 0,
                        max: 40,
                        stepSize: 5
                    }
                },{
                    id: 'y-axis-2',
                    gridLines: {
                        color: 'green'
                    },
                    display: true,
                    position: 'right',
                    scaleLabel:{
                        display: true,
                        labelString:'公分 (cm)'
                    },
                    ticks: {
                        min: 0,
                        max: 30,
                        stepSize: 5
                    }
            }]
        }
    }
    
};

var ctx = document.getElementById("heyChart");
var myChart = new Chart(ctx, initialChart);                          
