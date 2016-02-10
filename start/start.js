var aCar = {
	owner : 'Joe Bloggs',
	address : '3 Walkers Lane',
	addPreviousOwner : function(p_name,p_address) {
               var o = { name : p_name, address : p_address } ;
               if (this.previous_owners.length == 3) {
                     this.previous_owners.shift() ;
               }
               this.previous_owners.push(o) ;
            },
    newOwner : function(p_name,p_address) {
		//var o = { name : p_name, address : p_address };
		this.addPreviousOwner(this.owner, this.address);
		this.owner = p_name ;
        this.address = p_address ;
    },
    hasFeature : function(feature_in) {
            var result = false;
            this.features.forEach(function(feature) {
                   if (feature_in.toUpperCase() == feature.toUpperCase() ) {
                       result = true;
                       }
                    })
            return result ;
            },
    howOld : function() {
               var today = new Date();
               var this_year = today.getFullYear() ;
               return this_year - (this.registration.year + 2000) ;
            },
    /*wasOwnedBy : function(name_in) {
          var result = false ;
          this.previous_owners.forEach(function(owner) {
              var name = owner.name.toUpperCase() ;
              if (name_in.toUpperCase() == name) {
                 result = true ;
             }
          }) ;
          return result ;
          }, */
    wasOwnedBy: function(name){
		var result = false;
		aCar.previous_owners.forEach(function(owner){
			var na = owner.name;
			if (name == na) {
				result = true ;	
			};
		});
	    return result ;

    }, 
    previous_owners : [ { name : 'Pat Smith', address : '1 Main Street'}, 
                        { name : 'Sheila Dwyer', address : '2 High Street'}],
	type : {
		make : 'Toyota',
		model : 'Corolla',
		cc : 1.8
	},
	features : ['Parking assist', 'Alarm', 'Tow-bar'],
	registration : {year : 10, county : 'WD', number : 1058}
} ;

aCar.mileage = 80000 ;
aCar.color = { exterior : 'red', 
               interior : { texture : 'leather', shade : 'cream' }
           };

aCar.addPreviousOwner('Jim Nugent','3 Lower Road') ;
console.log(aCar.previous_owners[aCar.previous_owners.length - 1].name) ;
aCar.addPreviousOwner('Rachel Fleming','4 Upper Road') ;
console.log(aCar.previous_owners[2].name) ;
console.log(aCar.previous_owners[0].name) ;
console.log("-----------------");

aCar.newOwner('Donal Dunne','5 Kings Way');
console.log(aCar.previous_owners[2].name);
console.log(aCar.owner);

console.log(aCar.howOld());
console.log("-----------------");

console.log('Alarm: ' + aCar.hasFeature('alarm') ) ;
console.log("-----------------");

var name = 'Jim Nugent' ;
console.log(name + ' ? ' + aCar.wasOwnedBy(name)) ;
var name = 'Paul Minihan' ;
console.log(name + ' ? ' + aCar.wasOwnedBy(name)) ;