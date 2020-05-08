// 1.Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div.
// При нажатии Ctrl + E, вместо div появляется textarea с тем же 
// текстом, который теперь можно редактировать. 
// При нажатии Ctrl + , вместо textarea появляется div с уже измененным
//  текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.



let elem = document.querySelector('.textfield');
console.log(elem);


let val = document.querySelector('.textfield').innerText;



document.addEventListener('keydown', function (event) {
    if ((event.code == 'KeyE' || event.code == 'Keye') && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        console.log('works');
        valNew = val
        console.log(valNew)

        document.querySelector(".textfield").style.display = "none";
        document.querySelector("#editor").style.display = "block";
        val = document.querySelector('#editor').innerText;


    } else if ('Key+' && (event.ctrlKey || event.metaKey)) {
        val = document.querySelector('#editor').innerText;
        document.querySelector(".textfield").style.display = "block";
        document.querySelector("#editor").style.display = "none";
    }
})

//2.Создать HTML - страницу с большой таблицей.При клике по заголовку колонки, 
//необходимо отсортировать данные по этой колонке.Учтите, что числовые значения 
//должны сортироваться как числа, а не как строки.



//3. Создать HTML - страницу с блоком текста в рамочке.Реализовать возможность 
//изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.