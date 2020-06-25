import * as axios from "axios";
//
// export const fetchPhotos = async() => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve( {profile} ), 500)
//     })
// }

export const fetchPhotos = async( data ) => {
    data = {test: true};
    let options = {
        method: "post",
        headers: {
            'Authorization': 'https://www.social-media.in.ua/api/likes/test'
        },
        url: `https://www.instagram.com/_agentgirl_/`,
        data
    };
    const res = await axios(options);
    console.log(res);
    return res
};

const profile = {
    id: "23393",
    name: "_marvel_real_inst_",
    main_photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png",
    photos: [
        {
            id: 1,
            url: "https://www.hyundai.news/fileadmin/eu/models/20180827_6_hyundai_kona_features_that_will_make_you_feel_like_iron_man/kona-iron-man-video.jpg"
        },
        {
            id: 2,
            url: "https://3dnews.ru/assets/external/illustrations/2019/12/16/999803/2.jpg"
        },
        {
            id: 3,
            url: "https://img4.goodfon.ru/wallpaper/nbig/a/6e/screenshot-skrinshot-marvels-spider-man-game-igra-insomnia-5.jpg"
        },
        {
            id: 4,
            url: "https://u.kanobu.ru/editor/images/91/365ca055-2646-4938-9a97-13ed5d3a9e57.jpg"
        },
        {
            id: 5,
            url: "https://skr.su/uploaded/a5/ae/5f/a237c595ec822a906088ce0363.jpg"
        },
        {
            id: 6,
            url: "https://thumbs.dfs.ivi.ru/storage9/contents/b/0/b57c06689e7223e17dea927a0bf29c.jpg"
        },
        {
            id: 7,
            url: "https://i.pinimg.com/originals/21/2f/1b/212f1bbedb7f6cb2c44ba20542f72ff2.jpg"
        },
        {
            id: 8,
            url: "https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/filefield_paths/deadpool_5.jpg"
        },
        {
            id: 9,
            url: "https://b1.filmpro.ru/c/407752.700xp.jpg"
        }
    ]
}