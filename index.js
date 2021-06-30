$(document).ready(() => {

    $('#get-data1').click(()=>{
     var year=$('#get-data1').text();
      alert(year)
          getAllData(year); 
          

    })// end get data 
    $('#get-data2').click(()=>{
      var year=$('#get-data2').text();
       alert(year)
           getAllData(year); 
           
 
     })// end get data 
     $('#get-data3').click(()=>{
      var year=$('#get-data3').text();
       alert(year)
           getAllData(year); 
           
 
     })// end get data 
     $('#get-data4').click(()=>{
      var year=$('#get-data4').text();
       alert(year)
           getAllData(year); 
           
 
     })// end get data 
     $('#get-data5').click(()=>{
      var year=$('#get-data5').text();
       alert(year)
           getAllData(year); 
           
 
     })// end get data 
     $('#get-data6').click(()=>{
      var year=$('#get-data6').text();
       alert(year)
           getAllData(year); 
           
 
     })// end get data 
     $('#get-data7').click(()=>{
      var year=$('#get-data7').text();
       alert(year)
           getAllData(year); 
           
 
     })// end get data 
     $('#get-data8').click(()=>{
      var year=$('#get-data8').text();
       alert(year)
           getAllData(year); 
           
 
     })// end get data 
     $('#get-data9').click(()=>{
      var year=$('#get-data9').text();
       alert(year)
           getAllData(year); 
           
 
     })// end get data 
     $('#get-data10').click(()=>{
      var year=$('#get-data10').text();
       alert(year)
           getAllData(year); 
           
 
     })// end get data 
     $('#get-data11').click(()=>{
      var year=$('#get-data11').text();
       alert(year)
           getAllData(year); 
           
 
     })// end get data 
     $('#get-data12').click(()=>{
      var year=$('#get-data12').text();
       alert(year)
           getAllData(year); 
           
 
     })// end get data 
     $('#get-data13').click(()=>{
      var year=$('#get-data13').text();
       alert(year)
           getAllData(year); 
           
 
     })// end get data 
     $('#get-data14').click(()=>{
      var year=$('#get-data14').text();
       alert(year)
           getAllData(year); 
           
 
     })// end get data 
     $('#get-data15').click(()=>{
      var year=$('#get-data15').text();
       alert(year)
           getAllData(year); 
           
 
     })// end get data 
     $('#get-data16').click(()=>{
      var year=$('#get-data16').text();
       alert(year)
           getAllData(year); 
           
 
     })// end get data 
     $('#get-data17').click(()=>{
      var year=$('#get-data17').text();
       alert(year)
           getAllData(year); 
           
 
     })// end get data 
     $('#get-data18').click(()=>{
      var year=$('#get-data18').text();
       alert(year)
           getAllData(year); 
           
 
     })// end get data 
     $('#get-data19').click(()=>{
      var year=$('#get-data19').text();
       alert(year)
           getAllData(year); 
           
 
     })// end get data 
     $('#get-data20').click(()=>{
      var year=$('#get-data20').text();
       alert(year)
           getAllData(year); 
           
 
     })// end get data 


}); // end of document.ready()

let getAllData = (year) => {

    console.log("making request")

    $.ajax({
        type: 'GET', // request type GET, POST, PUT
        // dataType: 'json', // requesting datatype
        url: 'https://api.spaceXdata.com/v3/launches?limit=100', // URL of getting data
        success: (data) => { // in case of success response
            
            console.log(data)
            
            let allPeople 
            if($.isNumeric(year)){
              allPeople=data.filter(function(entry){return entry.launch_year==year});
              
            }else{
              allPeople=data;
            }
            for(i=0;i<9;i++)
            // for(person of allPeople)
            {

                 let tempRow = ` <div id="grid-item1" class="grid-item">
                 <img
                   class="grid_image"
                   src="images/Falcon@1X.png"
                   alt="Card image cap"
                 /><div class="grid_item_body">
                                <h5 class="grid_item-title">
                                  <div>${allPeople[i].flight_number}</div>
                                </h5>
                                <ul class="grid_item_text">
                                  <li>
                                  <span class="list-item">Mission ID</span>
                                    <div>${allPeople[i].mission_name}</div>
                                  </li>
                                  <li>
                                    <span class="list-item">Launch_year</span>
                                    <div>${allPeople[i].launch_year}</div>
                                  </li>
                                  <li>
                                    <span class="list-item">successfull_launch</span>
                                    <div>${allPeople[i].launch_success}</div>
                                  </li>
                                  <li>
                                    <span class="list-item">successfull_landing</span>
                                    <div>${allPeople[i].land_success}</div>
                                  </li>
                                </ul>
                              </div>`

                 $("#grid-item"+i).html(tempRow); // placing data in division with id - 'grid-item'
            }
            $("getAllData").filter(allPeople[0].launch_year);
            alert(allPeople[0].launch_year)

           
        },
        error: (data) => { // in case of error response

            alert("some error occured")

        },

        beforeSend: () => { // while request is processing.

            // you can use loader here.
            alert("request is being made. please wait")

        },
        complete: () => {

            // what you want to do while request is completed
            alert("data fetched success")

        },

        timeout:3000 // this is in milli seconds

    }); // end of AJAX request

} // end of getAllData

