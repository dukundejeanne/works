
      // Form validation code will come here.
      function validate() {
      
         if( document.myForm.profile.value == "" ) {
            alert( "Please provide your profilename!" );
            document.myForm.profile.focus() ;
            return false;
         }
         if( document.myForm.club.value == "" ) {
            alert( "Please provide your club!" );
            document.myForm.club.focus() ;
            return false;
         }
         if( document.myForm.date.value == "" ) {
            alert( "Please provide your date!" );
            document.myForm.date.focus() ;
            return false;
         }
         if( document.myForm.date.value == "" || isNaN( document.myForm.date.value ) ||
            document.myForm.date.value.length != 5 ) {
            
            alert( "Please provide a date in the format MM/DD/YYYY." );
            document.myForm.date.focus() ;
            return false;
         }
         if( document.myForm.league.value == "-1" ) {
            alert( "Please provide your league club!" );
            return false;
         }
         if( document.myForm.summary.value == "-1" ) {
            alert( "Please provide your summary!" );
            return false;
         }
         if( document.myForm.position.value == "-1" ) {
            alert( "Please provide your summary!" );
            return false;
         }
         
         return( true );
      }
   