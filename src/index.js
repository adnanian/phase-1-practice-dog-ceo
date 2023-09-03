console.log('%c HI', 'color: firebrick')

const LOWER_CASE_A_CODE = 97;
const LOWER_CASE_Z_CODE = 122;

function createAlphabetArray() {
    let array = [];
    for (let i = LOWER_CASE_A_CODE; i <= LOWER_CASE_Z_CODE; i++) {
        array.push(String.fromCharCode(i));
    }
    return array;
}

document.addEventListener('DOMContentLoaded', () => {
    // Complete Alphabet Drop Down
    let alphabet = createAlphabetArray();
    const breedDropDown = document.getElementById('breed-dropdown');
    for (let i = 0; i < alphabet.length; i++) {
        let option = document.createElement('option');
        option.setAttribute('value', alphabet[i]);
        option.textContent = alphabet[i];
        breedDropDown.appendChild(option);
    }

    // Challenge #1
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
        for (const datum of data.message) {
            const image = document.createElement('img');
            image.setAttribute('src', datum);
            document.getElementById('dog-image-container').appendChild(image);
        }
    });

    // Challenges #2 - 3
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
        for (const datum in data.message) {
            const breedItem = document.createElement('li');
            breedItem.textContent = datum;
            breedItem.addEventListener('click', (event) => {
                console.log(event.target.textContent);
                event.target.style.color = 'cyan';
                setTimeout(() => event.target.style.color = 'black', 3000);
            });
            document.getElementById('dog-breeds').appendChild(breedItem);
        }
    });

    // Challenge #4
    breedDropDown.addEventListener('change', (event) => {
        
        const breeds = Array.from(document.getElementById('dog-breeds').children);
        breeds.forEach((breed) => {
            if (event.target.value === breed.textContent[0] || event.target.value === 'initial') {
                breed.removeAttribute('hidden');
            } else {
                breed.setAttribute('hidden', 'hidden');
            }
        });
    });
});
