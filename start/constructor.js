function Car(name_in,address_in,make_in,model_in,cc_in,reg_in) {
        this.owner = name_in ;
        this.address = address_in ;
        this.previous_owners = [ ] ;
        this.type = { make : make_in, model : model_in, cc : cc_in } ;
        var reg_parts = reg_in.split('-') ;
        var year = parseInt(reg_parts[0]) ;
        this.registration = {year : year , 
                             county : reg_parts[1], 
                             number : reg_parts[2] } ;
        this.addPreviousOwner = function(p_name,p_address) {
               var o = { name : p_name, address : p_address } ;
               if (this.previous_owners.length == 3) {
                     this.previous_owners.shift() ;
               }
               this.previous_owners.push(o) ;
            } ;
        this.wasOwnedBy = function(name_in) {
            var result = false ;
            this.previous_owners.forEach(function(owner) {
               var name = owner.name.toUpperCase() ;
               if (name_in.toUpperCase() == name) {
                   result = true ;
               }
            })
            return result ;
            };
        this.howOld = function() {
               var today = new Date() ;
               var this_year = today.getFullYear() ;
               return this_year - (this.registration.year + 2000) ;
            };
        this.newOwner = function(p_name,p_address){
            this.addPreviousOwner(this.owner, this.address);
            this.owner = p_name ;
            this.address = p_address ;
        } 
}

    var car1 = new Car('Joe Bloggs','3 Walkers Lane',
                       'Toyota','Corolla',1.8,'10-WD-1058') ;
    car1.addPreviousOwner( 'Pat Smith', '1 Main Street') ;
    car1.addPreviousOwner( 'Pat Smith', '1 Main Street') ;
    car1.addPreviousOwner( 'Sheila Dwyer', '2 High Street') ;
    console.log('Path Smith ? ' + car1.wasOwnedBy('Pat Smith')) ;

    console.log("****************") ;

    car1.newOwner('Donal Dunne','5 Kings Way') ;
    console.log(car1.previous_owners[2].name) ;
    console.log(car1.owner) ;

    console.log("****************") ;

    console.log('Car age: ' + car1.howOld()) ;
