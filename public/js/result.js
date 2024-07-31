let elementss = [
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

document.getElementsByTagName('title')[0].innerText = `H to ${elementss[Number(choice.innerText)-1]}`;

result = document.getElementById('result')
result.innerText = `your H to ${elementss[choice_element-1]} result:`

for (let i = 0; i<=clickTime.length-1; i++) {
    clickTime[i] = Math.round(clickTime[i] / 1000 * 100) / 100
}

elementss = elementss.slice(0, choice_element)
const ctx = document.getElementById('myLineChart').getContext('2d');
const myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: elementss,
        datasets: [{
            label: 'click time',
            data: clickTime,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'ClickTime(s)'
                }
            }
        },
        
    }
});

function re() {
    location.href = `/game?choice=${choice_element}`;
}

function main() {
    location.href = '/'
}