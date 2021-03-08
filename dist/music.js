const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'Da!Da!Da!',
            artist: 'piano',
            url: 'http://lc-KU2hl0L2.cn-n1.lcfile.com/5a3cd23b332270b26b7f.MP3/%E3%83%95%E3%83%AA%E3%83%BCBGM%E7%B4%A0%E6%9D%90%20%E3%80%8EDa%21Da%21Da%21%20PIANO%20SOLO%E3%80%8F%20%E8%A9%A6%E8%81%B4%E3%83%9A%E3%83%BC%E3%82%B8%EF%BD%9C%E3%83%95%E3%83%AA%E3%83%BCBGM%20DOVA-SYNDROME.MP3',
            cover: 'cover1.jpg',
        },
        {
            name: 'Powerful snow',
            artist: 'piano',
            url: 'http://lc-KU2hl0L2.cn-n1.lcfile.com/42556be9d048ce328701.mp3/%E5%B0%8F%E6%9E%97%E4%BF%8A%E5%A4%AA%E9%83%8E%20-%20POWDER%20SNOW.mp3',
            cover: 'cover2.jpg',
        }
    ]
});