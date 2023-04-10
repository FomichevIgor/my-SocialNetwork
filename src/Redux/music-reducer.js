const TOGGLE_IS_FETCHING_MUSIC = "TOGGLE_IS_FETCHING_MUSIC";
const SET_MUSIC="SET_MUSIC";

let initialState = {
    music: [{name:"Кино",album:"12_22",urlimg:"https://static.mp3xa.me/album_images/200x200/kino-12_22.jpg"},
    {name:"Depeche Mode",album:"Memento Mori",urlimg:"https://static.mp3xa.me/album_images/200x200/depeche-mode-memento-mori.jpg"},
    {name:"Ислам Итляшев",album:"Плохая",urlimg:"https://static.mp3xa.me/album_images/200x200/islam-itljashev-plokhaja.jpg"},{name:"Måneskin",album:"Rush!",urlimg:"https://static.mp3xa.me/album_images/200x200/mneskin-rush.jpg"},
    {name:"Гио Пика feat. Кравц",album:"Сборник Ремиксов 2023 (Adam Maniac Remixes)",urlimg:"https://static.mp3xa.me/album_images/200x200/gio-pika-feat.-kravc-sbornik-rmiksov-2023-adam-maniac-remixes.jpg"},
    {name:"Lana Del Rey",album:"Did You Know That There's A Tunnel Under Ocean Blvd",urlimg:"https://static.mp3xa.me/album_images/200x200/lana-del-rey-did-you-know-that-theres-a-tunnel-under-ocean-blvd.jpg"},{name:"Miley Cyrus",album:"Endless Summer Vacation",urlimg:"https://static.mp3xa.me/album_images/200x200/miley-cyrus-endless-summer-vacation.jpg"},
    {name:"Pink ",album:"Trustfall",urlimg:"https://static.mp3xa.me/album_images/200x200/pink-trustfall.jpg"},{name:"Мачете",album:"AMBASSADOR",urlimg:"https://static.mp3xa.me/album_images/200x200/machete-ambassador.jpg"},{name:"Би-2",album:"Нечетный Воин",urlimg:"https://static.mp3xa.me/album_images/200x200/bi-2-nechetnyjj-voin-chast-5.jpg"},{name:"NLO ",album:"Синий Джин",urlimg:"https://static.mp3xa.me/album_images/200x200/nlo-sinijj-dzhin-bid0nci0n-remix.jpg"},
    {name:"Gorillaz ",album:"Cracker Island",urlimg:"https://static.mp3xa.me/album_images/200x200/gorillaz-cracker-island.jpg"},{name:"Oliver Tree",album:"Cowboy Tears Drown The World In A Swimming Pool Of Sorro...",urlimg:"https://static.mp3xa.me/album_images/200x200/oliver-tree-cowboy-tears-drown-the-world-in-a-swimming-pool-of-sorrow.jpg"},{name:"Paramore",album:"This Is Why",urlimg:"https://static.mp3xa.me/album_images/200x200/paramore-this-is-why.jpg"},{name:"Raye ",album:"My 21st Century Blues",urlimg:"https://static.mp3xa.me/album_images/200x200/raye-my-21st-century-blues.jpg"},{name:"Esco feat. Baga",album:"Неземная",urlimg:"https://static.mp3xa.me/album_images/200x200/esco-feat.-baga-nezemnaja.jpg"},{name:"St1m ",album:"Аванпост",urlimg:"https://static.mp3xa.me/album_images/200x200/st1m-avanpost.jpg"},{name:"Кравц feat. Гио Пика",album:"17 Мгновений Осени",urlimg:"https://static.mp3xa.me/album_images/200x200/kravc-feat.-gio-pika-17-mgnovenijj-oseni.jpg"},{name:"WhyBaby?",album:"Dark Side",urlimg:"https://static.mp3xa.me/album_images/200x200/whybaby-dark-side.jpg"}
    
    
    ],
    isFetching:true
}
const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING_MUSIC: {

            return { ...state, isFetching: action.isFetching }

        };
        case SET_MUSIC: {

            return { ...state, music: [...action.music] };


        }
    
        default:
            return state;
    }
}
export const setMusic = (music) => { return { type: SET_MUSIC, music } };
export const toggleIsFetchingMusic = (isFetching) => { return { type: TOGGLE_IS_FETCHING_MUSIC, isFetching } };

export default musicReducer;