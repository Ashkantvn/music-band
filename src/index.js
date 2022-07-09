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
    merch:[{
        name:'T-shirt',
        price:16.27,
        image:'',
    },
    {
        name:'mug',
        price:13.76,
        image:'',    
    }],
    concert:[
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
/////////getting html element
const musicElements =[ 
    document.getElementById('indexMusicElements'),
    document.getElementById('storeMusicElements')
];
const makeMusicCards = ()=>{
    data.songs.map((song) =>{
        const musicCards= document.createElement('div');
        musicCards.textContent=song;
        musicCards.classList.add('music-cards')
        if (musicElements[0]) {
            musicElements[0].appendChild(musicCards);
        } else {
            const musicCardsButton= document.createElement('button');
            musicCardsButton.innerHTML='buy';
            musicCards.appendChild(musicCardsButton);
            musicElements[1].appendChild(musicCards);
        }
    })
}
makeMusicCards();