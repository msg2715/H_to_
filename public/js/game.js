const elements = [
    "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne",
    "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca",
    "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn",
    "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr",
    "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn",
    "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd",
    "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb",
    "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg",
    "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th",
    "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm",
    "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds",
    "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
];

let game_elements = [] // 게임시 사용하게될 원소들
let grid_elements = [] // 격자판에 존재하는 원소들
let random_elements = [] // 원소들을 랜덤으로 배치하기 위한 코드
var choice_element = 0
let clickTime = [] // 각 원소들별로 클릭하는데 걸리는 시간을 알려줌.
let interval;
let startTime;
let delay;
let choice;

window.onload = function() {
    choice = document.getElementById('choice');
    choice_element = choice.innerText
    choice.remove()
    
    document.getElementsByTagName('h1')[0].innerText = `H to ${elements[choice_element-1]}`

    game_elements = elements.slice(0, choice_element)
    random_elements = elements.slice(0, choice_element)

    if (choice_element < 32) {
        reset(4)
    } else {
        reset(5)
    }
}

function reset(number) {
    const game_table = document.getElementsByClassName("game")[0];
    const r = random_elements.slice(0, number ** 2);
    grid_elements = game_elements.slice(number**2, number**2*2)

    random_elements.splice(0, number ** 2);
    for (let i = 1; i <= number; i++) {
        const tr = document.createElement('tr');
        for (let q = 1; q <= number; q++) {
            const randomIndex = Math.floor(Math.random() * r.length);
            const element = r[randomIndex];

            const td = document.createElement('td');
            td.innerHTML = `<div id="${element}" class="element">${element}</div>`;
            td.addEventListener('click', () => click_element(element, number));
            tr.appendChild(td);

            r.splice(randomIndex, 1);
        }
        game_table.appendChild(tr);
    }
}


function click_element(element, number) {
    const e = document.getElementById(element)

    if (game_elements[0] == element) {
        if (grid_elements.length == 0) {
            grid_elements = game_elements.slice(number**2, number**2*2)
            if (grid_elements.length == 0) {
                clickTime.push(Date.now() - delay)
                delay = Date.now()
                e.innerText = ''
                game_elements.shift()
            } else {
                const rd = Math.floor(Math.random() * grid_elements.length);
                const newElement = grid_elements[rd]

                game_elements.shift()
                e.innerText = newElement
                e.id = newElement
                e.removeEventListener('click', () => click_element(element, number))
                e.addEventListener('click', () => click_element(newElement, number));
                grid_elements.splice(rd, 1)
            }
        } else {
            const rd = Math.floor(Math.random() * grid_elements.length);
            const newElement = grid_elements[rd]
            if (game_elements[0] == 'H') {
                delay = Date.now()
                startTime = Date.now()
                const timer = document.getElementsByClassName("timer")[0]
                interval = setInterval(() => {
                    timer.innerText = `${Math.floor((Date.now() - startTime) / 1000)}.${(Date.now() - startTime) % 1000}`;
                }, 10);
            }
            clickTime.push(Date.now() - delay)
            delay = Date.now()
            game_elements.shift()
            e.innerText = newElement
            e.id = newElement
            e.removeEventListener('click', () => click_element(element, number))
            e.addEventListener('click', () => click_element(newElement, number));
            grid_elements.splice(rd, 1)
        }
    
        if (game_elements.length == 0) {
            clearInterval(interval);
            const runningTime = Date.now() - startTime
            document.getElementsByClassName("timer")[0].innerText = `${Math.floor((runningTime / 1000))}.${runningTime % 1000}`;

            fetch('/result', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ choice_element, runningTime, clickTime })
            })
            .then(response => response.text())
            .then(data => {
                document.body.innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
        }
    }
}

function re() {
    location.href = `/game?choice=${choice_element}`;
}