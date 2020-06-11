const debug = require('@google-cloud/debug-agent').start({ allowExpressions: true });

let debugInitialized;
let functionCompleted;

exports.helloGET = (req, res) => {

     debug.isReady().then(() => {

          debugInitialized = true;
  
          if (functionCompleted) {
              console.log('terminating function');
              res.json(responseJSON);  
          }
  
      }); 
  
      let sum = 0;
           for (let i = 0; i < 10; ++i) {
                     const newLocal = sum += i;
           }
    res.send({ sum });
      
      functionCompleted = true;
      
      if (debugInitialized) {
          console.log('terminating function');
          res.json(responseJSON);
      }
  
  }; 
    
