var language='fr';
var translations = {
	"Search and directions": "Itinéraires",
	"From:": "De:",
	"To:": "À:",
	"On:": "Sur:",
	"town": "ville",
	"town/blank for suggestions": "ville/vide pour suggestions",
	"Paths & roads": "Toutes surfaces",
	"Paved only": "Pavé seulement",
	"Get route": "Rechercher",
	"Round-trip": "Aller-retour",
	"Suggest a ride": "Suggérer",
	"Click map to add more points": "Cliquez sur la carte pour ajouter",
	"Add at...": "Ajouter à...",
	"Add via point": "Ajouter point intermédiare",
	"Type a place name:": "Entrez un nom de lieu:",
	"Show turn-by-turn instructions": "Afficher les instructions détaillées",
	
	"Route tools": "Outils",
	"Save": "Sauvegarder",
	"Close route": "Fermer",

	"Hotels and campsites": "Hébergements",
	"Shortlisted": "Présélectionné",
	"Find": "Trouver",
	"Self-catering": "Gîtes",
	
	"Route summary": "Sommaire",
	"Total length:": "Distance totale:",
	"Turn by turn": "Directions",
	
	"Your route folders": "Dossiers",
	"(no folder)": "(aucun dossier)",
	"Your saved routes": "Routes sauvegardées",
	"(no routes)": "(aucun routes)",

	"Remove via": "Supprimer point",
	"Go": "Aller",
	"any way": "pavé ou non",
	"paved": "pavé",
	"direct": "direct",
	"Delete before": "Supprimer avant",
	"Delete after": "Supprimer après",
	"to": "jusqu'à",
	"end": "la fin",
	"Find photos": "Trouver des photos",
	"Nearby accommodation": "Hébergements",

	"Enter a name for your route:": "Entrez un nom pour votre route",
	"Save to a folder:": "Enregistrer dans un fichier",
	"Write a description of the route": "Écrire une description",
	"Make this route private": "Route privée",
	"Cancel": "Annuler",
	"Save as": "Enregistrer sous",
	"Save with new name": "Enregistrer sous nouveau nom",
	"in folder:": "dans le fichier",
	
	"Download PDF": "Télécharger PDF",
	"What scale of map do you want?": "Quelle échelle voulez-vous?",
	"City scale (best for short journeys)": "Échelle urbain (pour les courts parcours)",
	"Local scale": "Échelle locale",
	"Touring scale": "Échelle touriste",
	"Long-distance scale (for long rides)": "Échelle longue distance (pour les longs parcours)",
	"Cue-sheet (instructions only, no map)": "Directions seulement",
	"Your PDF will take a short while to prepare.": "Votre PDF prendra quelques secondes à préparer.",
	"Download": "Télécharger",
	"Sorry, that route's too long to export as a single PDF. Please split it into chunks of less than 300km each.": "Désolé, cet itinéraire est trop long pour être exporté en un seul PDF. Veuillez le diviser en morceaux de moins de 300 km chacun.",
	"You must save the route before you can download a PDF.": "Vous devez enregistrer l'itinéraire avant de télécharger un PDF.",
	
	"Download for GPS/phone": "Télécharger pour GPS/mobile",
	"Which format do you want?": "Quel format voulez-vous?",
	"GPX track (for all devices and phones)": "GPX track (pour tous GPS/mobiles)",
	"GPX route (small file, marks turns)": "GPX route (fichier petit avec jonctions)",
	"TCX course (best for new Garmin/Wahoo)": "TCX course (pour nouveau Garmin/Wahoo)",
	"TCX activity (best for Garmin Connect)": "TCX activity (pour Garmin Connect)",
	"KML (for maps.me and Google Earth)": "KML (pour maps.me/Google Earth)",
	"Announce turns": "Annoncer les jonctions",
	"m in advance": "m en avance",
	"GPX track link (copy and paste into apps):": "Lien «GPX track» (copiez-collez dans les apps)",
	"Copy": "Copier",
	"Save your route to get a link that you can paste into phone apps.": "Sauvegardez votre route pour obtenir un lien «GPX track»",
	
	"Preparing...": "En cours de préparation",
	"Please wait while your PDF is prepared.": "Patientez pendant qu'on prépare votre PDF.",
	
	"On foot": "À pied",
	"on foot": "à pied",
	"Border crossing": "Poste frontière",
	"(unnamed route)": "(route anonyme)",
	"seasonal": "saisonnier",
	"rail shuttle": "navette ferroviaire",
	"exit": "sortie",
	"major road": "route principale",
	"ferry": "bac",
	"tunnel": "tunnel",
	"unpaved": "non pavé",
	"website": "site web",
	"becomes": "devient",
	"includes": "comprend",
	"Includes": "Comprend",
	"and": "et",
	"minutes": "minutes",
	"hours": "heures",
	"approx % days": "environ % jours"

};
var translatedDirections = {
	turn_instructions: [ "",
		"Continuer sur ", // Continue on
		"Légèrement à droite", // Bear right
		"À droite", // Turn right
		"Complètement à droite", // Sharp right
		"Faire demi-tour sur ", // U-turn along
		"Complètement à gauche", // Sharp left
		"À gauche", // Turn left
		"Légèrement à gauche", // Bear left
		"Reprendre l'itinéraire", // Resume route
		"Suivre ", // Follow
		"Au rond-point, prendre ", // At roundabout, take
		"Quitter le rond-point - ", // Leave roundabout
		"Rester au rond-point - ", // Stay on roundabout
		"Commencer à la fin de ", // Start at end of
		"Destination atteinte", // Reached destination
		"Démonter pour ", // Dismount for
		"Continuer sur ", // Continue on
		"Traverser %", // Cross %
		"Entrer en ville", // Enter town
		"Quitter la ville", // Leave town
		"Embrancher à droite", // Fork right
		"Embrancher à gauche", // Fork left
		"À droite à travers %", // Turn right across
		"À gauche à travers %" // Turn left across
	],
	optional_prepositions: [ "", 
		// These are the prepositions used for each turn instruction
		// (e.g. "Turn left onto High Street")
		null,"sur","sur","sur",
		null,"sur","sur","sur",
		"sur",null,null,null,null,null,null,null,null,
		"sur",
		"sur",
		"sur",
		"sur",
		"sur",
		"sur",
		"sur"],
	mode_descriptions: [ '',
		'autoroute', // motorway
		'voie express', // trunk road
		'route nationale', // primary road
		'route principale', // secondary road
		'route secondaire', // through road
		'route mineure', // minor road
		'route non pavée', // unpaved road
		'route accidentée', // rough road
		'route non mappée', // unsurveyed road
		"bretelle d'accès", // slip road
		'voie de service', // service road
		'route piétonne', // pedestrianised road
		'piste cyclable', // cycleway
		'sentier cyclable', // cyclable path
		'piste non pavée', // unpaved trail
		'piste accidentée', // rough trail
		'sentier', // path
		'sentier non pavé', // unpaved path
		'route', // road
		'escalier', // steps
		'bac' ], // ferry
	total_mouseover: {
		busy_road: "Route principale", 
		road: "Route pavée", 
		unpaved: "Route non pavée",
		cycleway: "Sans circulation", 
		unpaved_cycleway: "Sans circulation, non pavée", 
		pushing: "À pied",
		ferry: "Bac", 
		rail: "Navette ferroviaire" }
};
translatedDirections.turn_instructions[125] = "Rester"; // Continue
translatedDirections.optional_prepositions[125] = "sur";
translatedDirections.turn_instructions[126] = "Aller direct"; // Go direct
translatedDirections.optional_prepositions[126] = "à";
