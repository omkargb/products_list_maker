            
            function tab1_To_tab2()
            {
                var table1 = document.getElementById("table1"),
                    table2 = document.getElementById("table2"),
                    checkboxes = document.getElementsByName("check-tab1");
                 for(var i = 0; i < checkboxes.length; i++)
                     if(checkboxes[i].checked)
                        {
                            // create new row and cells
                            var newRow = table2.insertRow(table2.length),
                                cell1 = newRow.insertCell(0),
                                cell2 = newRow.insertCell(1),
                                cell3 = newRow.insertCell(2);
                            // add values to the cells
                            cell1.innerHTML = table1.rows[i+1].cells[0].innerHTML;
                            cell2.innerHTML = table1.rows[i+1].cells[1].getElementsByTagName('input')[0].value;
                            cell3.innerHTML = "<input type='checkbox' name='check-tab2'>";
                           console.log("added -> "+cell1.innerHTML ,"| qty:",cell2.innerHTML )
                            // remove the transfered rows from the first table [table1]
                            var index = table1.rows[i+1].rowIndex;
                            table1.deleteRow(index);
                            // we have deleted some rows so the checkboxes.length have changed
                            // so we have to decrement the value of i
                            i--;
                        }
            }
            
            
            function tab2_To_tab1()
            {
                var table1 = document.getElementById("table1"),
                    table2 = document.getElementById("table2"),
                    checkboxes = document.getElementsByName("check-tab2");
                 for(var i = 0; i < checkboxes.length; i++)
                     if(checkboxes[i].checked)
                        {
                            // create new row and cells
                            var newRow = table1.insertRow(table1.length),
                                cell1 = newRow.insertCell(0),
                                cell2 = newRow.insertCell(1),
                                cell3 = newRow.insertCell(2);
                            // add values to the cells
                            cell1.innerHTML = table2.rows[i+1].cells[0].innerHTML;
							cell2.innerHTML = "<input type='number' class='form-control form-control-sm' id='pqty' min='0' >";
                            cell3.innerHTML = "<input type='checkbox'  class='form-control-check'  name='check-tab1'>";
                             console.log("removed -> "+cell1.innerHTML ,"| qty:",cell2.innerHTML )
                         
                            // remove the transfered rows from the second table [table2]
                            var index = table2.rows[i+1].rowIndex;
                            table2.deleteRow(index);
                            // we have deleted some rows so the checkboxes.length have changed
                            // so we have to decrement the value of i
                            i--;
                        }
            }
            


	        function nowdatetime() {
            var options = { weekday: 'long',  day: 'numeric', month: 'short', year: 'numeric',  };
            var today  = new Date();
            var dateshow= today.toLocaleDateString("en-IN", options);  // MR-IN for marathi
            document.getElementById('curdate').innerHTML = dateshow;
            console.log(dateshow);
        }


        function setcustdetails()
        {
            var custname= document.getElementById('custname').value ;
            var custadr= document.getElementById('custadr').value ;
            var custcontact= document.getElementById('custcontact').value;
            
            document.getElementById('cust_name').innerHTML =  custname;
			
			if(!custcontact) 
			{ document.getElementById("cust_contact").innerHTML = "--"; } 
			else	{ document.getElementById("cust_contact").innerHTML = custcontact; }
			
			if(!custadr) 
			{ document.getElementById("cust_adr").innerHTML =  "--"; } 
			else	{ document.getElementById("cust_adr").innerHTML =  custadr; }
        }



        function PrintDiv() {
            //Get the HTML of div
            var divElements = document.getElementById('printcontent').innerHTML;
            var printWindow = window.open("", "_blank", "");
            //open the window
            printWindow.document.open();
            //write the html to the new window, link to css file
            printWindow.document.write(
                '<html><head><title> Your list </title><link rel="stylesheet" type="text/css" href="assets/bootstrap.new.css" />'
                );
            printWindow.document.write(
                '<style> @media print{ #table2 th:last-child { display: none; } #table2 td:last-child { display: none; } .btn { display: none; }} </style> </head><body class="container">'
                );
            printWindow.document.write(divElements);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.focus();
            //The Timeout is ONLY to make Safari work, but it still works with FF, IE & Chrome.
            setTimeout(function () {
                printWindow.print();
            }, 100);
        }
