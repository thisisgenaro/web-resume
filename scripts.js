const experience_data = "./experience.json";

function importExperienceData()
{

    fetch("./experience.json")
    .then(response => {
        return response.json();
    })
    .then(data => logExperienceData(data));

}

function logExperienceData(data)
{
    data.forEach(writeExperience)
}

function writeExperience(experience)
{

    var timespan = experience.timespan;
    var role = experience.role;
    var company = experience.company;
    var description = experience.description;
    
    var AddLi = document.createElement('li');
    var timespanNew = document.createElement('div');
    timespanNew.innerText = timespan;
    AddLi.appendChild(timespanNew);

    var roleNew = document.createElement('strong');
    var companyNew = document.createElement('em');
    
    roleNew.innerText = role;
    companyNew.innerText = company;

    var content = document.createElement('div');
    
    content.appendChild(roleNew);
    content.appendChild(companyNew);
    content.innerHTML += description;
    
    AddLi.appendChild(content);

	document.getElementById("work-experience").appendChild(AddLi);

}