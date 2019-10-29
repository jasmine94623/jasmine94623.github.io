//which sensor
function op4(event){
    var choose4 = event.currentTarget;
    console.log(choose4.innerText);
    var pstatus = status[4];
    if(status[0]=="分析生長狀態"){
        if(choose4.innerText=="植物高度")
            return;
    }
    if(choose4.innerText != status[4]){
        status[4] = choose4.innerText;
        //先處理CSS
        var othchooses = document.querySelectorAll('#sel_sen p');
        for(var othchoose of othchooses){
            if((status[0] == "分析生長狀態") && (othchoose.innerText=="植物高度")) continue;            
            othchoose.style.backgroundColor="#fff";
            othchoose.style.color="black";
        }
        choose4.style.backgroundColor="#59be57";
        choose4.style.color="#fff";
        //後處理圖表
        //分析
        if(status[0] == "分析生長狀態"){
            // myChart.options.scales.yAxes[1].display = true;
            if(status[4]=="環境溫度"){
                // myChart.data.datasets = ana_temp_datasets;
                myChart.data.datasets[1].label = '臨界值溫度';
                myChart.data.datasets[1].data = [25,25,25,25,25,25,25];
                myChart.data.datasets[0].label = '溫度';
                myChart.data.datasets[0].data = [26,27,28,30,29,29,27];
                //不知道為毛不行...
                // myChart.options = ana_temp_options;
                myChart.options.title.text = '溫度與高度比較圖';
                myChart.options.scales.yAxes[0].scaleLabel.labelString = '溫度 (℃)';
                myChart.options.scales.yAxes[0].ticks.max = 40;
                myChart.options.scales.yAxes[0].ticks.stepSize = 5;
            }
            if(status[4]=="環境濕度"){
                //myChart.data.datasets = ana_wet_datasets;
                myChart.data.datasets[1].label = '臨界值濕度';
                myChart.data.datasets[1].data = [40,40,40,40,40,40,40];
                myChart.data.datasets[0].label = '濕度';
                myChart.data.datasets[0].data = [30,50,44,42,38,39,37];

                myChart.options.title.text = '濕度與高度比較圖';
                myChart.options.scales.yAxes[0].scaleLabel.labelString = '濕度 (%)';
                myChart.options.scales.yAxes[0].ticks.max = 100;
                myChart.options.scales.yAxes[0].ticks.stepSize = 20;
            }
            if(status[4]=="土壤濕度"){
                myChart.data.datasets[1].label = '臨界值土壤濕度';
                myChart.data.datasets[1].data = [80,80,80,80,80,80,80];
                myChart.data.datasets[0].label = '濕度';
                myChart.data.datasets[0].data = [70,86,78,88,87,60,70];

                myChart.options.title.text = '土壤濕度與高度比較圖';
                myChart.options.scales.yAxes[0].scaleLabel.labelString = '濕度 (%)';
                myChart.options.scales.yAxes[0].ticks.max = 100;
                myChart.options.scales.yAxes[0].ticks.stepSize = 20;
            }
            if(status[4]=="亮度"){
                myChart.data.datasets[1].label = '臨界值亮度';
                myChart.data.datasets[1].data = [800,800,800,800,800,800,800];
                myChart.data.datasets[0].label = '亮度';
                myChart.data.datasets[0].data = [670,810,526,700,756,852,862];

                myChart.options.title.text = '亮度與高度比較圖';
                myChart.options.scales.yAxes[0].scaleLabel.labelString = '流明 (lux))';
                myChart.options.scales.yAxes[0].ticks.max = 1000;
                myChart.options.scales.yAxes[0].ticks.stepSize = 100;
            }
        }
        //單純顯示
        else{
            // myChart.options.scales.yAxes[1].display = false;
            if(status[4]=="植物高度"){
                myChart.data.datasets.pop();
            }
            else{
                if(pstatus == "植物高度"){
                    myChart.data.datasets.push({ 
                        type:'line',
                        label: '臨界值溫度',
                        yAxisID: 'y-axis-1',
                        backgroundColor: '#fc4757',
                        borderColor: '#fc4757',
                        fill: false,
                        data: [25,25,25,25,25,25,25],
                        pointStyle: 'dash',
                        beginAtZero: true,
                    });
                }
            }
            if(status[4]=="環境溫度"){
                // myChart.data.datasets = ana_temp_datasets;   
                myChart.data.datasets[1].label = '臨界值溫度';
                myChart.data.datasets[1].data = week_top_temp;    
                myChart.data.datasets[0].label = '溫度';
                myChart.data.datasets[0].data = week_temp;
                //不知道為毛不行...
                // myChart.options = ana_temp_options;
                myChart.options.title.text = '本周環境溫度';
                myChart.options.scales.yAxes[0].scaleLabel.labelString = '溫度 (℃)';
                myChart.options.scales.yAxes[0].ticks.max = 40;
                myChart.options.scales.yAxes[0].ticks.stepSize = 5;
            }
            if(status[4]=="環境濕度"){
                //myChart.data.datasets = ana_wet_datasets;
                myChart.data.datasets[1].label = '臨界值濕度';
                myChart.data.datasets[1].data = [40,40,40,40,40,40,40];
                myChart.data.datasets[0].label = '濕度';
                myChart.data.datasets[0].data = [30,50,44,42,38,39,37];

                myChart.options.title.text = '本周環境濕度';
                myChart.options.scales.yAxes[0].scaleLabel.labelString = '濕度 (%)';
                myChart.options.scales.yAxes[0].ticks.max = 100;
                myChart.options.scales.yAxes[0].ticks.stepSize = 20;
            }
            if(status[4]=="土壤濕度"){
                myChart.data.datasets[1].label = '臨界值土壤濕度';
                myChart.data.datasets[1].data = [80,80,80,80,80,80,80];
                myChart.data.datasets[0].label = '土壤濕度';
                myChart.data.datasets[0].data = [70,86,78,88,87,60,70];

                myChart.options.title.text = '本周土壤濕度';
                myChart.options.scales.yAxes[0].scaleLabel.labelString = '濕度 (%)';
                myChart.options.scales.yAxes[0].ticks.max = 100;
                myChart.options.scales.yAxes[0].ticks.stepSize = 20;

            }
            if(status[4]=="亮度"){
                myChart.data.datasets[1].label = '臨界值亮度';
                myChart.data.datasets[1].data = [800,800,800,800,800,800,800];
                myChart.data.datasets[0].label = '亮度';
                myChart.data.datasets[0].data = [670,810,526,700,756,852,862];

                myChart.options.title.text = '本周亮度';
                myChart.options.scales.yAxes[0].scaleLabel.labelString = '流明 (lux))';
                myChart.options.scales.yAxes[0].ticks.max = 1000;
                myChart.options.scales.yAxes[0].ticks.stepSize = 100;
            }
            if(status[4]=="植物高度"){
                myChart.data.datasets[0].label = '植物高度';                
                myChart.data.datasets[0].data = [5,5,5,6,7,7,7];
                myChart.options.title.text = '本周植物高度';
                myChart.options.scales.yAxes[0].scaleLabel.labelString = '公分 (cm))';
                myChart.options.scales.yAxes[0].ticks.max = 30;
                myChart.options.scales.yAxes[0].ticks.stepSize = 5;
            }
        }
        myChart.update();
    }
}
//生長狀態分析or not
function op0(event){
    var choose0 = event.currentTarget;
    var pstatus4Flag = 0;
    console.log(choose0.innerText);
    if(choose0.innerText != status[0]){
        status[0] = choose0.innerText;
        //先處理CSS
        var othchooses = document.querySelectorAll('#charType p');
        for(var othchoose of othchooses){
            othchoose.style.backgroundColor="#fff";
            othchoose.style.color="black";
        }
        choose0.style.backgroundColor="#FF8370";
        choose0.style.color="#fff";
        //分析 必兩個
        if(status[0] =="分析生長狀態"){
            if(status[4] == "植物高度"){
                pstatus4Flag = 1;
                status[4] == "環境溫度";
                var chooseTemp = document.querySelector('#sel_sen #temp');
                chooseTemp.style.backgroundColor="#59be57";
                chooseTemp.style.color="#fff";
            }
            else{
                var chooseHeig = document.querySelector('#sel_sen #height');
                chooseHeig.style.backgroundColor="#59be57";
                chooseHeig.style.color="#fff";
            }
        }
        else{
            var chooseHeig = document.querySelector('#sel_sen #height');
            chooseHeig.style.backgroundColor="#fff";
            chooseHeig.style.color="black";
        }
        //後處理圖表
        if(status[0] =="分析生長狀態"){
            myChart.options.scales.yAxes[1].display = true;
            if(pstatus4Flag == 1){ //回初始
                console.log('回初始');
                myChart.destroy();
                myChart = new Chart(ctx, initialChart);
            }else{
                myChart.data.datasets.push({
                    type:'bar',
                    label: '高度',
                    yAxisID: 'y-axis-2',
                    backgroundColor: 'green',
                    borderColor: 'green',
                    fill: false,
                    data: [5,5,5,6,7,7,7], 
                });
            }
            
        }
        else{
            myChart.options.scales.yAxes[1].display = false;
            myChart.data.datasets.pop();
            
        }
        myChart.update();
    }
}

let status = ["分析生長狀態","已採收","1號_空心菜","每周","環境溫度"];
var choose1s = document.querySelectorAll('#charType p');
for(var choose1 of choose1s){
    choose1.addEventListener('click',op0);
}
// var choose1s = document.querySelectorAll('#charType p');
// for(var choose1 of choose1s){
//     choose1.addEventListener('click',op0);
// }
// var choose1s = document.querySelectorAll('#charType p');
// for(var choose1 of choose1s){
//     choose1.addEventListener('click',op0);
// }
// var choose1s = document.querySelectorAll('#charType p');
// for(var choose1 of choose1s){
//     choose1.addEventListener('click',op0);
// }
var choose4s = document.querySelectorAll('#sel_sen p');
for(var choose4 of choose4s){
    choose4.addEventListener('click',op4);
}