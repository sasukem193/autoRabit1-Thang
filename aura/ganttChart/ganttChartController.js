({
    doInit : function(component, event, helper) {        
        var action = component.get("c.fetchDetails");
        var recordId = component.get("v.recordId");
        action.setParams({
            "pc":recordId
        })
        action.setCallback(this, function(response) {
            var state = response.getState();
            var returnvalue = response.getReturnValue();
            if (returnvalue[0]['Total_Weeks__c'] == 0 )
            {
                component.set("v.emptyList",true);
            }
            else{
                component.set("v.emptyList",false);
            }

            if (state === "SUCCESS") {

                var storeResponse = response.getReturnValue();
                console.log(JSON.stringify(storeResponse));
                // set CostingList list with return value from server.
                if (JSON.stringify(storeResponse) == '[]')
                {
                   // component.set("v.emptyList",true);
                }
                else
                {
                   // component.set("v.emptyList",false);    
                }
                //component.set("v.CostingList", storeResponse);
                //this is where ^ shit is populated by calling Apex
            }
        });
        $A.enqueueAction(action);
        var jsonLineData = [{"x": "1","y": 5},{"x": "2","y": 7},{"x": "3","y": 8},{"x": "4","y": 3},{"x": "5","y": 1},{"x": "6","y": 2},{"x": " 7","y": 8}];
        var jsonStackedBarData = [{"x": "1","y": 5,"y1": 7},{"x": "2","y": 7,"y1": 9},{"x": "3","y": 8,"y1": 10},{"x": "4","y": 3,"y1": 5},{"x": "5","y": 1,"y1": 3},{"x": "6","y": 2,"y1": 4},{"x": " 7","y": 8,"y1": 10}];
        var jsonStackedColumnData = [{"x": "1","y": 5,"y1": 7},{"x": "2","y": 7,"y1": 9},{"x": "3","y": 8,"y1": 10},{"x": "4","y": 3,"y1": 5},{"x": "5","y": 1,"y1": 3},{"x": "6","y": 2,"y1": 4},{"x": " 7","y": 8,"y1": 10}];
        var jsonAreaData = [{"x": "1","y": 5},{"x": "2","y": 7},{"x": "3","y": 8},{"x": "4","y": 3},{"x": "5","y": 1},{"x": "6","y": 2},{"x": " 7","y": 8}];
        var jsonColumnData = [{"x": "1","y": 5},{"x": "2","y": 7},{"x": "3","y": 8},{"x": "4","y": 3},{"x": "5","y": 1},{"x": "6","y": 2},{"x": " 7","y": 8}];
        var jsonBarData = [{"x": "1","y": 5},{"x": "2","y": 7},{"x": "3","y": 8},{"x": "4","y": 3},{"x": "5","y": 1},{"x": "6","y": 2},{"x": " 7","y": 8}];
        //var jsonVerticalData = [{"x":"Kosovo","y":13256},{"x":"Portugal","y":2769},{"x":"US","y":12856},{"x":"Germany","y":2119},{"x":"UK","y":3452},{"x":"France","y":1513},{"x":"Italy","y":11256},{"x":"Canada","y":2269},{"x":"Spain","y":1412},{"x":"Austria","y":1213}];
        //var jsonHorizontalData = [{"x":13256,"y":"Kosovo"},{"x":2769,"y":"Portugal"},{"x":12856,"y":"US"},{"x":2119,"y":"Germany"},{"x":3452,"y":"UK"},{"x":1513,"y":"France"},{"x":11256,"y":"Italy"},{"x":2269,"y":"Canada"},{"x":1412,"y":"Spain"},{"x":1213,"y":"Austria"}];
        var jsonBubbleData =  [{"y": 10,"x": 14,"value": 59},{"y": 5,"x": 3,"value": 50},{"y": -10,"x": -3,"value": 19},{"y": -6,"x": 5,"value": 65},{"y": 15,"x": -4,"value": 92},{"y": 13,"x": 1,"value": 8},{"y": 1,"x": 6,"value": 35}];
        var jsonPieData = [{"x": "1","y": 8,"color": "#fdd400"},{"x": "2","y": 6, "color": "#84b761"},{"x": "3","y": 2, "color": "#cc4748"}];
        var jsonDonutData = [{"x": "1","y": 8,"color": "#fdd400"},{"x": "2","y": 6, "color": "#84b761"},{"x": "3","y": 2, "color": "#cc4748"}];
        var jsonGaugeData = [{"color": "#00FF00","endValue": 90,"startValue": 0},{"color": "#ffac29","endValue": 130,"startValue": 90},{"color": "#ea3838","endValue": 220,"startValue": 130}];
        var jsonGanttData = [{"y":"John","x":[{"start":7,"duration":2,"color":"#46615e","task":"Task #1"},{"duration":2,"color":"#727d6f","task":"Task #2"},{"duration":2,"color":"#8dc49f","task":"Task #3"}]},{"y":"Smith","x":[{"start":10,"duration":2,"color":"#727d6f","task":"Task #2"},{"duration":1,"color":"#8dc49f","task":"Task #3"},{"duration":4,"color":"#46615e","task":"Task #1"}]},{"y":"Ben","x":[{"start":12,"duration":2,"color":"#727d6f","task":"Task #2"},{"start":16,"duration":2,"color":"#FFE4C4","task":"Task #4"}]},{"y":"Mike","x":[{"start":9,"duration":6,"color":"#46615e","task":"Task #1"},{"duration":4,"color":"#727d6f","task":"Task #2"}]},{"y":"Lenny","x":[{"start":8,"duration":1,"color":"#8dc49f","task":"Task #3"},{"duration":4,"color":"#46615e","task":"Task #1"}]},{"y":"Scott","x":[{"start":15,"duration":3,"color":"#727d6f","task":"Task #2"}]},{"y":"Julia","x":[{"start":9,"duration":2,"color":"#46615e","task":"Task #1"},{"duration":1,"color":"#727d6f","task":"Task #2"},{"duration":8,"color":"#8dc49f","task":"Task #3"}]},{"y":"Bob","x":[{"start":9,"duration":8,"color":"#727d6f","task":"Task #2"},{"duration":7,"color":"#8dc49f","task":"Task #3"}]},{"y":"Kendra","x":[{"start":11,"duration":8,"color":"#727d6f","task":"Task #2"},{"start":16,"duration":2,"color":"#FFE4C4","task":"Task #4"}]},{"y":"Tom","x":[{"start":9,"duration":4,"color":"#46615e","task":"Task #1"},{"duration":3,"color":"#727d6f","task":"Task #2"},{"duration":5,"color":"#8dc49f","task":"Task #3"}]},{"y":"Kyle","x":[{"start":6,"duration":3,"color":"#727d6f","task":"Task #2"}]},{"y":"Anita","x":[{"start":12,"duration":2,"color":"#727d6f","task":"Task #2"},{"start":16,"duration":2,"color":"#FFE4C4","task":"Task #4"}]},{"y":"Jack","x":[{"start":8,"duration":10,"color":"#46615e","task":"Task #1"},{"duration":2,"color":"#727d6f","task":"Task #2"}]},{"y":"Kim","x":[{"start":12,"duration":2,"color":"#727d6f","task":"Task #2"},{"duration":3,"color":"#8dc49f","task":"Task #3"}]},{"y":"Aaron","x":[{"start":18,"duration":2,"color":"#727d6f","task":"Task #2"},{"duration":2,"color":"#FFE4C4","task":"Task #4"}]},{"y":"Alan","x":[{"start":17,"duration":2,"color":"#46615e","task":"Task #1"},{"duration":2,"color":"#727d6f","task":"Task #2"},{"duration":2,"color":"#8dc49f","task":"Task #3"}]},{"y":"Ruth","x":[{"start":13,"duration":2,"color":"#727d6f","task":"Task #2"},{"duration":1,"color":"#8dc49f","task":"Task #3"},{"duration":4,"color":"#46615e","task":"Task #1"}]},{"y":"Simon","x":[{"start":10.5,"duration":3,"color":"#727d6f","task":"Task #2"},{"start":17,"duration":4,"color":"#FFE4C4","task":"Task #4"}]}];
        var jsonLineAreaHybridData = [{"xAxis":"category 0","yAxis-1":2.371761566167492,"yAxis-2":6.373723497369521,"yAxis-3":3.2051242080634363},{"xAxis":"category 1","yAxis-1":8.66893690180715,"yAxis-2":10.235363996317954,"yAxis-3":3.6214228961264547},{"xAxis":"category 2","yAxis-1":9.089148420197096,"yAxis-2":11.055836650239089,"yAxis-3":5.609698533148257},{"xAxis":"category 3","yAxis-1":8.561919414230527,"yAxis-2":10.633418984847953,"yAxis-3":11.411439700299463},{"xAxis":"category 4","yAxis-1":2.554926931859474,"yAxis-2":5.747904207745467,"yAxis-3":4.5121542975361955},{"xAxis":"category 5","yAxis-1":3.4579709366067117,"yAxis-2":2.995859622233276,"yAxis-3":8.28273584138131},{"xAxis":"category 6","yAxis-1":2.4087201224101777,"yAxis-2":9.746541370818404,"yAxis-3":11.007628099021463}];
        component.set('v.areaData', jsonAreaData);
        component.set('v.lineData', jsonLineData);
        component.set('v.columnData', jsonColumnData);
        component.set('v.barData', jsonBarData);
        //component.set('v.verticalData', jsonVerticalData);
        //component.set('v.horizontalData', jsonHorizontalData);
        component.set('v.bubbleData', jsonBubbleData);
        component.set('v.pieData', jsonPieData);
        component.set('v.donutData', jsonDonutData);
        component.set('v.gaugeData', jsonGaugeData);
        component.set('v.gaugeValue', 160);
        component.set('v.gaugebottomText', "0 km/h");
        component.set('v.gaugeEndValue', 220);
        component.set('v.gaugeValueInterval', 10);
        component.set('v.gaugeChartText', "Gauge Chart");
        component.set('v.stackedBarData', jsonStackedBarData);
        component.set('v.stackedColumnData', jsonStackedColumnData);
        component.set('v.ganttData', jsonGanttData);
        component.set('v.lineAreaHybridData', jsonLineAreaHybridData);
    },
    reRenderCharts: function (component, event, helper) {
        component.set('v.chartRendered', false);
    },
    toPDFFormat : function(component, event, helper) {
        var amcharthtml = [];
        var images = [];
        
        var pending = AmCharts.charts.length;
       
        for ( var i = 0; i < AmCharts.charts.length; i++ ) {
            var chart = AmCharts.charts[ i ];
            chart.export.capture( {}, function() {
                this.toJPG( {}, function( data ) {
                    images.push( {
                        "image": data,
                        "fit": [ 523.28, 769.89 ]
                    } );
                    pending--;
                    if ( pending === 0 ) {
                        var arrayOfCmp = [];
                        var  margins = {
                            top: 10,
                            bottom: 10,
                            left: 10,
                            width: 600          		
                        };
                        var pdf = new jsPDF();

                        //var pdf = new jsPDF('p','pt','a4');
                        var canvas = pdf.canvas;
                        canvas.height = 2 * 11;
                        canvas.width= 2 * 8.5;
                        pdf.internal.scaleFactor = 2.25;
                        var content = document.body;
                        var pageBreakDiv = content.getElementsByClassName("pageBreak");
                        for (var j = 0; j < pageBreakDiv.length; j++){
                            var pageBreakHeight = pageBreakDiv[j].getAttribute("title");
                            pageBreakDiv[j].style.height = pageBreakHeight+"px";
                        }
                        for(var x = 0; x < images.length; x++){
                            amcharthtml.push(content.getElementsByClassName('amcharts-main-div')[x].innerHTML);
                            content.getElementsByClassName('amcharts-main-div')[x].innerHTML = '';
                            content.getElementsByClassName('amcharts-main-div')[x].innerHTML = '<img src="'+images[x].image+'" />';
                        }
                        event.source.elements[0].style.display = 'none';
                        pdf.addHTML(content,{pagesplit:true,background: '#fff'},function() {
                            event.source.elements[0].style.display = 'block';
                            for(var x = 0; x < images.length; x++){
                                content.getElementsByClassName('amcharts-main-div')[x].innerHTML = amcharthtml[x];
                            }
                            var pageBreakDiv = content.getElementsByClassName("pageBreak");
                            for (var j = 0; j < pageBreakDiv.length; j++){
                                pageBreakDiv[j].style.height = "0px";
                            }
                            //pdf.output('dataurl');
                            pdf.save('filename.pdf');
                        },margins);
                    }
                } );
            } );
        }
    }
    
})