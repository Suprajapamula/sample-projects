var data;
fetch("data.json").then((res)=>{
    res.json().then((res)=>{
        data=res[0];
        console.log("data",data)
        var diastolic=[];
        data.diagnosis_history.forEach((item)=>{
           diastolic.push(item.blood_pressure.diastolic.value)
        })
        var systolic=[];
        data.diagnosis_history.forEach((item)=>{
            systolic.push(item.blood_pressure.systolic.value)
        })
        console.log("diastolic", diastolic)

        var displayedMonth=data.diagnosis_history[data.diagnosis_history.length - 1]
        document.querySelector(".sistolic-value").innerHTML=displayedMonth.blood_pressure.systolic.value;
        document.querySelector(".average-status").innerHTML=displayedMonth.blood_pressure.systolic.levels;
        document.querySelector(".diastolic-value").innerHTML=displayedMonth.blood_pressure.diastolic.value;
        document.querySelector(".diastolic-ave-status").innerHTML=displayedMonth.blood_pressure.diastolic.levels;
        var bpmCount=document.querySelector(".bpm-count");
        bpmCount.innerHTML=displayedMonth.respiratory_rate.value +" bpm";
        var bpmStatus=document.querySelector(".bpm-status");
        bpmStatus.innerHTML=displayedMonth.respiratory_rate.levels;
        var tempCount=document.querySelector(".temp-count");
        tempCount.innerHTML=displayedMonth.temperature.value+ " °F";
        document.querySelector(".temp-status").innerHTML=displayedMonth.temperature.levels;
        document.querySelector(".heart-rate").innerHTML=displayedMonth.heart_rate.value + " bpm";
        document.querySelector(".heart-status").innerHTML=displayedMonth.heart_rate.levels;
        var tbodyElement=document.querySelector(".tbodyElement");
        data.diagnostic_list.forEach((list)=>{
          var trEl=document.createElement("tr");
          var tdEl=document.createElement("td");
          var tdEl2=document.createElement("td");
          var tdEl3=document.createElement("td");
          tdEl.innerHTML=list.name;
          tdEl2.innerHTML=list.description;
          tdEl3.innerHTML=list.status;
          trEl.appendChild(tdEl);
          trEl.appendChild(tdEl2);
          trEl.appendChild(tdEl3)
          tbodyElement.appendChild(trEl)

        })
        document.querySelector(".user-name").innerHTML=data.name;
        document.querySelector(".dob").innerHTML=data.date_of_birth;
        document.querySelector(".gender").innerHTML=data.gender;
        document.querySelector(".contact-info").innerHTML=data.phone_number;
        document.querySelector(".e-contact").innerHTML=data.emergency_contact;
        document.querySelector(".insurance-provider").innerHTML=data.insurance_type;
        var labresultsData=document.querySelector(".lab-results");
        var uiEl=document.createElement("ul");
        data.lab_results.forEach((test) => {
          var liEl = document.createElement("li");
          var imgEl = document.createElement("img");
          var textNode = document.createElement("p");
          textNode.classList.add("report-name")
          textNode.innerHTML=test;
          liEl.appendChild(textNode);
          imgEl.src = "./images/download_FILL0_wght300_GRAD0_opsz24 (1).png";
          imgEl.classList.add("report-img")
          liEl.appendChild(imgEl); 
          uiEl.appendChild(liEl);
          labresultsData.appendChild(uiEl);
          if(test=="CT Scans"){
            liEl.classList.add("ct-scan");
          }
        });

        
        var options = {
            chart: {
              type: 'line',
              height:200,
              toolbar: {
                show: false 
              },
              zoom: {
                enabled: false 
            }
            },
            series: [
                {
                  name: "Series A",
                  data:diastolic
                },
                {
                  name: "Series B",
                  data: systolic
                }
            ],
            colors: ["#8C6FE6", "#E66FD2"],
            xaxis: {
              categories: ["Oct,2023" , "Nov,2023" , "Dec,2023" , "Jan,2024" ,"Feb,2024" , "Mar, 2024"]
            },
            yaxis: {
                min: 60, 
                max: 180, 
                tickAmount:6,
                range:20,
                axisBorder: {
                  show: true,  // Adds the vertical Y-axis line
                }

            },
            stroke: {
                curve: 'smooth',
                width:2
            },
            markers: {
                size: 6,
            },
            legend: {
              show: false
          }
          }
          
          var chart = new ApexCharts(document.querySelector("#chart"), options);
          
          chart.render();
    })

  

})