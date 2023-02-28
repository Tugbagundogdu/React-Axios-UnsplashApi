import axios from 'axios';

const searchImages = async (prmt) =>{

    const response = await axios.get('https://api.unsplash.com/search/photos', {
       headers:{
         Authorization: 'Client-ID 6LVXLF_aXytV1OPR_dqNNPVyBmlThYm5FVgv9srJ5tY'
             },
         params:{
           query:prmt
         }
     })
 
     debugger;
     return response.data.results;
 
   }

   export default searchImages;