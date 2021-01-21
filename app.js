let myName = "josh hurn";
console.log("Name: " + myName.toUpperCase());
console.log("Career: Full Stack Engineer / Instructor");
console.log("Description: I like turtles");
console.log(" ");

const myInterestsArray = ["Video Games", "Watching movies", "Playing guitar", "Rock climbing"];
console.log("My Interests: ");
for (let i = 0; i < myInterestsArray.length; i++) {
    console.log("* " + myInterestsArray[i]);
}
console.log(" ");

const prevExperienceArray = [
    {
        companyName: "Innovate Birmingham",
        jobTitle: "Software Development Instructor",
        jobDescription: "taught full stack development"
    },
    {
        companyName: "Skynet",
        jobTitle: "T-1000",
        jobDescription: "Travelled back in time to kill Sarah Connor"
    },
    {
        companyName: "F-Society",
        jobTitle: "Hacker",
        jobDescription: "Took down E Corp"
    }
];

console.log("My Previous Experience:");
// looping through previous experience array and logging each index to the console.
for (let i = 0; i < prevExperienceArray.length; i++) {
    displayPosition(prevExperienceArray[i].companyName, prevExperienceArray[i].jobTitle, prevExperienceArray[i].jobDescription);
}
console.log(" ");

console.log("My Skills:");
const mySkills = [
    {
        skill: "Woodworking",
        isCool: true
    },
    {
        skill: "car detailing",
        isCool: true
    },
    {
        skill: "speaking four languages",
        isCool: false
    },
    {
        skill: "graphic design",
        isCool: true
    },
    {
        skill: "sick bo staff skills",
        isCool: false
    }
];
// displaySkill(mySkills[0].skill, mySkills[0].isCool);
// displaySkill(mySkills[1], true);
// displaySkill(mySkills[2], false);
// displaySkill(mySkills[3], true);
// displaySkill(mySkills[4], false);

for (let i = 0; i < mySkills.length; i++) {
    displaySkill(mySkills[i].skill, mySkills[i].isCool);
}

// hoisting function. This will be available anywhere in the file.
function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("* " + jobTitle + " at " + companyName + " - " + jobDescription);
}

// displaySkill("blha", true)
function displaySkill(skill, isCool) {
    if (isCool == true) {
        console.log("* BAM: " + skill);
    } else {
        console.log("* " + skill);
    }
}