'use strict';

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),
    knex('user_types').del(),
    knex('products_video_medias').del(),
    knex('looks_products').del(),
    knex('body_locations').del(),
    knex('products_sets').del(),
    knex('product_categories_products').del(),
    knex('product_categories').del(),
    knex('products').del(),
    knex('product_types').del(),
    knex('brands').del(),
    knex('media_genres').del(),
    knex('matching_statuses').del(),
    knex('social_data').del(),
    knex('product_types').del(),
    knex('locations_video_medias').del(),
    knex('locations').del(),
    knex('character_types').del(),
    knex('media_characters').del(),
    knex('looks').del(),
    knex('sets').del(),
    knex('video_medias_workers').del(),
    knex('workers').del(),
    knex('video_medias').del())
    .then(function () {
        return Promise.join(

        knex('user_types').insert([{ name: 'admin' },
        { name: 'user' }]),

        knex('brands').insert([{ name: 'RayBan' },
        { name: 'Celio' },
        { name: 'Jules' },
        { name: 'H&M' },
        { name: 'Lacoste' },
        { name: 'Richard Mille' },
        { name: 'Calvin Klein Jeans' },
        { name: 'Brice' },
        { name: 'Paul Smith' },
        { name: 'Beliani' },
        { name: 'Drawer' },
        { name: 'Philips' }]),

        knex('body_locations').insert([{ name: 'head' },
        { name: 'chest' },
        { name: 'hands' },
        { name: 'legs' },
        { name: 'feet' }]),
		
		knex('character_types').insert([{ name: 'man' },
        { name: 'woman' },
        { name: 'young girl' },
        { name: 'young boy' },
        { name: 'robot' }]),

        knex('product_types').insert([{ name: 'Mode' },
        { name: 'Décoration' },
        { name: 'Transport' }]),

        knex('matching_statuses').insert([{ name: 'exact', display_name: 'Produit exact' },
        { name: 'close', display_name: 'Produit similaire' }]),

        knex('media_genres').insert([{ name: 'Action' },
        { name: 'Animation' },
        { name: 'Arts Martiaux' },
        { name: 'Aventure' },
        { name: 'Biopic' },
        { name: 'Bollywood' },
        { name: 'Classique' },
        { name: 'Comédie' },
        { name: 'Comédie dramatique' },
        { name: 'Comédie musicale' },
        { name: 'Concert' },
        { name: 'Dessin animé' },
        { name: 'Documentaire' },
        { name: 'Drama' },
        { name: 'Drame' },
        { name: 'Epouvante-horreur' },
        { name: 'Erotique' },
        { name: 'Espionnage' },
        { name: 'Expérimental' },
        { name: 'Famille' },
        { name: 'Fantastique' },
        { name: 'Guerre' },
        { name: 'Historique' },
        { name: 'Judiciaire' },
        { name: 'Movie night' },
        { name: 'Musical' },
        { name: 'Opera' },
        { name: 'Péplum' },
        { name: 'Policier' },
        { name: 'Romance' },
        { name: 'Science fiction' },
        { name: 'Show' },
        { name: 'Sport event' },
        { name: 'Thriller' },
        { name: 'Western' }]),

        knex('social_data').insert([{ likes: 0, share_count: 0 }, { likes: 0, share_count: 0 }]),

        knex('product_categories').insert([{ name: 'Root', path: 'Root' },
        { name: 'Mode', path: 'Root.Mode' },
        { name: 'Homme', path: 'Root.Mode.Homme' },
        { name: 'Vêtements', path: 'Root.Mode.Homme.Vêtements' },
        { name: 'T-shirts', path: 'Root.Mode.Homme.Vêtements.Tshirts' },
        { name: 'Polos', path: 'Root.Mode.Homme.Vêtements.Polos' },
        { name: 'Vestes', path: 'Root.Mode.Homme.Vêtements.Vestes' },
        { name: 'Manteaux', path: 'Root.Mode.Homme.Vêtements.Manteaux' },
        { name: 'Chemises', path: 'Root.Mode.Homme.Vêtements.Chemises' },
        { name: 'Pulls', path: 'Root.Mode.Homme.Vêtements.Pulls' },
        { name: 'Sweats', path: 'Root.Mode.Homme.Vêtements.Sweats' },
        { name: 'Jeans', path: 'Root.Mode.Homme.Vêtements.Jeans' },
        { name: 'Pantalons', path: 'Root.Mode.Homme.Vêtements.Pantalons' },
        { name: 'Shorts', path: 'Root.Mode.Homme.Vêtements.Shorts' },
        { name: 'Costumes', path: 'Root.Mode.Homme.Vêtements.Costumes' },
        { name: 'Gilets', path: 'Root.Mode.Homme.Vêtements.Gilets' },
        { name: 'Sous-vêtements', path: 'Root.Mode.Homme.Sousvêtements' },
        { name: 'Maillots de bain', path: 'Root.Mode.Homme.Maillots_de_bain' },
        { name: 'Chaussures', path: 'Root.Mode.Homme.Chaussures' },
        { name: 'Baskets', path: 'Root.Mode.Homme.Chaussures.Baskets' },
        { name: 'Chaussures de ville', path: 'Root.Mode.Homme.Chaussures.Chaussures_de_ville' },
        { name: 'Mocassins', path: 'Root.Mode.Homme.Chaussures.Mocassins' },
        { name: 'Espadrilles', path: 'Root.Mode.Homme.Chaussures.Espadrilles' },
        { name: 'Sandales', path: 'Root.Mode.Homme.Chaussures.Sandales' },
        { name: 'Sacs et accessoires', path: 'Root.Mode.Homme.Sacs_et_accessoires' },
        { name: 'Sacs', path: 'Root.Mode.Homme.Sacs_et_accessoires.Sacs' },
        { name: 'Montres', path: 'Root.Mode.Homme.Sacs_et_accessoires.Montres' },
        { name: 'Ceintures', path: 'Root.Mode.Homme.Sacs_et_accessoires.Ceintures' },
        { name: 'Echarpes et foulards', path: 'Root.Mode.Homme.Sacs_et_accessoires.Echarpes_et_foulards' },
        { name: 'Lunettes', path: 'Root.Mode.Homme.Sacs_et_accessoires.Lunettes' },
        { name: 'Chapeaux et casquettes', path: 'Root.Mode.Homme.Sacs_et_accessoires.Chapeaux_et_casquettes' },
        { name: 'Bagages', path: 'Root.Mode.Homme.Sacs_et_accessoires.Bagages' },
        { name: 'Femme', path: 'Root.Mode.Femme' },
        { name: 'Vêtements', path: 'Root.Mode.Femme.Vêtements' },
        { name: 'Robes', path: 'Root.Mode.Femme.Vêtements.Robes' },
        { name: 'Jupes', path: 'Root.Mode.Femme.Vêtements.Jupes' },
        { name: 'Tops et T-shirts', path: 'Root.Mode.Femme.Vêtements.Tops_et_Tshirts' },
        { name: 'Débardeurs', path: 'Root.Mode.Femme.Vêtements.Débardeurs' },
        { name: 'Vestes et manteaux', path: 'Root.Mode.Femme.Vêtements.Vestes_et_manteaux' },
        { name: 'Jeans', path: 'Root.Mode.Femme.Vêtements.Jeans' },
        { name: 'Chemises et blouses', path: 'Root.Mode.Femme.Vêtements.Chemises_et_blouses' },
        { name: 'Pantalon et shorts', path: 'Root.Mode.Femme.Vêtements.Pantalons_et_shorts' },
        { name: 'Pulls et gilets', path: 'Root.Mode.Femme.Vêtements.Pulls_et_gilets' },
        { name: 'Maillots de bain', path: 'Root.Mode.Femme.Maillots_de_bain' },
        { name: 'Lingerie', path: 'Root.Mode.Femme.Lingerie' },
        { name: 'Soutiens-gorges', path: 'Root.Mode.Femme.Lingerie.Soutiensgorges' },
        { name: 'Culottes', path: 'Root.Mode.Femme.Lingerie.Culottes' },
        { name: 'Collants', path: 'Root.Mode.Femme.Lingerie.Collants' },
        { name: 'Homewear', path: 'Root.Mode.Femme.Lingerie.Homewear' },
        { name: 'Sacs et accessoires', path: 'Root.Mode.Femme.Sacs_et_accessoires' },
        { name: 'Sacs', path: 'Root.Mode.Femme.Sacs_et_accessoires.Sacs' },
        { name: 'Montres', path: 'Root.Mode.Femme.Sacs_et_accessoires.Montres' },
        { name: 'Bijoux', path: 'Root.Mode.Femme.Sacs_et_accessoires.Bijoux' },
        { name: 'Echarpes et foulards', path: 'Root.Mode.Femme.Sacs_et_accessoires.Echarpes_et_foulards' },
        { name: 'Chapeaux', path: 'Root.Mode.Femme.Sacs_et_accessoires.Chapeaux' },
        { name: 'Lunettes', path: 'Root.Mode.Femme.Sacs_et_accessoires.Lunettes' },
        { name: 'Chaussures', path: 'Root.Mode.Femme.Chaussures' },
        { name: 'Sandales', path: 'Root.Mode.Femme.Chaussures.Sandales' },
        { name: 'Baskets', path: 'Root.Mode.Femme.Chaussures.Baskets' },
        { name: 'Bottines et bottes', path: 'Root.Mode.Femme.Chaussures.Bottines_et_bottes' },
        { name: 'Ballerines', path: 'Root.Mode.Femme.Chaussures.Ballerines' },
        { name: 'Escarpins', path: 'Root.Mode.Femme.Chaussures.Escarpins' },
        { name: 'Mocassins', path: 'Root.Mode.Femme.Chaussures.Mocassins' },
        { name: 'Espadrilles', path: 'Root.Mode.Femme.Chaussures.Espadrilles' },
        { name: 'Enfant', path: 'Root.Mode.Enfant' },
        { name: 'Garçon', path: 'Root.Mode.Enfant.Garçon' },
        { name: 'Vestes et manteaux', path: 'Root.Mode.Enfant.Garçon.Vestes_et_manteaux' },
        { name: 'Pulls et gilets', path: 'Root.Mode.Enfant.Garçon.Pulls_et_gilets' },
        { name: 'T-shirts et chemises', path: 'Root.Mode.Enfant.Garçon.Tshirts_et_chemises' },
        { name: 'Shorts et bermudas', path: 'Root.Mode.Enfant.Garçon.Shorts_et_bermudas' },
        { name: 'Jeans et pantalons', path: 'Root.Mode.Enfant.Garçon.Jeans_et_pantalons' },
        { name: 'Sous-vêtements et pyjamas', path: 'Root.Mode.Enfant.Garçon.Sousvêtements_et_pyjamas' },
        { name: 'Maillots de bain', path: 'Root.Mode.Enfant.Garçon.Maillots_de_bain' },
        { name: 'Fille', path: 'Root.Mode.Enfant.Fille' },
        { name: 'Robes', path: 'Root.Mode.Enfant.Fille.Robes' },
        { name: 'Jupes', path: 'Root.Mode.Enfant.Fille.Jupes' },
        { name: 'Tops, blouses et chemises', path: 'Root.Mode.Enfant.Fille.Tops_blouses_et_chemises' },
        { name: 'Débardeurs', path: 'Root.Mode.Enfant.Fille.Débardeurs' },
        { name: 'Vestes et manteaux', path: 'Root.Mode.Enfant.Fille.Vestes_et_manteaux' },
        { name: 'Jeans et pantalons', path: 'Root.Mode.Enfant.Fille.Jeans_et_pantalons' },
        { name: 'Chemises et blouses', path: 'Root.Mode.Enfant.Fille.Chemises_et_blouses' },
        { name: 'Shorts et pantacourts', path: 'Root.Mode.Enfant.Fille.Shorts_et_pantacourts' },
        { name: 'Pulls et gilets', path: 'Root.Mode.Enfant.Fille.Pulls_et_gilets' },
        { name: 'Sous-vêtements et pyjamas', path: 'Root.Mode.Enfant.Fille.Sousvêtements_et_pyjamas' },
        { name: 'Maillots de bain', path: 'Root.Mode.Enfant.Fille.Maillots_de_bain' },
        { name: 'Décoration et High Tech', path: 'Root.Décoration_et_High_Tech' },
        { name: 'Chaises et tabourets', path: 'Root.Décoration.Chaises_et_tabourets' },
        { name: 'Canapés et fauteuils', path: 'Root.Décoration.Canapés_et_fauteuils' },
        { name: 'Luminaires', path: 'Root.Décoration.Luminaires' },
        { name: 'Horloges et miroirs', path: 'Root.Décoration.Horloges_et_miroirs' },
        { name: 'Mobilier', path: 'Root.Décoration.Mobilier' },
        { name: 'Sculptures', path: 'Root.Décoration.Sculptures' },
        { name: 'Tableaux et posters', path: 'Root.Décoration.Tableaux_et_posters' },
        { name: 'Accessoires de déco', path: 'Root.Décoration.Accessoires_de_déco' },
        { name: 'High Tech', path: 'Root.Décoration.HighTech' },
        { name: 'Transport', path: 'Root.Transport' },
        { name: 'Voitures', path: 'Root.Transport.Voitures' },
        { name: 'Avions', path: 'Root.Transport.Avions' },
        { name: 'Motos', path: 'Root.Transport.Motos' },
        { name: 'Divers', path: 'Root.Transport.Divers' }]),
        
        knex('worker_types').insert([{ name: 'director' },
        { name: 'actor' },
        { name: 'costume supervisor' },
        { name: 'key set decorator' },
        { name: 'set dresser' }]));
    })
    .then(function () {
        return Promise.join(
		
		knex('media_characters').insert([{ firstname: 'Samuel', lastname: 'Doe', nickname: 'Sam' }]),
		
		knex('workers').insert([{ firstname: 'Igor', lastname: 'Gotesman' },
        { firstname: 'Pierre', lastname: 'Niney' },
        { firstname: 'François', lastname: 'Civil' },
        { firstname: 'Margot', lastname: 'Bancilhon' },
        { firstname: 'Idrissa', lastname: 'Hanrot' },
        { firstname: 'Elise', lastname: 'Bouquet' },
        { firstname: 'Reem', lastname: 'Kuzayli' },
        { firstname: 'Nicolas', lastname: 'de Boiscuillé' },
        { firstname: 'Muriel', lastname: 'Chinal' }]),
				
        knex('users').insert([{ username: 'admin', password: '$2a$10$lYdRv5bHQvsyuSmTPKLGqubvy8V.uHXQP17gJ2lGBDKXsCcxda5iO', email: 'admin@pickedin.com', user_type_id: 1 }]),

        knex('products').insert([{ name: 'WayFarer', description: 'Repensées 30 ans plus tard par la célèbre marque, les new wayfarer n’ont déjà plus rien à envier à la génération précédente et connaissent, cet été, elles-aussi un phénoménal succès. Leurs lignes rondes et douces séduisent avant tout les femmes et siéent à merveille aux petits visages.', picture_url: '/images/lunettes.jpg', picture_alt: 'Rayban New Wayfarer', picture_title: 'Rayban New Wayfarer', commercial_url: 'https://www.opticaldiscount.com/fr/lunettes-de-soleil-femme-ray-ban-2132-new-wayfarer-601s78-55-ray-ban-rb-2132-new-wayfarer-601s78-55.html?p=AOzcjMtcDNsYDN', price: 270.00, brand_id: 1, product_type_id: 1 },
        { name: 'Foulard écossais', description: 'Chèche Uni, Toucher Doux. Parfait Pour Mêler Elégance et Praticité, 100% Polyviscose', picture_url: '/images/foulard.jpg', picture_alt: 'Chèche tendance', picture_title: 'Chèche tendance', commercial_url: 'http://www.jules.com/fr/p/cheche-uni-chine--700501.html?dwvar_700501_color=8010#q=CH%C3%83%C2%88CHE+UNI%2C+CHIN%C3%83%C2%89&start=1&paging_size=84', price: 15.99, brand_id: 3, product_type_id: 1 },
        { name: 'Chapeau borsalino', description: 'Chapeau homme style borsalino. Coloris uni noir. Bande de tissu ton sur ton sur la base du chapeau. Coutures apparentes sur les bords. Chapeau celio en coton. Le plus produit : Le style borsalino du chapeau.', picture_url: '/images/chapeau.jpg', picture_alt: 'Chapeau borsalino', picture_title: 'Chapeau borsalino', commercial_url: 'http://www.celio.com/CELIO_ALL/03-12-ACCESSORY/HAT%26CAP/hat%26cap/Chapeau-style-borsalino/p/1005321', price: 17.99, brand_id: 2, product_type_id: 1 },
        { name: 'Blazer Slim Fit', description: 'Blazer tissé. Modèle avec boutonnière décorative sur le revers, poche de poitrine et poches à rabat devant. Boutonnage en bas de manche et fente dans le dos. Deux poches intérieures dont une boutonnée. Doublé. Slim fit.', picture_url: '/images/veste.jpg', picture_alt: 'Veste de costume', picture_title: 'Veste de costume', commercial_url: 'http://www2.hm.com/fr_fr/productpage.0241602003.html', price: 59.99, brand_id: 4, product_type_id: 1 },
        { name: 'Polo Slim Fit piqué mercerisé uni', description: 'Chic et décontracté, ce beau polo Lacoste confectionné en piqué de coton mercerisé est orné de boutons en nacre. Un modèle casual et élégant à adopter en toute circonstance.', picture_url: '/images/polo.jpg', picture_alt: 'Polo Lacoste', picture_title: 'Polo Lacoste', commercial_url: 'http://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-slim-fit-lacoste-en-pique-mercerise-uni/PH5031-00.html?dwvar_PH5031-00_color=3GF&lang=fr', price: 130.00, brand_id: 5, product_type_id: 1 },
        { name: 'RM 35-01', description: 'Une montre d\exception', picture_url: '/images/montre.jpg', picture_alt: 'RM 35-01', picture_title: 'RM 35-01', commercial_url: 'http://www.richardmille.com/watch/rm-035-01/?collection=homme', price: 80000, brand_id: 6, product_type_id: 1 },
        { name: 'Ceinture en toile à boucle plaque', description: 'Confectionnée en toile robuste, cette ceinture possède une boucle logotypée en métal mat.', picture_url: '/images/ceinture.jpg', picture_alt: 'Ceinture CK', picture_title: 'Ceinture CK', commercial_url: 'http://fr.calvinklein.com/store/fr/ceinture-en-toile-%C3%A0-boucle-plaque-k50k500972020--2', price: 29.90, brand_id: 7, product_type_id: 1 },
        { name: 'Pantalon stretch', description: 'Pantalon de costume, coupe easy slim. Matière avec un léger relief. Présence d\'élasthanne pour plus de confort.', picture_url: '/images/pantalon.jpg', picture_alt: 'Pantalon de costume stretch', picture_title: 'Pantalon de costume stretch', commercial_url: 'http://www.brice.fr/e-boutique/pantalon/pantalon-costume/pantalon-costume/614785.html?dwvar_614785_color=8010#q=PANTALON+DE+COSTUME&start=11', price: 39.95, brand_id: 8, product_type_id: 1 },
        { name: 'Starling', description: 'Chaussures Oxford homme « Starling » lie de vin avec détail couture bombée sur l\'empeigne et détail motif « Vintage Stripe » (rayures vintage) au talon.', picture_url: '/images/chaussures.jpg', picture_alt: 'Paul Smith Starling', picture_title: 'Paul Smith Starling', commercial_url: 'http://www.paulsmith.fr/men-s-bordeaux-high-shine-leather-starling-shoes.html', price: 250.00, brand_id: 9, product_type_id: 1 },
        { name: 'Ottoman cuir vachette', description: 'Pouf cuir très agréable avec ressort résistants. Le cuir de vachette apporte douceur et résistance.', picture_url: '/images/pouf.jpg', picture_alt: 'Pouf Beliani', picture_title: 'Pouf Beliani', commercial_url: 'https://www.beliani.fr/meubles-de-salon/canapes-en-cuir/poof-repose%20pied-vintage-cuir-adam.html', price: 899.00, brand_id: 10, product_type_id: 2 },
        { name: 'Maitresse', description: 'Tabouret de bar oldschool et sobre. Parfait pour recevoir des amis autour d\'un verre. Piètement métallique et assise en bois.', picture_url: '/images/tabouret.jpg', picture_alt: 'Tabouret maitresse par Drawer', picture_title: 'Tabouret maitresse par Drawer', commercial_url: 'http://www.drawer.fr/tabouret-bar/600764-lot-de-2-tabourets-de-bar-vintage-maitresse-3700820505521.html', price: 149.90, brand_id: 11, product_type_id: 2 },
        { name: 'HD 4618/20', description: 'La fonction « indicateur 1 tasse » de cette mini-bouilloire électrique Philips HD4618/20 vous permet de ne chauffer que la quantité d\'eau nécessaire. Vous pouvez ainsi économiser jusqu\'à 50 % d\'énergie très facilement et réduire votre impact sur l\'environnement.', picture_url: '/images/bouilloire.jpg', picture_alt: 'Bouilloire Philips HD 4618/20', picture_title: 'Bouilloire Philips HD 4618/20', commercial_url: 'http://www.philips.fr/c-p/HD4618_20/mini-bouilloire', price: 39.90, brand_id: 12, product_type_id: 2 }]),

        knex('locations').insert([{ name: 'Parc national de Yosemite', description: 'Le parc national de Yosemite se situe dans les montagnes de la Sierra Nevada, dans l\'est de la Californie, aux États-Unis. Avec une superficie totale de 3 079 km2, il est le troisième plus grand parc de Californie.<br />Classé parc national en 1890, le Yosemite est le deuxième plus ancien de l’histoire américaine, après celui de Yellowstone.Plus de 3,5 millions de touristes le fréquentent chaque année, ce qui en fait, avec le Grand Canyon du Colorado et les Great Smoky Mountains, l’un des sites naturels les plus visités du pays. Ses chutes d’eau et ses dômes granitiques spectaculaires attirent chaque année des milliers de randonneurs et de grimpeurs venant du monde entier. Le Yosemite est un parc de haute montagne dont la diversité naturelle et paysagère a été reconnue patrimoine de l’humanité par l’UNESCO en 1984. Mais l’intense fréquentation touristique, au printemps et en été, pose des problèmes environnementaux dans la vallée de Yosemite.', city_state_country: 'Californie - USA', picture_url: '/images/location1.jpg', picture_alt: 'Parc national de Yosemite', picture_title: 'Parc national de Yosemite', place_id: 'ChIJxeyK9Z3wloAR_gOA7SycJC0', latitude: '37.8637956', longitude: '-119.5398457', zoom: '7'}]),

        knex('video_medias').insert([{ title: 'Five', description: 'Five est une comédie française écrite et réalisée par Igor Gotesman, sortie en 2016.', theater_release_date: new Date(Date.UTC(2016, 3, 30)), tv_release_date: new Date(Date.UTC(2017, 1, 1)), duration: 120, poster_url: '/images/five-poster.jpg', poster_alt: 'Five', poster_title: 'Five - un film à voir entre amis', video_url: 'https://www.youtube.com/watch?v=9Lij2vKRCBc', video_caption: 'Five, un film à voir entre amis !', synopsis: 'Cinq amis d\'enfance rêvent depuis toujours d\'habiter en colocation. Lorsque l’occasion d’emménager ensemble se présente, Julia, Vadim, Nestor et Timothée n’hésitent pas une seule seconde, surtout quand Samuel se propose de payer la moitié du loyer ! A peine installés, Samuel se retrouve sur la paille mais décide de ne rien dire aux autres et d\'assumer sa part en se mettant à vendre de l\'herbe. Mais n\'est pas dealer qui veut et quand tout dégénère, Samuel n’a d’autres choix que de se tourner vers la seule famille qu\'il lui reste : ses amis !', tv_broadcaster: 'Canal+', media_genre_id: 8, social_data_id: 1 },
        { title: 'Five2', description: 'Five est une comédie française écrite et réalisée par Igor Gotesman, sortie en 2016.', theater_release_date: new Date(Date.UTC(2016, 3, 30)), tv_release_date: new Date(Date.UTC(2017, 1, 1)), duration: 120, poster_url: '/images/five-poster.jpg', poster_alt: 'Five', poster_title: 'Five - un film à voir entre amis', video_url: 'https://www.youtube.com/watch?v=9Lij2vKRCBc', video_caption: 'Five, un film à voir entre amis !', synopsis: 'Cinq amis d\'enfance rêvent depuis toujours d\'habiter en colocation. Lorsque l’occasion d’emménager ensemble se présente, Julia, Vadim, Nestor et Timothée n’hésitent pas une seule seconde, surtout quand Samuel se propose de payer la moitié du loyer ! A peine installés, Samuel se retrouve sur la paille mais décide de ne rien dire aux autres et d\'assumer sa part en se mettant à vendre de l\'herbe. Mais n\'est pas dealer qui veut et quand tout dégénère, Samuel n’a d’autres choix que de se tourner vers la seule famille qu\'il lui reste : ses amis !', tv_broadcaster: 'Canal+', media_genre_id: 8, social_data_id: 2 }]));
    }).then(function () {
        return Promise.join(

        knex('looks').insert([{ name: 'Look de Samuel', description: 'Découvrez Samuel dans un look bon chic bon genre.', time_codes: [2, 5, 15], media_character_id: 1, video_media_id: 1 }]),

        knex('sets').insert([{ name: 'Salon de la coloc\'', description: 'Le parc national de Yosemite se situe dans les montagnes de la Sierra Nevada, dans l\'est de la Californie, aux États-Unis. Avec une superficie totale de 3 079 km2, il est le troisième plus grand parc de Californie. Classé parc national en 1890, le Yosemite est le deuxième plus ancien de l’histoire américaine, après celui de Yellowstone. Plus de 3,5 millions de touristes le fréquentent chaque année, ce qui en fait, avec le Grand Canyon du Colorado et les Great Smoky Mountains, l’un des sites naturels les plus visités du pays. Ses chutes d’eau et ses dômes granitiques spectaculaires attirent chaque année des milliers de randonneurs et de grimpeurs venant du monde entier.', picture_url: '/images/set.jpg', picture_alt: 'Salon de la coloc\'', picture_title: 'Salon de la coloc\'', place: 'Paris - France', time_codes: [3, 6, 17], video_media_id: 1 }]));
    }).then(function () {
        return Promise.join(

        knex('product_categories_products')
        .insert([{ product_id: 1, product_category_id: 30 },
            { product_id: 2, product_category_id: 29 },
            { product_id: 3, product_category_id: 31 },
            { product_id: 4, product_category_id: 7 },
            { product_id: 5, product_category_id: 6 },
            { product_id: 6, product_category_id: 27 },
            { product_id: 7, product_category_id: 28 },
            { product_id: 8, product_category_id: 13 },
            { product_id: 9, product_category_id: 21 },
            { product_id: 10, product_category_id: 88 },
            { product_id: 11, product_category_id: 87 },
            { product_id: 12, product_category_id: 95 }]),
			
        knex('products_video_medias').insert({ product_id: 1, video_media_id: 1, matching_status_id: 1, time_codes: [1, 5, 25], appearing_context: 'Le père de Samuel le répudie après s\'être rendu compte qu\'il ne suivait pas ses études de chirurgien et profitait de son argent pour mener la grande vie avec ses amis.' }),

        knex('video_medias_workers')
        .insert([{ worker_id: 1, video_media_id: 1, worker_type_id: 1 },
        { worker_id: 1, video_media_id: 1, worker_type_id: 2 },
        { worker_id: 2, video_media_id: 1, worker_type_id: 2 },
        { worker_id: 3, video_media_id: 1, worker_type_id: 2 },
        { worker_id: 4, video_media_id: 1, worker_type_id: 2 },
        { worker_id: 5, video_media_id: 1, worker_type_id: 2 },
        { worker_id: 6, video_media_id: 1, worker_type_id: 3 },
        { worker_id: 7, video_media_id: 1, worker_type_id: 3 },
        { worker_id: 8, video_media_id: 1, worker_type_id: 4 },
        { worker_id: 9, video_media_id: 1, worker_type_id: 5 }]),
            
        knex('locations_video_medias')
        .insert([{ appearing_context: 'Context', time_codes: [4, 10], location_id: 1, video_media_id: 1 }]),

        knex('looks_products')
        .insert([{ matching_status_id: 1, appearing_context: 'Context', order: 1, body_location_id: 1, look_id: 1, product_id: 1 },
        { matching_status_id: 1, appearing_context: 'Context', order: 2, body_location_id: 1, look_id: 1, product_id: 2 },
        { matching_status_id: 2, appearing_context: 'Context', order: 3, body_location_id: 1, look_id: 1, product_id: 3 },
        { matching_status_id: 1, appearing_context: 'Context', order: 1, body_location_id: 2, look_id: 1, product_id: 4 },
        { matching_status_id: 2, appearing_context: 'Context', order: 2, body_location_id: 2, look_id: 1, product_id: 5 },
        { matching_status_id: 2, appearing_context: 'Context', body_location_id: 3, look_id: 1, product_id: 6 },
        { matching_status_id: 1, appearing_context: 'Context', order: 1, body_location_id: 4, look_id: 1, product_id: 7 },
        { matching_status_id: 1, appearing_context: 'Context', order: 2, body_location_id: 4, look_id: 1, product_id: 8 },
        { matching_status_id: 2, appearing_context: 'Context', body_location_id: 5, look_id: 1, product_id: 9 }]),
        
        knex('products_sets')
        .insert([{ matching_status_id: 2, appearing_context: 'Context', x_offset: 580, y_offset: 280, set_id: 1, product_id: 10 },
        { matching_status_id: 1, appearing_context: 'Context', x_offset: 750, y_offset: 200, set_id: 1, product_id: 11 },
        { matching_status_id: 2, appearing_context: 'Context', x_offset: 860, y_offset: 130, set_id: 1, product_id: 12 }]));
    });
};