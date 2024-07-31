// 각 원소들에 대해 누른시간을 측정해 결과에서 리스트로 알려주기

// 주기율표 원소 정보
const elements = [
    {element: 'H', number: 1, period: 1, group: 1},
    {element: 'He', number: 2, period: 1, group: 18},
    {element: 'Li', number: 3, period: 2, group: 1},
    {element: 'Be', number: 4, period: 2, group: 2},
    {element: 'B', number: 5, period: 2, group: 13},
    {element: 'C', number: 6, period: 2, group: 14},
    {element: 'N', number: 7, period: 2, group: 15},
    {element: 'O', number: 8, period: 2, group: 16},
    {element: 'F', number: 9, period: 2, group: 17},
    {element: 'Ne', number: 10, period: 2, group: 18},
    {element: 'Na', number: 11, period: 3, group: 1},
    {element: 'Mg', number: 12, period: 3, group: 2},
    {element: 'Al', number: 13, period: 3, group: 13},
    {element: 'Si', number: 14, period: 3, group: 14},
    {element: 'P', number: 15, period: 3, group: 15},
    {element: 'S', number: 16, period: 3, group: 16},
    {element: 'Cl', number: 17, period: 3, group: 17},
    {element: 'Ar', number: 18, period: 3, group: 18},
    {element: 'K', number: 19, period: 4, group: 1},
    {element: 'Ca', number: 20, period: 4, group: 2},
    {element: 'Sc', number: 21, period: 4, group: 3},
    {element: 'Ti', number: 22, period: 4, group: 4},
    {element: 'V', number: 23, period: 4, group: 5},
    {element: 'Cr', number: 24, period: 4, group: 6},
    {element: 'Mn', number: 25, period: 4, group: 7},
    {element: 'Fe', number: 26, period: 4, group: 8},
    {element: 'Co', number: 27, period: 4, group: 9},
    {element: 'Ni', number: 28, period: 4, group: 10},
    {element: 'Cu', number: 29, period: 4, group: 11},
    {element: 'Zn', number: 30, period: 4, group: 12},
    {element: 'Ga', number: 31, period: 4, group: 13},
    {element: 'Ge', number: 32, period: 4, group: 14},
    {element: 'As', number: 33, period: 4, group: 15},
    {element: 'Se', number: 34, period: 4, group: 16},
    {element: 'Br', number: 35, period: 4, group: 17},
    {element: 'Kr', number: 36, period: 4, group: 18},
    {element: 'Rb', number: 37, period: 5, group: 1},
    {element: 'Sr', number: 38, period: 5, group: 2},
    {element: 'Y', number: 39, period: 5, group: 3},
    {element: 'Zr', number: 40, period: 5, group: 4},
    {element: 'Nb', number: 41, period: 5, group: 5},
    {element: 'Mo', number: 42, period: 5, group: 6},
    {element: 'Tc', number: 43, period: 5, group: 7},
    {element: 'Ru', number: 44, period: 5, group: 8},
    {element: 'Rh', number: 45, period: 5, group: 9},
    {element: 'Pd', number: 46, period: 5, group: 10},
    {element: 'Ag', number: 47, period: 5, group: 11},
    {element: 'Cd', number: 48, period: 5, group: 12},
    {element: 'In', number: 49, period: 5, group: 13},
    {element: 'Sn', number: 50, period: 5, group: 14},
    {element: 'Sb', number: 51, period: 5, group: 15},
    {element: 'Te', number: 52, period: 5, group: 16},
    {element: 'I', number: 53, period: 5, group: 17},
    {element: 'Xe', number: 54, period: 5, group: 18},
    {element: 'Cs', number: 55, period: 6, group: 1},
    {element: 'Ba', number: 56, period: 6, group: 2},
    {element: 'La', number: 57, period: 8, group: 4},
    {element: 'Ce', number: 58, period: 8, group: 5},
    {element: 'Pr', number: 59, period: 8, group: 6},
    {element: 'Nd', number: 60, period: 8, group: 7},
    {element: 'Pm', number: 61, period: 8, group: 8},
    {element: 'Sm', number: 62, period: 8, group: 9},
    {element: 'Eu', number: 63, period: 8, group: 10},
    {element: 'Gd', number: 64, period: 8, group: 11},
    {element: 'Tb', number: 65, period: 8, group: 12},
    {element: 'Dy', number: 66, period: 8, group: 13},
    {element: 'Ho', number: 67, period: 8, group: 14},
    {element: 'Er', number: 68, period: 8, group: 15},
    {element: 'Tm', number: 69, period: 8, group: 16},
    {element: 'Yb', number: 70, period: 8, group: 17},
    {element: 'Lu', number: 71, period: 8, group: 18}, 
    {element: 'Hf', number: 72, period: 6, group: 4},
    {element: 'Ta', number: 73, period: 6, group: 5},
    {element: 'W', number: 74, period: 6, group: 6},
    {element: 'Re', number: 75, period: 6, group: 7},
    {element: 'Os', number: 76, period: 6, group: 8},
    {element: 'Ir', number: 77, period: 6, group: 9},
    {element: 'Pt', number: 78, period: 6, group: 10},
    {element: 'Au', number: 79, period: 6, group: 11},
    {element: 'Hg', number: 80, period: 6, group: 12},
    {element: 'Tl', number: 81, period: 6, group: 13},
    {element: 'Pb', number: 82, period: 6, group: 14},
    {element: 'Bi', number: 83, period: 6, group: 15},
    {element: 'Po', number: 84, period: 6, group: 16},
    {element: 'At', number: 85, period: 6, group: 17},
    {element: 'Rn', number: 86, period: 6, group: 18},
    {element: 'Fr', number: 87, period: 7, group: 1},
    {element: 'Ra', number: 88, period: 7, group: 2},
    {element: 'Ac', number: 89, period: 9, group: 4}, //
    {element: 'Th', number: 90, period: 9, group: 5},
    {element: 'Pa', number: 91, period: 9, group: 6},
    {element: 'U', number: 92, period: 9, group: 7},
    {element: 'Np', number: 93, period: 9, group: 8},
    {element: 'Pu', number: 94, period: 9, group: 9},
    {element: 'Am', number: 95, period: 9, group: 10},
    {element: 'Cm', number: 96, period: 9, group: 11},
    {element: 'Bk', number: 97, period: 9, group: 12},
    {element: 'Cf', number: 98, period: 9, group: 13},
    {element: 'Es', number: 99, period: 9, group: 14},
    {element: 'Fm', number: 100, period: 9, group: 15},
    {element: 'Md', number: 101, period: 9, group: 16},
    {element: 'No', number: 102, period: 9, group: 17},
    {element: 'Lr', number: 103, period: 9, group: 18},
    {element: 'Rf', number: 104, period: 7, group: 4},
    {element: 'Db', number: 105, period: 7, group: 5},
    {element: 'Sg', number: 106, period: 7, group: 6},
    {element: 'Bh', number: 107, period: 7, group: 7},
    {element: 'Hs', number: 108, period: 7, group: 8},
    {element: 'Mt', number: 109, period: 7, group: 9},
    {element: 'Ds', number: 110, period: 7, group: 10},
    {element: 'Rg', number: 111, period: 7, group: 11},
    {element: 'Cn', number: 112, period: 7, group: 12},
    {element: 'Nh', number: 113, period: 7, group: 13},
    {element: 'Fl', number: 114, period: 7, group: 14},
    {element: 'Mc', number: 115, period: 7, group: 15},
    {element: 'Lv', number: 116, period: 7, group: 16},
    {element: 'Ts', number: 117, period: 7, group: 17},
    {element: 'Og', number: 118, period: 7, group: 18}
];

