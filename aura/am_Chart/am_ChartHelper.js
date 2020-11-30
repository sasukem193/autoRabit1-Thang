({
    drawChart: function (component, helper) { //Define which chart have to be load 
        var chartType = component.get('v.type');
        var chartToDraw = chartType + 'Chart';
        if (chartType === 'column' || chartType === 'bar') chartToDraw = 'ganttChart';
        if (chartType === 'pie' || chartType === 'donut') chartToDraw = 'ganttChart';
        if (chartType === 'stackedcolumn' || chartType === 'stackedbar') chartToDraw = 'ganttChart';
        var listOfChartTypes = component.get("v.type").split(',');
        if(listOfChartTypes.length > 1){
            chartToDraw = 'ganttChart';
        }
        helper[chartToDraw](component, helper);
        component.set('v.chartRendered', true);
    },
    
    ganttChart: function (component, helper) { // Define Gantt chart
        var dataprovider = [];
        var title;
        var maxValue;
        var axisLabels;
        var xAxis;
        var yAxis;
        var architectDuration;
        var constructDuration;
        var validateDuration;
        var deployDuration;
        var supportDuration;
        
        if (component.get("v.durationSettings") == "Week")
        {
            var architectDuration = ((component.get("v.Architect"))/5);
            var constructDuration = (component.get("v.Construct"))/5;
            var validateDuration = (component.get("v.Validate"))/5;
            var deployDuration = (component.get("v.Deploy"))/5;
            var supportDuration = (component.get("v.Support"))/5;
            var maxValue = Math.ceil(component.get("v.weeks"))

//            if ((maxValue.toString().length) >= 2)
            if (maxValue >= 50)
            {
                var maxValue = Math.ceil(component.get("v.weeks") / 10) * 10;
                //var maxValue = Math.ceil(component.get("v.weeks"));

            }
            else
            {
                var maxValue = Math.ceil(component.get("v.weeks"));
            }
        }
        
        else if (component.get("v.durationSettings") == "Month")
        {
            var architectDuration = (component.get("v.Architect"))/20;
            var constructDuration = (component.get("v.Construct"))/20;
            var validateDuration = (component.get("v.Validate"))/20;
            var deployDuration = (component.get("v.Deploy"))/20;
            var supportDuration = (component.get("v.Support"))/20;
            var maxValue = component.get("v.months");
            //if ((maxValue.toString().length) >= 2)
            if (maxValue >= 60)
            {
                //var maxValue = Math.ceil(component.get("v.months"));

                var maxValue = (Math.ceil(component.get("v.months") / 10) * 10);
            }
            else
            {
                var maxValue = Math.ceil(component.get("v.months"));
            }
            
        }
        if (component.get("v.showTitle") == true && component.get("v.durationSettings") == "Week")
        {
            var title = [{
                "text": component.get("v.name"),
                "size": 15,
                "color": component.get("v.axisConfig")
                
                
            }, {
                "text": "Duration: "+ component.get("v.weeks") + " " + component.get("v.durationSettings") + "(s)",
                "bold": false,
                "color": component.get("v.axisConfig")
                
            }];
        }
        else if (component.get("v.showTitle") == false && component.get("v.durationSettings") == "Week")
        {
            var title=[];  
        }

//hehe
        if (component.get("v.showTitle") == true && component.get("v.durationSettings") == "Month")
        {
            var title = [{
                "text": component.get("v.name"),
                "size": 15,
                "color": component.get("v.axisConfig")
                
                
            }, {
                "text": "Duration: "+ component.get("v.months") + " " + component.get("v.durationSettings") + "(s)",
                "bold": false,
                "color": component.get("v.axisConfig")
                
            }];
        }
        else if (component.get("v.showTitle") == false && component.get("v.durationSettings") == "Month")
        {
            var title=[];  
        }
        
         if (component.get("v.showAxisLabels") == true)
                {
                    var xAxis = "Number of " + component.get("v.durationSettings") + "s";

                    var yAxis = component.get("v.yAxisLabel");

                }
                else if (component.get("v.showAxisLabels") == false)
                {
                }
        
      
        //https://www.amcharts.com/demos/floating-bar-chart/ USE DIZ SHIT
        
        var feedtwo = [{
            "name": "Architect",
            "startTime": 0,
            "endTime": architectDuration.toFixed(1),
            "durationSettings": component.get("v.durationSettings"),
            "totalDuration": architectDuration.toFixed(1),
            "color": "#00DCFF"
        }, {
            "name": "Construct",
            "startTime": architectDuration.toFixed(1),
            "endTime": (architectDuration + constructDuration).toFixed(1),
            "durationSettings": component.get("v.durationSettings"),
            "totalDuration": constructDuration.toFixed(1),
            "color": "#00DCFF"
        }, {
            "name": "Validate",
            "startTime": (architectDuration + constructDuration).toFixed(1),
            "endTime":   (architectDuration + constructDuration + validateDuration).toFixed(1),
            "durationSettings": component.get("v.durationSettings"),
            "totalDuration": validateDuration.toFixed(1),
            "color": "#00DCFF"
        }, {
            "name": "Deploy",
            "startTime": (architectDuration + constructDuration + validateDuration).toFixed(1),
            "endTime": (architectDuration + constructDuration + validateDuration + deployDuration).toFixed(1),
            "durationSettings": component.get("v.durationSettings"),
            "totalDuration": deployDuration.toFixed(1),
            "color": "#00DCFF"
        }, {
            "name": "Support",
            "startTime": (architectDuration + constructDuration + validateDuration + deployDuration).toFixed(1),
            "endTime": (architectDuration + constructDuration + validateDuration + deployDuration + supportDuration).toFixed(1),
            "durationSettings": component.get("v.durationSettings"),
            "totalDuration": supportDuration.toFixed(1),
            "color": "#00DCFF"
        }
                       
                      ]
        
        
        var feed =[{
            "category": "Architect",
            "segments": [ {
                "start": "2016-01-01",
                "end": "2016-01-14",
                "color": "#2f4070",
                "task": "Gathering requirements"
            }, {
                "start": "2016-01-16",
                "end": "2016-01-27",
                "task": "Producing specifications"
            }, {
                "start": "2016-02-05",
                "end": "2016-04-18",
                "task": "Development"
            }, {
                "start": "2016-04-18",
                "end": "2016-04-30",
                "task": "Testing and QA"
            } ]
        }, {
            "category": "Construct",
            "segments": [ {
                "start": "2016-01-08",
                "end": "2016-01-10",
                "color": "#2f4075",
                "task": "Gathering requirements"
            }, {
                "start": "2016-01-12",
                "end": "2016-01-15",
                "task": "Producing specifications"
            }, {
                "start": "2016-01-16",
                "end": "2016-02-05",
                "task": "Development"
            }, {
                "start": "2016-02-10",
                "end": "2016-02-18",
                "task": "Testing and QA"
            } ]
        }, {
            "category": "Validate",
            "segments": [ {
                "start": "2016-01-02",
                "end": "2016-01-08",
                "color": "#2f4080",
                "task": "Gathering requirements"
            }, {
                "start": "2016-01-08",
                "end": "2016-01-16",
                "task": "Producing specifications"
            }, {
                "start": "2016-01-19",
                "end": "2016-03-01",
                "task": "Development"
            }, {
                "start": "2016-03-12",
                "end": "2016-04-05",
                "task": "Testing and QA"
            } ]
        }, {
            "category": "Deploy",
            "segments": [ {
                "start": "2016-01-01",
                "end": "2016-01-19",
                "color": "#2f4085",
                "task": "Gathering requirements"
            }, {
                "start": "2016-01-19",
                "end": "2016-02-03",
                "task": "Producing specifications"
            }, {
                "start": "2016-03-20",
                "end": "2016-04-25",
                "task": "Development"
            }, {
                "start": "2016-04-27",
                "end": "2016-05-15",
                "task": "Testing and QA"
            } ]
        }, {
            "category": "Support",
            "segments": [ {
                "start": "2016-01-01",
                "end": "2016-01-12",
                "color": "#2f4090",
                "task": "Gathering requirements"
            }, {
                "start": "2016-01-12",
                "end": "2016-01-19",
                "task": "Producing specifications"
            }, {
                "start": "2016-01-19",
                "end": "2016-03-01",
                "task": "Development"
            }, {
                "start": "2016-03-08",
                "end": "2016-03-30",
                "task": "Testing and QA"
            } ]
        } ]
        
        
        
        var data = {
            "hideCredits":true,
            //"backgroundColor" :
            //
            "backgroundAlpha": 1,
            "backgroundColor": component.get("v.backgroundColor"),
            
            //"backgroundColor": "#1A242E",
            //"backgroundColor": "#575757",
            "theme": "dark ",
            "type": "serial",
            "dataProvider": feedtwo,
            "titles": title,
            "ValueAxesSettings": [
                {
                    "precision":0
 
                }
            ],
            
            "valueAxes": [{
                "minimum": 0,
                "maximum": maxValue,
                "precision":0,
                //"maximum": Math.ceil(component.get("v.weeks")),
 //               "maximum": Math.ceil(component.get("v.weeks")*2)/2,

                //"maximum": Math.round(component.get("v.weeks")*2)/2,

                "strictMinMax": true,
                "axisAlpha": 0,
                "gridAlpha": 1,
                "axisColor": "white",
                "gridColor": component.get("v.axisConfig"),
                "position": "bottom",
                "title": xAxis,
                "titleColor": component.get("v.axisConfig"),
                "color": component.get("v.axisConfig"),
                
            }
                         ],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<b>[[category]]</b><br>Start: [[durationSettings]] [[startTime]]<br>End: [[durationSettings]] [[endTime]] <br> Duration: [[totalDuration]] [[durationSettings]](s)",
                "colorField": "color",
                "fillAlphas": 0.9,
                "lineAlpha": 0,
                "openField": "startTime",
                "type": "column",
                "topRadius":1,
                "cornerRadiusTop":30,
                "valueField": "endTime"
            }],
            "rotate": true,
            "columnWidth": 0.65,
            //"cornerRadiusTop": "10px",
            //depth3D 
            "depth3D": 0,
            "angle": 0,
            
            "topRadius": 1,
            
            //            cornerRadiusTop 
            "categoryField": "name",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 1,
                "gridAlpha": 1,
                "axisColor": component.get("v.axisConfig"),
                "gridColor": component.get("v.axisConfig"),
                
                "position": "left",
                "title": yAxis,
                "color": component.get("v.axisConfig"),
                "titleColor": component.get("v.axisConfig"),
                "boldLabels": true,                 
            },
            /*
            "type": "gantt",
            "theme": "light",
            "marginRight": 70,
            "period": "DD",
            "dataDateFormat": "YYYY-MM-DD",
            "columnWidth": 0.5,
            "valueAxis": {
                "type": "date"
            },
            "brightnessStep": 7,
            "graph": {
                "fillAlphas": 1,
                "lineAlpha": 1,
                "lineColor": "#fff",
                "fillAlphas": 0.85,
                "balloonText": "<b>[[task]]</b>:<br />[[open]] -- [[value]]"
            },
            "rotate": true,
            "categoryField": "category",
            "segmentsField": "segments",
            "colorField": "color",
            "startDateField": "start",
            "endDateField": "end",
            "dataProvider": feed,
            "valueScrollbar": {
                "autoGridCount": true
            },
            "chartCursor": {
                "cursorColor": "#55bb76",
                "valueBalloonsEnabled": false,
                "cursorAlpha": 0,
                "valueLineAlpha": 0.5,
                "valueLineBalloonEnabled": true,
                "valueLineEnabled": true,
                "zoomable": false,
                "valueZoomable": true
            },*/
            
            // second set below
            
            /* "type": "gantt", 
            "theme": "light",
            "marginRight": 70,
            "period": "DD",
            "dataDateFormat":"YYYY-MM-DD",
            "balloonDateFormat": "JJ:NN",
            "columnWidth": 0.5,
            "valueAxis": {
                "type": "date"
            },
            "brightnessStep": 10,
            "graph": {
                "fillAlphas": 1,
                "balloonText": "<b>[[task]]</b>: [[open]] [[value]]"
            },
            "rotate": true,
            "categoryField": "category",
            "segmentsField": "segments",
            "colorField": "color",
            "startDate": "2015-01-01",
            "startField": "start",
            "endField": "end",
            "durationField": "duration",
            "dataProvider": feedtwo,
            "valueScrollbar": {
                "autoGridCount":true
            },
            "chartCursor": {
                "cursorColor":"#55bb76",
                "valueBalloonsEnabled": false,
                "cursorAlpha": 0,
                "valueLineAlpha":0.5,
                "valueLineBalloonEnabled": true,
                "valueLineEnabled": true,
                "zoomable":false,
                "valueZoomable":true
            },*/
            "export": {
                "enabled": true,
                  "divId": "pngContainer",
                "menu": [{
                    "format": "PNG",
                    "label": "💾",
                    "title": "Render PNG",
                },]               
            }
        } 
        
        AmCharts.makeChart( component.find('chartContainer').getElement(),data );
        //alert("hello");
        //            testJson.collegeId = {"eventno": "6062","eventdesc": "abc"};
        //            
        
    },
    
    lineChart: function (component, helper) { // Define Line chart
        var text = "[[x]]:[[value]]";
        var bullettext = "";
        var bulletballoonttext = "";
        var bulletlabeltext = component.get('v.bullettext');
        var bulletballoonlabeltext = component.get('v.bulletballoonttext');
        if(bulletlabeltext == "x"){
            bullettext = "[[x]]";
        }
        else if(bulletlabeltext == "y"){
            bullettext = "[[value]]";
        }
            else if(bulletlabeltext == "x:y"){
                bullettext = "[[x]]:[[value]]";
            }
                else if(bulletlabeltext == "x,y"){
                    bullettext = "[[x]],[[value]]";
                }
                    else{
                        bullettext = "";  
                    }
        
        if(bulletballoonlabeltext == "x"){
            bulletballoonttext = "[[x]]";
        }
        else if(bulletballoonlabeltext == "y"){
            bulletballoonttext = "[[value]]";
        }
            else if(bulletballoonlabeltext == "x:y"){
                bulletballoonttext = "[[x]]:[[value]]";
            }
                else if(bulletballoonlabeltext == "x,y"){
                    bulletballoonttext = "[[x]],[[value]]";
                }
                    else{
                        bulletballoonttext = "";  
                    }
        
        AmCharts.makeChart(component.find('chartContainer').getElement(),
                           {
                               "type": "serial",
                               "theme": "light",
                               "categoryField": "x",
                               "graphs": [
                                   {
                                       "balloonText": bulletballoonttext,
                                       "labelText": bullettext,
                                       "labelPosition": component.get('v.bullettextposition'),
                                       "bullet": component.get('v.bullettype'),
                                       "lineColor": component.get('v.linecolor'),
                                       "valueField": "y"
                                   }
                               ],
                               "titles": [
                                   {
                                       "text": component.get('v.charttitle')
                                   }
                               ],
                               "categoryAxis": {
                                   "gridColor": ""
                               },
                               "valueAxes": [
                                   {
                                       "gridColor": ""
                                   }],
                               "allLabels": [{
                                   "text": component.get('v.xaxistitle'),
                                   "x": "!15",
                                   "y": "!15",
                                   "width": "100%",
                                   "size": 12,
                                   "bold": true,
                                   "align": "right"
                               }, {
                                   "text": component.get('v.yaxistitle'),
                                   //"rotation": 270,
                                   "x": "55",
                                   "y": "22",
                                   "width": "100%",
                                   "size": 12,
                                   "bold": true,
                                   "align": "right"
                               }],
                               
                               "dataProvider": component.get('v.data'),
                               "export": {
                                   "enabled": true,
                                   "menu": []
                               }
                           }
                          );
    },
    areaChart: function (component, helper) { // Define Area chart
        var text = "[[x]]:[[value]]";
        var bullettext = "";
        var bulletballoonttext = "";
        var bulletlabeltext = component.get('v.bullettext');
        var bulletballoonlabeltext = component.get('v.bulletballoonttext');
        if(bulletlabeltext == "x"){
            bullettext = "[[x]]";
        }
        else if(bulletlabeltext == "y"){
            bullettext = "[[value]]";
        }
            else if(bulletlabeltext == "x:y"){
                bullettext = "[[x]]:[[value]]";
            }
                else if(bulletlabeltext == "x,y"){
                    bullettext = "[[x]],[[value]]";
                }
                    else{
                        bullettext = "";  
                    }
        
        if(bulletballoonlabeltext == "x"){
            bulletballoonttext = "[[x]]";
        }
        else if(bulletballoonlabeltext == "y"){
            bulletballoonttext = "[[value]]";
        }
            else if(bulletballoonlabeltext == "x:y"){
                bulletballoonttext = "[[x]]:[[value]]";
            }
                else if(bulletballoonlabeltext == "x,y"){
                    bulletballoonttext = "[[x]],[[value]]";
                }
                    else{
                        bulletballoonttext = "";  
                    }
        AmCharts.makeChart(component.find('chartContainer').getElement(),
                           {
                               "type": "serial",
                               "theme": "light",
                               "categoryField": "x",
                               "graphs": [
                                   {
                                       "balloonText": bulletballoonttext,
                                       "labelText": bullettext,
                                       "fillAlphas": 0.7,
                                       "fillColors": ["#e6f6fc"],
                                       "labelPosition": component.get('v.bullettextposition'),
                                       "bullet": component.get('v.bullettype'),
                                       "lineColor": component.get('v.linecolor'),
                                       "valueField": "y"
                                   }
                               ],
                               "titles": [
                                   {
                                       "text": component.get('v.charttitle')
                                   }
                               ],
                               "categoryAxis": {
                                   "gridColor": ""
                               },
                               "valueAxes": [
                                   {
                                       "gridColor": ""
                                   }],
                               "allLabels": [{
                                   "text": component.get('v.xaxistitle'),
                                   "x": "!15",
                                   "y": "!15",
                                   "width": "100%",
                                   "size": 12,
                                   "bold": true,
                                   "align": "right"
                               }, {
                                   "text": component.get('v.yaxistitle'),
                                   "x": "55",
                                   "y": "22",
                                   "width": "100%",
                                   "size": 12,
                                   "bold": true,
                                   "align": "right"
                               }],
                               
                               "dataProvider": component.get('v.data'),
                               "export": {
                                   "enabled": true,
                                   "menu": []
                               }
                           }
                          );
    },
    pieDonutChart: function (component, helper) { // Define Pie and Donut chart
        var chartType = component.get('v.type');
        var innerRadius = "40%";
        if(chartType == "pie"){
            innerRadius = "0%";
        }        
        AmCharts.makeChart(component.find('chartContainer').getElement(),
                           {
                               "type": "pie",
                               "theme": "light",
                               "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                               "innerRadius": innerRadius,
                               "startDuration": 0,
                               "titleField": "x",
                               "valueField": "y",
                               "allLabels": [],
                               "balloon": {},
                               "legend": {
                                   "enabled": true,
                                   "align": "center",
                                   "markerType": "circle"
                               },
                               "titles": [],
                               "dataProvider": component.get('v.data'),
                               "export": {
                                   "enabled": true,
                                   "menu": []
                               }
                           }
                          );
    },
    columnBarChart: function (component, helper) { // Define Column and Bar chart
        var text = "[[x]]:[[value]]";
        var bullettext = "";
        var bulletballoonttext = "";
        var bulletlabeltext = component.get('v.bullettext');
        var bulletballoonlabeltext = component.get('v.bulletballoonttext');
        if(bulletlabeltext == "x"){
            bullettext = "[[x]]";
        }
        else if(bulletlabeltext == "y"){
            bullettext = "[[value]]";
        }
            else if(bulletlabeltext == "x:y"){
                bullettext = "[[x]]:[[value]]";
            }
                else if(bulletlabeltext == "x,y"){
                    bullettext = "[[x]],[[value]]";
                }
                    else{
                        bullettext = "";  
                    }
        
        if(bulletballoonlabeltext == "x"){
            bulletballoonttext = "[[x]]";
        }
        else if(bulletballoonlabeltext == "y"){
            bulletballoonttext = "[[value]]";
        }
            else if(bulletballoonlabeltext == "x:y"){
                bulletballoonttext = "[[x]]:[[value]]";
            }
                else if(bulletballoonlabeltext == "x,y"){
                    bulletballoonttext = "[[x]],[[value]]";
                }
                    else{
                        bulletballoonttext = "";  
                    }
        var chartType = component.get('v.type');
        var rotate = true
        if(chartType == "column"){
            rotate = false;
        }
        AmCharts.makeChart(component.find('chartContainer').getElement(),
                           {
                               "type": "serial",
                               "theme": "light",
                               "categoryField": "x",
                               "rotate": rotate,
                               "graphs": [
                                   {
                                       "balloonText": bulletballoonttext,
                                       "labelText": bullettext,
                                       "fillAlphas": 1,
                                       "labelPosition": component.get('v.bullettextposition'),
                                       "lineColor": component.get('v.linecolor'),
                                       "type" : "column",
                                       "valueField": "y"
                                   }
                               ],
                               "titles": [
                                   {
                                       "text": component.get('v.charttitle')
                                   }
                               ],
                               "categoryAxis": {
                                   "gridColor": ""
                               },
                               "valueAxes": [
                                   {
                                       "gridColor": ""
                                   }],
                               "allLabels": [{
                                   "text": component.get('v.xaxistitle'),
                                   "x": "!15",
                                   "y": "!15",
                                   "width": "100%",
                                   "size": 12,
                                   "bold": true,
                                   "align": "right"
                               }, {
                                   "text": component.get('v.yaxistitle'),
                                   //"rotation": 270,
                                   "x": "55",
                                   "y": "22",
                                   "width": "100%",
                                   "size": 12,
                                   "bold": true,
                                   "align": "right"
                               }],
                               
                               "dataProvider": component.get('v.data'),
                               "export": {
                                   "enabled": true,
                                   "menu": []
                               }
                           }
                          );
    },
    stackedColumnBarChart: function (component, helper) { // Define Stacked Column and Stacked Bar chart
        var text = "[[x]]:[[value]]";
        var bullettext = "";
        var bulletballoonttext = "";
        var bullettext1 = "";
        var bulletballoonttext1 = "";
        var bulletlabeltext = component.get('v.bullettext');
        var bulletballoonlabeltext = component.get('v.bulletballoonttext');
        if(bulletlabeltext == "x"){
            bullettext1 = bullettext = "[[x]]";
        }
        else if(bulletlabeltext == "y"){
            bullettext1 = bullettext = "[[value]]";
        }
            else if(bulletlabeltext == "x:y"){
                bullettext1 = bullettext = "[[x]]:[[value]]";
            }
                else if(bulletlabeltext == "x,y"){
                    bullettext1 = bullettext = "[[x]],[[value]]";
                }
                    else{
                        bullettext1 = bullettext = "";  
                    }
        
        if(bulletballoonlabeltext == "x"){
            bulletballoonttext1 = bulletballoonttext = "[[x]]";
        }
        else if(bulletballoonlabeltext == "y"){
            bulletballoonttext1 = bulletballoonttext = "[[value]]";
        }
            else if(bulletballoonlabeltext == "x:y"){
                bulletballoonttext1 = bulletballoonttext = "[[x]]:[[value]]";
            }
                else if(bulletballoonlabeltext == "x,y"){
                    bulletballoonttext1 = bulletballoonttext = "[[x]],[[value]]";
                }
                    else{
                        bulletballoonttext1 = bulletballoonttext = "";  
                    }
        var chartType = component.get('v.type');
        var rotate = true
        if(chartType == "stackedcolumn"){
            rotate = false;
        }
        AmCharts.makeChart(component.find('chartContainer').getElement(),
                           {
                               "type": "serial",
                               "theme": "light",
                               "categoryField": "x",
                               "rotate": rotate,
                               "graphs": [
                                   {
                                       "balloonText": bulletballoonttext,
                                       "labelText": bullettext,
                                       "fillAlphas": 1,
                                       "labelPosition": component.get('v.bullettextposition'),
                                       "lineColor": component.get('v.linecolor'),
                                       "type" : "column",
                                       "valueField": "y"
                                   },
                                   {
                                       "balloonText": bulletballoonttext1,
                                       "labelText": bullettext1,
                                       "fillAlphas": 1,
                                       "labelPosition": component.get('v.bullettextposition'),
                                       "lineColor": component.get('v.linesecondcolor'),
                                       "type" : "column",
                                       "valueField": "y1"
                                   }
                               ],
                               "titles": [
                                   {
                                       "text": component.get('v.charttitle')
                                   }
                               ],
                               "categoryAxis": {
                                   "gridColor": "",
                                   "stackType": "regular"
                               },
                               "valueAxes": [
                                   {
                                       "gridColor": "",
                                       "stackType": "regular"
                                   }],
                               "allLabels": [{
                                   "text": component.get('v.xaxistitle'),
                                   "x": "!15",
                                   "y": "!15",
                                   "width": "100%",
                                   "size": 12,
                                   "bold": true,
                                   "align": "right"
                               }, {
                                   "text": component.get('v.yaxistitle'),
                                   //"rotation": 270,
                                   "x": "55",
                                   "y": "22",
                                   "width": "100%",
                                   "size": 12,
                                   "bold": true,
                                   "align": "right"
                               }],
                               
                               "dataProvider": component.get('v.data'),
                               "export": {
                                   "enabled": true,
                                   "menu": [
                                       {
                                           "format": "JPG",
                                           "label": "Save as JPG",
                                           "title": "Export chart to JPG",
                                       }, "PNG"
                                   ]
                               }
                           }
                          );
    },
    bubbleChart: function (component, helper) { // Define Bubble chart
        var text = "[[x]]:[[value]]";
        var bullettext = "";
        var bulletballoonttext = "";
        var bulletlabeltext = component.get('v.bullettext');
        var bulletballoonlabeltext = component.get('v.bulletballoonttext');
        if(bulletlabeltext == "x"){
            bullettext = "[[x]]";
        }
        else if(bulletlabeltext == "y"){
            bullettext = "[[value]]";
        }
            else if(bulletlabeltext == "x:y"){
                bullettext = "[[x]]:[[value]]";
            }
                else if(bulletlabeltext == "x,y"){
                    bullettext = "[[x]],[[value]]";
                }
                    else{
                        bullettext = "";  
                    }
        
        if(bulletballoonlabeltext == "x"){
            bulletballoonttext = "[[x]]";
        }
        else if(bulletballoonlabeltext == "y"){
            bulletballoonttext = "[[value]]";
        }
            else if(bulletballoonlabeltext == "x:y"){
                bulletballoonttext = "[[x]]:[[value]]";
            }
                else if(bulletballoonlabeltext == "x,y"){
                    bulletballoonttext = "[[x]],[[value]]";
                }
                    else{
                        bulletballoonttext = "";  
                    }
        var data = component.get('v.data');
        
        AmCharts.makeChart(component.find('chartContainer').getElement(),
                           {
                               "type": "xy",
                               "theme": "light",
                               "trendLines": [],
                               "graphs": [
                                   {
                                       "balloonText": bulletballoonttext,
                                       "labelText": bullettext,
                                       "bullet": component.get('v.bubbletype'),
                                       "lineAlpha": component.get('v.bubbleline'),
                                       "lineColor": component.get('v.bubbleColor'),
                                       "valueField": "value",
                                       "xField": "x",
                                       "yField": "y"
                                   }
                               ],
                               "categoryAxis": {
                                   "gridColor": ""
                               },
                               "valueAxes": [
                                   {
                                       "gridColor": ""
                                   }],
                               "guides": [],
                               "valueAxes": [
                                   {
                                       "axisAlpha": 0
                                   }
                               ],
                               "allLabels": [],
                               "balloon": {},
                               "titles": [],
                               "dataProvider": component.get('v.data'),
                               "export": {
                                   "enabled": true,
                                   "menu": []
                               }
                           }
                          );
    },
    gaugeChart: function (component, helper) { // Define Gauge chart
        
        AmCharts.makeChart(component.find('chartContainer').getElement(),
                           {
                               "type": "gauge",
                               "theme": "light",
                               "startDuration": 0,
                               "arrows": [
                                   {
                                       "value": component.get('v.gaugeValue')
                                   }
                               ],
                               "axes": [
                                   {
                                       "bottomText": component.get('v.gaugebottomText'),
                                       "endValue": component.get('v.gaugeEndValue'),
                                       "valueInterval": component.get('v.gaugeValueInterval'),
                                       "bands": component.get('v.data')
                                   }
                               ],
                               "titles": [
                                   {
                                       "size": 15,
                                       "text": component.get('v.gaugeChartText')
                                   }
                               ],
                               "export": {
                                   "enabled": true,
                                   "menu": []
                               }
                           }
                          );
    },
    
    lineAreaHybridChart: function (component, helper) { // Define multiple Line Area Hybrid chart
        
        var chartBody='{"valueAxes":[{"title":"'+component.get("v.yaxistitle")+'","id":"ValueAxis-1"}],"type":"serial", "export": {"enabled": true,"menu": []},"trendLines":[],"titles":[{"text":"'+component.get("v.charttitle")+'","size":15,'+
            '"id":"Title-1"}],"legend":{"useGraphSettings":true,"enabled":true},"guides":[],"categoryField":"xAxis","categoryAxis":{'+  
            '"gridPosition":"start"},"balloon":{},"allLabels":[]';
        
        var listOfChartColors = component.get("v.linecolor").split(',');
        
        var listOfChartTypes = component.get("v.type").split(',');
        var listOfGraphTitles = component.get("v.graphtitles").split(',');
        
        var listOfChartBullets = component.get("v.typesofbullets").split(',');
        
        
        
        var graphs = '"graphs":[';
        
        var checkMultipleGraph = false;
        
        for(var i=0; i<listOfChartColors.length; i++){
            if(listOfChartTypes[i] == 'Line'){
                if(checkMultipleGraph == true){
                    graphs = graphs+',';
                }
                graphs = graphs+'{"valueField":"yAxis-'+(i+1)+'","title":"'+listOfGraphTitles[i]+'","lineColor":"'+listOfChartColors[i]+'","id":"Ampgraph-'+(i+1)+'","fillAlphas":0.0,"bullet":"'+listOfChartBullets[i]+'"}';
                checkMultipleGraph = true;
            }
            else if(listOfChartTypes[i] == 'Area'){
                if(checkMultipleGraph == true){
                    graphs = graphs+',';
                }
                graphs = graphs+'{"valueField":"yAxis-'+(i+1)+'","title":"'+listOfGraphTitles[i]+'","lineColor":"'+listOfChartColors[i]+'","id":"Ampgraph-'+(i+1)+'","fillAlphas":0.7,"bullet":"'+listOfChartBullets[i]+'"}';
                checkMultipleGraph = true;
            }
        }
        
        graphs = graphs+'],'
        var chartData = JSON.stringify(component.get('v.data'));
        chartBody = chartBody+','+graphs+'"dataProvider" :'+chartData+'}';
        AmCharts.makeChart(component.find('chartContainer').getElement(),JSON.parse(chartBody));
    }
    
    
})