
const entre = document.querySelector('.entre');
const  infos = document.querySelector('.infos');
const clique = document.querySelector('.clique');


    async function dataGithub(question) {

        const reponse = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=12&srsearch="${question}`)
        const data = await reponse.json();
       console.log(data)
       let donner = data.query.search;


       donner.forEach((result)  => {
        let resultURL = `https://fr.wikipedia.org/wiki/${result.title}`;
        console.log(resultURL);
        infos.innerHTML+=`
            <div class="col-md-3 col-sm-12">
                <div class="card py-2 my-2">
                <p class="text-center"><h3">${result.title}</h3></p>
                <p>${result.snippet}</p>
                <p><a href="${resultURL}">Voir plus</a></p>
                </div>
            </div>
        `
       //console.log(result);
    });
     }

   

     clique.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let valeur = entre.value;
      infos.innerHTML = ''
      if(valeur !== ''){
        dataGithub(valeur) 
        entre.value =''
    }
})
