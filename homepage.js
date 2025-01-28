
const searchInput = document.getElementById('search');
const recommendedList = document.getElementById('recommendedList');
const topChartsList = document.getElementById('topChartsList');

searchInput.addEventListener('input', function () {
    const searchValue = searchInput.value.toLowerCase();
    const filterSongs = (list) => {
        const songs = list.getElementsByClassName('song-item');
        Array.from(songs).forEach(song => {
            if (song.textContent.toLowerCase().includes(searchValue)) {
                song.style.display = '';
            } else {
                song.style.display = 'none';
            }
        });
    };

    filterSongs(recommendedList);
    filterSongs(topChartsList);
});

const songs = [
    { title: "Naatu Naatu", singer: "Rahul Sipligunj, Kaala Bhairava", movie: "RRR", cast: "Ram Charan, Jr. NTR" },
    { title: "Inkem Inkem", singer: "Sid Sriram", movie: "Geetha Govindam", cast: "Vijay Deverakonda, Rashmika Mandanna" },
    { title: "Samajavaragamana", singer: "Sid Sriram", movie: "Ala Vaikunthapurramuloo", cast: "Allu Arjun, Pooja Hegde" },
    { title: "Why This Kolaveri Di", singer: "Dhanush", movie: "3", cast: "Dhanush, Shruti Haasan" },
    { title: "Rowdy Baby", singer: "Dhanush, Dhee", movie: "Maari 2", cast: "Dhanush, Sai Pallavi" },
    { title: "Tum Hi Ho", singer: "Arijit Singh", movie: "Aashiqui 2", cast: "Aditya Roy Kapur, Shraddha Kapoor" },
    { title: "Kesariya", singer: "Arijit Singh", movie: "Brahmastra", cast: "Ranbir Kapoor, Alia Bhatt" },
    { title: "Blinding Lights", singer: "The Weeknd", movie: "", cast: "" },
    { title: "Shape of You", singer: "Ed Sheeran", movie: "", cast: "" },
    { title: "Butta Bomma", singer: "Armaan Malik", movie: "Ala Vaikunthapurramuloo", cast: "Allu Arjun, Pooja Hegde" },
    { title: "Oo Antava", singer: "Indravathi Chauhan", movie: "Pushpa", cast: "Allu Arjun, Samantha Ruth Prabhu" },
    { title: "Vaathi Coming", singer: "Anirudh Ravichander", movie: "Master", cast: "Vijay, Malavika Mohanan" },
    { title: "Enjoy Enjaami", singer: "Dhee, Arivu", movie: "", cast: "" },
    { title: "Apna Bana Le", singer: "Arijit Singh", movie: "Bhediya", cast: "Varun Dhawan, Kriti Sanon" },
    { title: "Channa Mereya", singer: "Arijit Singh", movie: "Ae Dil Hai Mushkil", cast: "Ranbir Kapoor, Anushka Sharma" },
    { title: "Levitating", singer: "Dua Lipa", movie: "", cast: "" },
    { title: "Perfect", singer: "Ed Sheeran", movie: "", cast: "" },
    { title: "Blinding Lights", singer: "The Weeknd", movie: "", cast: "" },
    { title: "Save Your Tears", singer: "The Weeknd", movie: "", cast: "" },
    { title: "Levitating", singer: "Dua Lipa", movie: "", cast: "" },
    { title: "As It Was", singer: "Harry Styles", movie: "", cast: "" },
    { title: "Bad Habit", singer: "Steve Lacy", movie: "", cast: "" },
    { title: "Stay", singer: "The Kid LAROI, Justin Bieber", movie: "", cast: "" },
    { title: "Kiss Me More", singer: "Doja Cat, SZA", movie: "", cast: "" },
    { title: "Heat Waves", singer: "Glass Animals", movie: "", cast: "" },
    { title: "Peaches", singer: "Justin Bieber", movie: "", cast: "" },
    { title: "Montero (Call Me By Your Name)", singer: "Lil Nas X", movie: "", cast: "" },
    { title: "Save Your Tears (Remix)", singer: "The Weeknd, Ariana Grande", movie: "", cast: "" },
    { title: "Industry Baby", singer: "Lil Nas X, Jack Harlow", movie: "", cast: "" },
    { title: "Take My Breath", singer: "The Weeknd", movie: "", cast: "" },
    { title: "Good 4 U", singer: "Olivia Rodrigo", movie: "", cast: "" },
    { title: "Montero (Call Me By Your Name)", singer: "Lil Nas X", movie: "", cast: "" },
    { title: "Happier Than Ever", singer: "Billie Eilish", movie: "", cast: "" },
    { title: "Deja Vu", singer: "Olivia Rodrigo", movie: "", cast: "" },
    { title: "Stay", singer: "The Kid LAROI, Justin Bieber", movie: "", cast: "" },
    { title: "Shivers", singer: "Ed Sheeran", movie: "", cast: "" },
    { title: "Good 4 U", singer: "Olivia Rodrigo", movie: "", cast: "" },
    { title: "Beggin'", singer: "Måneskin", movie: "", cast: "" },
    { title: "Save Your Tears", singer: "The Weeknd", movie: "", cast: "" }
];

function getRandomSongs(count) {
    const shuffled = songs.sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, count); // Pick the top 'count' songs
}

function renderSongs(containerId, songs) {
    const container = document.getElementById(containerId);
    container.innerHTML = songs.map(song => `
        <div class="song-item">
            <img src="https://via.placeholder.com/150" alt="Song Cover">
            <p>${song.title} - ${song.singer} ${song.movie ? `(${song.movie} - ${song.cast})` : ""}</p>
        </div>
    `).join('');
}

// Display only 6 songs in both Recommended and Top Charts
const randomSongs = getRandomSongs(50); // Get 50 random songs from the array
renderSongs('recommendedList', randomSongs.slice(0, 6)); // Display 6 songs for Recommended
renderSongs('topChartsList', randomSongs.slice(6, 12));    // Display 6 songs for Top Charts
