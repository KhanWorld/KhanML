jQuery.extend( KhanUtil, {

	NL: {
		werkwoordmap: [
				//Type 1 Werkwoorden waarbij -EN de stam geeft
			[
				["barsten","barst"],
				["bedriegen","bedrieg"],
				["bergen","berg"],
				["bezwijken","bezwijk"],
				["bieden","bied"],
				["bijten","bijt"],
				["binden","bind"],
				["blijken","blijk"],
				["blinken","blink"],
				["bouwen","bouw"],
				["breien","brei"],
				["brengen","breng"],
				["brouwen","brouw"],
				["buigen","buig"],
				["denken","denk"],
				["dringen","dring"],
				["drinken","drink"],
				["druipen","druip"],
				["duiken","duik"],
				["dwingen","dwing"],
				["fietsen","fiets"],
				["fluiten","fluit"],
				["gelden","geld"],
				["genieten","geniet"],
				["gieten","giet"],
				["glijden","glijd"],
				["grijpen","grijp"],
				["hangen","hang"],
				["helpen","help"],
				["hijsen","hijs"],
				["houden","houd"],
				["kijken","kijk"],
				["klinken","klink"],
				["knijpen","knijp"],
				["komen","kom"],
				["krijgen","krijg"],
				["krijsen","krijs"],
				["krimpen","krimp"],
				["kruipen","kruip"],
				["lachen","lach"],
				["liegen","lieg"],
				["lijden","lijd"],
				["lijken","lijk"],
				["melken","melk"],
				["mijden","mijd"],
				["moeten","moet"],
				["rijden","rijd"],
				["rijgen","rijg"],
				["roepen","roep"],
				["ruiken","ruik"],
				["scheiden","scheid"],
				["schelden","scheld"],
				["schenden","schend"],
				["schenken","schenk"],
				["schieten","schiet"],
				["schijnen","schijn"],
				["schijten","schijt"],
				["schrijden","schrijd"],
				["schuilen","schuil"],
				["slijpen","slijp"],
				["slijten","slijt"],
				["slinken","slink"],
				["sluipen","sluip"],
				["sluiten","sluit"],
				["smelten","smelt"],
				["smijten","smijt"],
				["snijden","snijd"],
				["snuiten","snuit"],
				["splijten","splijt"],
				["springen","spring"],
				["spuiten","spuit"],
				["stijgen","stijg"],
				["stinken","stink"],
				["strijden","strijd"],
				["strijken","strijk"],
				["vangen","vang"],
				["vechten","vecht"],
				["verdwijnen","verdwijn"],
				["verslinden","verslind"],
				["verzwelgen","verzwelg"],
				["vinden","vind"],
				["vlechten","vlecht"],
				["vliegen","vlieg"],
				["vluchten","vlucht"],
				["vouwen","vouw"],
				["vrijen","vrij"],
				["waaien","waai"],
				["werken","werk"],
				["werpen","werp"],
				["wijken","wijk"],
				["wijten","wijt"],
				["winden","wind"],
				["worden","word"],
				["wringen","wring"],
				["zeiken","zeik"],
				["zenden","zend"],
				["zingen","zing"],
				["zinken","zink"],
				["zoeken","zoek"],
				["zouten","zout"],
				["zuigen","zuig"],
				["zuipen","zuip"],
				["zwaaien","zwaai"],
				["zwijgen","zwijg"]
			],
				// Type 2 Werkwoorden waarbij eerst -EN, dan extra klinker
			[
				["bevelen","beveel"],
				["braden","braad"],
				["breken","breek"],
				["dragen","draag"],
				["ervaren","ervaar"],
				["eten","eet"],
				["heten","heet"],
				["jagen","jaag"],
				["klagen","klaag"],
				["kopen","koop"],
				["laden","laad"],
				["laten","laat"],
				["lopen","loop"],
				["meten","meet"],
				["nemen","neem"],
				["plegen","pleeg"],
				["raden","raad"],
				["raken","raak"],
				["scheren","scheer"],
				["slapen","slaap"],
				["spreken","spreek"],
				["spugen","spuug"],
				["steken","steek"],
				["stelen","steel"],
				["stoten","stoot"],
				["treden","treed"],
				["varen","vaar"],				
				["vergeten","vergeet"],
				["vragen","vraag"],
				["vreten","vreet"],
				["wegen","weeg"],
				["weten","weet"],
				["wreken","wreek"],
				["zweren","zweer"],
				["zweten","zweet"]
			],
				// Type 3 Werkwoorden -EN en dan 1 van dubbele medeklinker weghalen
			[
				["bakken","bak"],
				["bannen","ban"],
				["beginnen","begin"],
				["glimmen","glim"],
				["heffen","hef"],
				["klimmen","klim"],
				["leggen","leg"],
				["liggen","lig"],
				["scheppen","schep"],
				["schrikken","schrik"],
				["spannen","span"],
				["spinnen","spin"],
				["treffen","tref"],
				["trekken","trek"],
				["vallen","val"],
				["wassen","was"],
				["willen","wil"],
				["winnen","win"],
				["zeggen","zeg"],
				["zinnen","zin"],
				["zitten","zit"],
				["zwellen","zwel"],
				["zwemmen","zwem"]
			],
				// Type 4 Gebruiken we nu nog niet in stam werkwoorden
			[
				["zijn", "ben"]
			]
		]
	},

	randomWerkwoordset: function(type){
		type--
		return this.NL.werkwoordmap[type][
			Math.floor(Math.random()*this.NL. werkwoordmap[type].length)
		]
	},

	shuffle: function( array, count ) {
		array = [].slice.call( array, 0 );
		var beginning = typeof count === "undefined" || count > array.length ? 0 : array.length - count;

		for ( var top = array.length; top > beginning; top-- ) {
			var newEnd = Math.floor(KhanUtil.random() * top),
				tmp = array[newEnd];

			array[newEnd] = array[top - 1];
			array[top - 1] = tmp;
		}

		return array.slice(beginning);
	}

});
