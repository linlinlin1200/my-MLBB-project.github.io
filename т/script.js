    // script.js
    window.onload = () => {
        const title = document.getElementById("game-title");
        title.style.animation = "fadeIn 2s forwards";
    };
const changeButton = document.getElementById('changeTextBtn');
const backButton = document.getElementById('backBtn');
const text = document.getElementById('text');
const image = document.getElementById('image');

const items = [
    { text: 'Mobile Legends: Bang Bang (MLBB) — это динамичная многопользовательская онлайн-игра для мобильных устройств. Игроки в нее могут погрузиться в эпичные битвы 5 на 5, выбирая уникальных героев с особыми способностями. Это настоящая игра с элементами стратегии, где важно не только сражаться, но и разрабатывать тактику для победы.', imageUrl: 'https://how2play.ru/media/posts/356/line.jpg' },
    { text: 'В *Mobile Legends: Bang Bang* представлено огромное разнообразие героев с уникальными внешностями, способностями и стилями игры. Игроки могут выбрать персонажей, вдохновлённых различными культурами и мифологиями, от эпичных воинов до магов и существ фантастических миров. Это позволяет каждому найти героя, который соответствует его предпочтениям и вкусу.', imageUrl: 'https://prostoprosport.ru/wp-content/uploads/2023/07/geroi-v-mlbb.jpg' },
    { text: 'В *Mobile Legends: Bang Bang* система рангов делит игроков на несколько уровней, отражающих их мастерство и опыт. С увеличением ранга сложность матчей возрастает, и игроки сталкиваются с более опытными противниками. Это позволяет создавать более сбалансированные команды, что делает игры более увлекательными и честными. В конце каждого сезона лучшие игроки получают уникальные награды за свои достижения.', imageUrl: 'https://prostoprosport-fr.com/wp-content/uploads/2023/07/rangi-v-mlbb.jpg' },
    { text: 'В *Mobile Legends: Bang Bang* эмблемы и предметы позволяют адаптировать героев под различные стратегии. Эмблемы усиливают характеристики героя, такие как урон или защита, в зависимости от его роли. Предметы, покупаемые в процессе игры, дают бонусы к атаке, защите или магии, позволяя усиливать героя и подстраиваться под ситуацию на поле боя. Это даёт игрокам возможность создавать уникальные комбинации для победы.', imageUrl: 'https://cdn-www.bluestacks.com/bs-images/mlbb-emblems-guide-ru-2.png' },
    { text: 'В *Mobile Legends: Bang Bang* герои делятся на роли, каждая из которых выполняет свою функцию. **Бойцы** — универсальные атакующие и защитные персонажи. **Маги** наносят урон заклинаниями. **Ассасины** быстро уничтожают слабых врагов. **Танки** принимают урон и защищают команду. **Стрелки** наносят урон на расстоянии. **Поддержка** лечит и усиливает союзников. Разнообразие ролей помогает создавать сбалансированные команды для разных стратегий.', imageUrl: 'https://i.ytimg.com/vi/Vuby91oIiBs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB544MDaU-QTSxseg5uyD-0MdF0-A' },
];

let currentIndex = 0;

function updateContent() {
    text.textContent = items[currentIndex].text;
    image.src = items[currentIndex].imageUrl;
}

// кнопка след
changeButton.addEventListener('click', () => {
    currentIndex++;

    
    if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    updateContent();
});

// кнопка назад
backButton.addEventListener('click', () => {
    currentIndex--;


    if (currentIndex < 0) {
        currentIndex = items.length -1;
    }

    updateContent();
});
    // окно
    document.addEventListener("DOMContentLoaded", function () {
        
        setTimeout(function() {
        document.getElementById("advertisement-modal").style.display = "flex";
        }, 10000);
    
        // крестик
        document.getElementById("close-modal").addEventListener("click", function() {
        document.getElementById("advertisement-modal").style.display = "none";
        });
    
        // (закрыть)
        document.getElementById("fake-close-btn").addEventListener("click", function() {
        window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=vZf56fvUihC9XLHt"; 
        });
    });