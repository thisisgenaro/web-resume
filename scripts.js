const experience_data = "./experience.json";

function importExperienceData()
{
    let response = await fetch(experience_data);
    let data = await response.json();

    console.log(data);
}

function helloworld()
{
    console.log("Hello World");
}