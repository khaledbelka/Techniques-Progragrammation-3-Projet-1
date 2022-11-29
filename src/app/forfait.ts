export interface Forfait {
        nom: string,
        description: string,
        code: number,
        categories: string,
        etablissement :string,
        coordonnees : string,
        site_web : string,
        details : string,
        date_debut : Date,
        date_fin : Date,
        prix : number,
        nouveau_prix: number,
        economie:number,
        premium: boolean,
        avis: number,
        note: number,
        commentaires: string,

}
export const FORFAITS: Forfait []= [
    { 
      nom : 'VOYAGE DE RÊVE À DUBAI',
      description: 'Forfait 30-Jours à Dubai avec vols',
      code: 1,
      categories: 'Offre séjours',
      etablissement :'Agence de Voyages 100% Québecoise',
      coordonnees :' forfaits@wing.com',
      site_web : 'voyagesoleil.com',
      details : 'VOLS INTERNATIONAUX , ACCUEILS ET TRANSFERTS A HÔTELS, 14 REPAS, EXCURSIONS',
      date_debut :new Date (24-12-2022),
      date_fin : new Date (24-1-2023),
      prix : 2500,
      nouveau_prix: 2300,
      economie: 200,
      premium: true,
      avis: 1758,
      note: 4.8,
      commentaires: 'Sed ut perspiciatis unde omnis',
      },
      {
      nom : 'Promos séjours nouvel an',
      description: 'Réveillon 2023',
      code: 2,
      categories: 'Hotel 5 etoile',
      etablissement :'Paris Belleville',
      coordonnees :'abc123@paris.com',
      site_web : 'Parisbelleville.com',
      details : 'meilleur rapport qualité-prix à Paris',
      date_debut :new Date (31-12-2022),
      date_fin : new Date (2-1-2023),
      prix : 4500,
      nouveau_prix: 3300,
      economie: 1200,
      premium: true,
      avis: 583758,
      note: 4.7,
      commentaires: 'Sed ut perspiciatis unde omnis',
      },
      {
        nom : 'Vacances Rio de Janeiro',
        description: 'JW Marriott Hotel Rio de Janeiro',
        code: 3,
        categories: 'Hotel 5 etoile',
        etablissement :'Copacabana voyage',
        coordonnees :'abc123@rio.com',
        site_web : 'hotelrioplage.com',
        details : 'Installé sur le front de mer de Copacabana, avec une vue superbe sur la plus célèbre plage de Rio et ses eaux cristallines',
        date_debut :new Date (24-12-2022),
        date_fin : new Date (24-1-2023),
        prix : 1500,
        nouveau_prix: 1100,
        economie: 400,
        premium: true,
        avis: 702,
        note: 4.3/5,
        commentaires: 'Excellent',
        },
        {
          nom : 'Forfaits pour la Coupe du Monde 2022',
          description: 'Planifiez votre expérience de Coupe du Monde',
          code: 4,
          categories: 'Offre séjours',
          etablissement :'HAVAS VOYAGES SPORTS ',
          coordonnees :'abc123@hava.com',
          site_web : 'havavoyage.com',
          details : 'Chaque forfait inclutles vols,hébergement et les billets pour les matchs',
          date_debut :new Date (24-11-2022),
          date_fin : new Date (24-12-2023),
          prix : 8500,
          nouveau_prix: 7300,
          economie: 1000,
          premium: true,
          avis: 175853,
          note: 4.7,
          commentaires: 'Excellent',
          },
          {
            nom : 'Hotel Grand Majestic Plaza 4*',
            description: 'Week-end à Prague',
            code: 1,
            categories: 'Reservation Hotel 4 etoile',
            etablissement :'leclerc voyage',
            coordonnees :'abc123@leclerc.com',
            site_web : 'leclercvoyag.com',
            details : 'Voyages République Tchèque - Prague',
            date_debut :new Date (24-12-2022),
            date_fin : new Date (24-1-2023),
            prix : 1500,
            nouveau_prix: 1300,
            economie: 200,
            premium: false,
            avis: 158,
            note: 4.2,
            commentaires: 'Sed ut perspiciatis unde omnigdfs',
            },

      ]
  