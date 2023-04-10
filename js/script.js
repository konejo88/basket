// export function masiv () {
    

const products = [
    {   id:1,
        img: '/img/1.webp',
        name: 'Пицца-сказка с игрушкой на коробке',
        discription: 'Пикантная пепперони, цыпленок, смесь сыров чеддер и пармезан, моцарелла, фирменный соус альфредо',
        price: 259
    },
    {   id:2,
        img: '/img/2.webp',
        name: 'Пицца из половинок',
        discription: 'Соберите свою пиццу 35 см с двумя разными вкусами',
        price: 600
    },
    {   id:3,
        img: '/img/3.webp',
        name: 'Деревенская с бужениной',
        discription: 'Запеченная буженина из свинины, моцарелла, картофель из печи, маринованные огурчики, красный лук, чеснок, фирменный томатный соус, соус ранчо',
        price: 429
    },
    {id:4,
        img: '/img/4.webp',
        name: 'Сырная',
        discription: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
        price: 300
    },
    {   id:5,
        img: '/img/5.webp',
        name: 'Ветчина и сыр',
        discription: 'Ветчина, моцарелла, фирменный соус альфредо',
        price: 310
    },
    {   id:6,
        img: '/img/6.webp',
        name: 'Пепперони фреш',
        discription: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
        price: 410
    },
    {   id:7,
        img: '/img/7.webp',
        name: 'Чоризо фреш',
        discription: 'Фирменный томатный соус, моцарелла, острая чоризо, сладкий перец',
        price: 420
    },
    {   id:8,
        img: '/img/8.webp',
        name: 'Додо Микс',
        discription: 'Бекон, цыпленок, ветчина, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, фирменный соус альфредо, чеснок, итальянские травы',
        price: 429
    },
    {   id:9,
        img: '/img/9.webp',
        name: 'Цыпленок карри',
        discription: 'Цыпленок, ананасы, соус карри, красный лук, сладкий перец, моцарелла, фирменный томатный соус',
        price: 400
    },
    {   id:10,
        img: '/img/10.webp',
        name: 'Песто',
        discription: 'Цыпленок, соус песто, кубики брынзы, томаты, моцарелла, фирменный соус альфредо',
        price: 410
    },
    {   id:11,
        img: '/img/11.webp',
        name: 'Цыпленок барбекю',
        discription: 'Цыпленок, бекон, соус барбекю, красный лук, моцарелла, фирменный томатный соус',
        price: 385
    },
    {   id:12,
        img: '/img/12.webp',
        name: 'Додо',
        discription: 'Бекон, митболы, пикантная пепперони, моцарелла, томаты, шампиньоны, сладкий перец, красный лук, чеснок, фирменный томатный соус',
        price: 400
    }
]
// }
// masiv()
// localStorage.clear()
const all=document.querySelector('.all')
for (let index = 0; index < products.length; index++) {
    const element = products[index];
    // console.log(element.img);
    const razmet=`
    <div class="card">
    <img src='${element.img}'>
    <h3>${element.name}</h3>
    <p>${element.discription}</p>
    <div class="all1">
    <p class="price">${element.price} рублей</p>
    <button class="but">В корзину</button>
    </div>
    </div>
    `
  all.innerHTML+=razmet
}
const but=document.querySelectorAll('.but')
// console.log(but);
for (let i = 0; i < products.length; i++) {
    const element = products[i];
    let button=but[i]
    button.addEventListener('click',choose)
    function choose () {
        let number=element.id
        let image=element.img
        let name=element.name
        let disc=element.discription
        let price=element.price
        let masiv=[number,image,name,disc,price]
        let conteiner=JSON.stringify(masiv)
        localStorage.setItem('products',conteiner)
        console.log(conteiner);
    }
}

