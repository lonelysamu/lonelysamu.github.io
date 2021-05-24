document.querySelector('#checkbutton').addEventListener('click', (e) => {

    if (e.target.id == "button1") {

        if (document.getElementById("button1").classList.contains("activebutton")) {

        }
        else {
            document.getElementById("work").style.display = "flex";
            document.getElementById("button1").classList = "col-4  d-flex p-2 justify-content-center align-items-center custombutton activebutton";
            document.getElementById("past").style.display = "none";
            document.getElementById("button3").classList = "col-4  d-flex p-2 justify-content-center align-items-center custombutton";
            document.getElementById("academic").style.display = "none";
            document.getElementById("button2").classList = "col-4  d-flex p-2 justify-content-center align-items-center custombutton";
        }
    }

    if (e.target.id == "button2") {
        if (e.target.id == "button2") {

            if (document.getElementById("button2").classList.contains("activebutton")) {

            }
            else {
                document.getElementById("academic").style.display = "flex";
                document.getElementById("button2").classList = "col-4 d-flex p-2 justify-content-center align-items-center custombutton activebutton";
                document.getElementById("work").style.display = "none";
                document.getElementById("button1").classList = "col-4 d-flex p-2 justify-content-center align-items-center custombutton";
                document.getElementById("past").style.display = "none";
                document.getElementById("button3").classList = "col-4  d-flex p-2 justify-content-center align-items-center custombutton";

            }
        }
    }

    if (e.target.id == "button3") {
        if (e.target.id == "button3") {

            if (document.getElementById("button3").classList.contains("activebutton")) {

            }
            else {
                document.getElementById("past").style.display = "flex";
                document.getElementById("button3").classList = "col-4 d-flex p-2 justify-content-center align-items-center custombutton activebutton";
                document.getElementById("work").style.display = "none";
                document.getElementById("button1").classList = "col-4 d-flex p-2 justify-content-center align-items-center custombutton";
                document.getElementById("academic").style.display = "none";
                document.getElementById("button2").classList = "col-4  d-flex p-2 justify-content-center align-items-center custombutton";

            }
        }
    }

})

$.ajax({
    url: 'https://api.airtable.com/v0/appeQuu4UrkerneqL/Work%20Experience',
    method: 'GET',
    headers: {
        Authorization: 'Bearer key8pVl9RUqEaUTLV'
    },
    success: function (result) {

        for (i = 0; i < result.records.length; i++) {
            var node = document.createElement("div");
            node.classList = "col-10 mt-3 p-5 cardstyle";
            node.innerHTML = "<div class='row p-2 d-flex justify-content-center align-items-center'><div class='col-12 col-lg-3 text-center'><a href=" + result.records[i].fields.link + "  target='blank'> <img src=" + result.records[i].fields.Logo[0].url + " width='100%' height='auto'></a> </div> <div class='col-12 col-lg-9 mt-5 m-lg-0 '><h3>" + result.records[i].fields.Title + "</h3><h4>" + result.records[i].fields.name + "</h4><h5>" + result.records[i].fields.Status + "</h5> <br><p>" + result.records[i].fields.Description + "</p></div></div>";
            document.getElementById("workcontent").appendChild(node);
        }

    }
})

$.ajax({
    url: 'https://api.airtable.com/v0/appeQuu4UrkerneqL/Certs',
    method: 'GET',
    headers: {
        Authorization: 'Bearer key8pVl9RUqEaUTLV'
    },
    success: function (result) {
        console.log(result);

        for (i = 0; i < result.records.length; i++) {
            var node2 = document.createElement("div");
            node2.classList = "col-5 m-2 col-lg-3 d-flex flex-column justify-content-center align-items-center cardstyle";
            node2.innerHTML = "<div class='row mt-3' ><a href="+ result.records[i].fields.Link +"><img src="+ result.records[i].fields.Attachments[0].url +"  width='100%' height='auto'></a> </div> <div class='row text-center'><h5>"+ result.records[i].fields.Name +"</h5><p> "+ result.records[i].fields.date +"</p></div>";
            document.getElementById("certcontent").appendChild(node2);
    }

    }
  })