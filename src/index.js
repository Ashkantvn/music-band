// main and basic data
const data = {
    songs:[
        'garage',           
        'buried',            
        'not',            
        'white',            
        'put',            
        'row',                
    ],
    merchs:[{
        name:'T-shirt',
        price:16.27,
        image:'../style/img/anomaly-WWesmHEgXDs-unsplash.jpg',
    },
    {
        name:'mug',
        price:13.76,
        image:'../style/img/vanesa-giaconi-VVcggzlkYgE-unsplash.jpg',    
    }],
    concerts:[
        {
            country:'Guinea',
            date:'5/5/2102',
            price:3.23,
        },
        {
            country:'Nepal',
            date:'10/16/2107',
            price:6.32,
        },
        {
            country:'Germany',
            date:'1/22/2092',
            price:5.88,
        }
    ]
}
/////////getting html elements
const musicElements =[ 
    document.getElementById('indexMusicElements'),
    document.getElementById('storeMusicElements')
];
const merchElements =[
    document.getElementById('indexMerchElements'),
    document.getElementById('storeMerchElements'),
]
const concertElements =[
    document.getElementById('indexconcertElements'),
    document.getElementById('storeconcertElements')
]
//////function for mapping datas 
const makeMusicCards = ()=>{
    data.songs.map((song) =>{
        const musicCards= document.createElement('div');
        musicCards.textContent=song;
        musicCards.classList.add('cards')
        if (musicElements[0]) {
            musicElements[0].appendChild(musicCards);
        } else {
            const musicCardsButton= document.createElement('button');
            musicCardsButton.textContent='buy';
            musicCards.appendChild(musicCardsButton);
            musicElements[1].appendChild(musicCards);
        }
    })
}
makeMusicCards();


const makeMerchCards = ()=>{
    data.merchs.map((merch) =>{
        const merchCards= document.createElement('div');
        const merchName=document.createElement('h3');
        const merchPrice = document.createElement('h5');
        const merchImage = document.createElement('img');
        merchImage.src=merch.image;
        merchPrice.textContent='$'+ merch.price  ;
        merchName.textContent=merch.name;
        merchCards.appendChild(merchName);
        merchCards.appendChild(merchImage);
        merchCards.appendChild(merchPrice);
        merchCards.classList.add('cards');
        if (merchElements[0]) {
            merchElements[0].appendChild(merchCards);
        } else {
            const merchCardsButton= document.createElement('button');
            merchCardsButton.textContent='buy';
            merchCards.appendChild(merchCardsButton);
            merchElements[1].appendChild(merchCards);
        }
    })
}
makeMerchCards();

const makeConcertsCards = ()=>{
    data.concerts.map((concert) =>{
        const concertCards= document.createElement('div');
        const concertCountry=document.createElement('h3');
        const concertDate = document.createElement('h4');
        const concertPrice = document.createElement('h5');
        concertDate.textContent=concert.date;
        concertPrice.textContent='$'+ concert.price  ;
        concertCountry.textContent=concert.country;
        concertCards.appendChild(concertCountry);
        concertCards.appendChild(concertDate);
        concertCards.appendChild(concertPrice);
        concertCards.classList.add('cards');
        if (concertElements[0]) {
            concertElements[0].appendChild(concertCards);
        } else {
            const concertCardsButton= document.createElement('button');
            concertCardsButton.textContent='buy';
            concertCards.appendChild(concertCardsButton);
            concertElements[1].appendChild(concertCards);
        }
    })
}
makeConcertsCards();