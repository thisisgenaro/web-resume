const experience_data = "./experience.json";

var dataJson = "./main-data.json"

function importJsonData(DataType)
{

    fetch(dataJson)
    .then(response => {
        return response.json();
    })
    .then(data => logJsonData(data[DataType],DataType));

}

function logJsonData(data,datatype)
{
    switch(datatype){
        case 'Experience':
            data.forEach(writeExperience);
            break;

        default:
            console.log('incorrect Datatype')
            break;
    }
}

function writeExperience(experience)
{

    /* -----    Expected Output - Example
    
            <li>
                <div class="timespan">2021 - Current</div>
                <div class="content">
                    <strong>LEAD IT INFRASTRUCTURE ENGINEER,</strong><em>DPWorld Caucedo</em>
                    Responsible for planning, managing and implementing IT Infrastructure resources and their usage through all the port and logistics solutions offered in the terminal, including networks, servers, high availability, site redundancy, UPS, cloud, and more.
                </div>
            </li>

            v2

            <li class="experience item">
                <div class="content">
                    <h1>LEAD IT INFRASTRUCTURE ENGINEER</h1><br>
                    <em>DPWorld Caucedo</em><span class="timespan">2021 - Current</span><br>
                    Responsible for planning, managing and implementing IT Infrastructure resources and their usage through all the port and logistics solutions offered in the terminal, including networks, servers, high availability, site redundancy, UPS, cloud, and more.
                </div>
            </li>
    
   

    var timespan = experience.timespan;
    var role = experience.role;
    var company = experience.company;
    var description = experience.description;
    
    var HTMLOutput = document.createElement('li');
    var timespanHTML = document.createElement('div');
    timespanHTML.setAttribute('class','timespan');
    timespanHTML.innerText = timespan;
    HTMLOutput.appendChild(timespanHTML);

    var roleHTML = document.createElement('strong');
    var companyHTML = document.createElement('em');
    
    roleHTML.innerText = role;
    companyHTML.innerText = company;

    var content = document.createElement('div');
    content.setAttribute('class','content');
    
    content.appendChild(roleHTML);
    content.appendChild(companyHTML);
    content.innerHTML += description;
    
    HTMLOutput.appendChild(content);

	document.getElementById("work-experience").appendChild(HTMLOutput);

     */

    var timespan = experience.timespan;
    var role = experience.role;
    var company = experience.company;
    var description = experience.description;

    var HTMLOutput = document.createElement('li');
    HTMLOutput.setAttribute('class','item');
    HTMLOutput.setAttribute('class','experience');

    var content = document.createElement('div');
    content.setAttribute('class','content');

    var roleHTML = document.createElement('h1');
    roleHTML.innerText = role;
    content.appendChild(roleHTML);
    content.appendChild(document.createElement('br'));

    var companyHTML = document.createElement('em');
    companyHTML.innerText = (company + " - ");
    content.appendChild(companyHTML);

    var timespanHTML = document.createElement('span');
    timespanHTML.innerText = timespan;
    content.appendChild(timespanHTML);
    content.appendChild(document.createElement('br'));
    content.innerHTML += description;

    HTMLOutput.appendChild(content);
    document.getElementById("work-experience").appendChild(HTMLOutput);

}