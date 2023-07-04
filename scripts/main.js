// destructure person object
const { name, perks, teachingMaterials, techs } = tutor;

// get name-heading class
const nameHeading = document.querySelector('.name-heading')
nameHeading.textContent = name;

// get perks-div class
const perksDiv = document.querySelector('.perks-div');

// get tutor-description class
const tutorDescription = document.querySelector('.tutor-description');

tutorDescription.innerHTML = `I am ${name}. I am an instructor, developer, motivator and content creator. 
I love educating people and creating educational materials. In January 2019, I also created a teaching material 
<span class="highlight">${teachingMaterials[0]}</span>. In December 2019, I created <span class="highlight">${teachingMaterials[1]}</span> 
challenge and in January 2020 <span class="highlight">${teachingMaterials[2]}</span> challenge.`;

// const thumbnail
const thumbnails = document.querySelector('.thumbnails');
thumbnails.style.display = 'flex';
thumbnails.style.justifyContent = 'space-evenly';

// iterate through teaching materials
teachingMaterials.forEach((material) => {
    const span = document.createElement('span');
    span.className = 'thumbs';
    span.textContent = material;

    thumbnails.appendChild(span)
})

// get static sentence class
const staticSent = document.querySelector('.static-sentence');
staticSent.textContent = 'The technologies I teach';

// function to display perks
function displayPerks() {
    let index = 0;
  
    setInterval(() => {
        const perk = perks[index];
        const staticPerk = document.createElement('span');
        staticPerk.textContent = perk.slice(0, 2);
        staticPerk.classList.add('static-animation');
        staticPerk.style.fontSize = '30px';

        const animatedPerk = document.createElement('span');
        animatedPerk.textContent = perk.slice(2, );
        animatedPerk.style.position = 'relative';
        animatedPerk.classList.add('slide-animation');

        perksDiv.innerHTML = '';
        perksDiv.appendChild(staticPerk);
        perksDiv.appendChild(animatedPerk);
  
        index = (index + 1) % perks.length; // Increment index and reset to 0 when it reaches the end
    }, 4000);
  }

displayPerks();

// get display-tech class
const tech = document.querySelector('.display-techs');

// function to display techs
function displayTechs() {
    let index = 0;

    setInterval(() => {
        const animatedTech = document.createElement('span');
        animatedTech.textContent = techs[index];
        animatedTech.classList.add('static-animation')
        
        tech.innerHTML = '';
        tech.appendChild(animatedTech);
        index = (index + 1) % techs.length; 
    }, 4000);
} 
displayTechs();

//
function updateColor() {
    const randomColor = getRandomColor();
    tech.style.color = randomColor;
}

updateColor();
setInterval(updateColor, 4000)

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

getRandomColor();