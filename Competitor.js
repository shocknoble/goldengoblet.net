class Competitor {

	constructor(object) {
		this.name = object.name;
		this.bronze = object.Bronze;
		this.silver = object.Silver;
		this.gold = object.Gold;
		this.score = this.gold*3 + this.silver*2 + this.bronze;

		this.wins = object.Wins;
		this.standing;
	}
}

var competitors = [
	
		{	"Name":"Ryan Letourneau",
			"Handle":"Northernlion",
			"Gold":19,
			"Silver":17,
			"Bronze":10,
			"Wins":[
				"Spelunky",
				"Slay the Spire"
			]
		},
		{
			"Name":"Michael AL Fox",
			"Handle":"MALF",
			"Gold":19,
			"Silver":15,
			"Bronze":12,
			"Wins":[
				"Escape From Tarkov",
				"Hitman 2"
			]
		},
		{
			"Name":"Dan Gheesling",
			"Handle":"dangheesling",
			"Gold":9,
			"Silver":13,
			"Bronze":24,
			"Wins":[
				"SEGA Classics",
				"NES Classics"
			]
		}

	]


var nl = new Competitor(competitors[0]);
var malf = new Competitor(competitors[1]);
var dan = new Competitor(competitors[2]);

const allCompetitors = [dan,malf,nl];
for (c of allCompetitors) {
    if (c.score == Math.max(dan.score,malf.score,nl.score)) {
        c.standing = 1;
    }else if (c.score == Math.min(dan.score,malf.score,nl.score)) {
        c.standing = 3;
    }else {
        c.standing = 2;
    }
}