let choice_element = 20;

// 주기율표 그리기
window.onload = function() {
    const periodicTable = document.getElementById('periodic-table');

    for (let period = 1; period <= 9; period++) {
        const tr = document.createElement('tr');
        for (let group = 1; group <= 18; group++) {
            const element = elements.find(e => e.group === group && e.period === period);
            const td = document.createElement('td');
            
            if (element) {
                td.className = 'element-box';
                td.innerHTML = `
                    <div class="number">${element.number}</div>
                    <div id="${element.number}" class="element">${element.element}</div>
                `;
                td.addEventListener('click', () => click_element(element.number));
            } else {
                td.className = 'empty';
            }
            
            tr.appendChild(td);
        }
        periodicTable.appendChild(tr);
    }

    let divElement = document.getElementById('20'); // ID가 '20'인 div 선택
    let trElement = divElement.closest('td'); // 해당 div의 상위 tr 선택
    trElement.className = 'element-box choice';
};

// 주기율표에서 원소 선택
function click_element(e) {
    divElement = document.getElementById(choice_element);
    trElement = divElement.closest('td');
    trElement.className = 'element-box';

    divElement = document.getElementById(e);
    trElement = divElement.closest('td');
    trElement.className = 'element-box choice';
    document.getElementsByTagName('h1')[0].innerText = `H to ${elements[e-1].element}`;
    document.getElementsByTagName('title')[0].innerText = `H to ${elements[e-1].element}`;

    choice_element = e;
};

// 게임 시작버튼 클릭
function start() {
    const hint = document.getElementById('hint').checked
    if (choice_element >= 20) {
        location.href = `/game?choice=${choice_element}&hint=${hint}`;
    } else {
        alert("Ca부터 선택이 가능합니다.")
    }
}