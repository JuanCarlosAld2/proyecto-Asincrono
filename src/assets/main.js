const API = 'https://rickandmortyapi.com/api/character';// /?page=2 
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};
const content = null || document.getElementById('content');

async function fetchData(urlApi) {
    try {
        const response = await fetch(urlApi, options);

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to be caught by the caller
    }
}

(async () => {
try {
    const {results} = await fetchData(API)
    //console.log(results);
    let view = 
    `
        ${results.map(personaje =>`
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${personaje.image}" alt="${personaje.name}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-lg text-black-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${personaje.name}
                    </h3>
                </div>
            </div>
            
            `).slice(0,4).join('')}
      
    `;
    content.innerHTML = view;
} catch (error) {
    console.error('Error rendering data:', error);
    let errorView = `
        <div class="group relative">
            <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="./img/errorimage/error-404-que-es.png" alt="Error loading content">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-lg font-bold text-red-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${error.message}
                </h3>
            </div>
        </div>
    `;
    content.innerHTML = errorView;
}
})();






// con api de yotube

// const API='https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9'

// const content= null || document.getElementById('content');

// const options={
//     method:'GET',
//     headers:{
//         'X-RapidAPI-Host':'youtube-v31.p.rapidapi.com',
//         'X-RapidAPI-Key':'c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256'
//     }
// };

// async function fetchData (urlApi){
//     const response=await fetch(urlApi,options);
//     const data=await response.json();
//     return data;
// }


// (async () => {
// try {
//     const videos = await fetchData(API)
//     console.log(videos); 
//     let view = 
//     `
//         ${videos.items.map(video =>`
//             <div class="group relative">
//                 <div
//                     class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
//                     <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
//                 </div>
//                 <div class="mt-4 flex justify-between">
//                     <h3 class="text-sm text-gray-700">
//                         <span aria-hidden="true" class="absolute inset-0"></span>
//                         ${video.snippet.title}
//                     </h3>
//                 </div>
//             </div>
            
//             `).slice(0,4).join('')}
      
//     `;
//     content.innerHTML = view;
// } catch (error) {
//     console.log(error);
// }
// })();

