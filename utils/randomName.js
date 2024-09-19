// class Reusable{
//     constructor (){


//     }


     // utils/randomName.js
  export  function generateRandomNameAndEmail() {
    const adjectives = ['Amazing', 'Brilliant', 'Cool', 'Dazzling', 'Epic'];
    const nouns = ['Dragon', 'Phoenix', 'Tiger', 'Lion', 'Unicorn'];
  
    // Get random adjective and noun
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  
    // Combine with a random number to ensure uniqueness
    const randomNumber = Math.floor(Math.random() * 10000); // 4-digit random number
  
    // Generate a unique name
    const uniqueName = `${randomAdjective}${randomNoun}${randomNumber}`;
  
    // Generate a unique email using the generated name and automationtest.com as the domain
    const uniqueEmail = `${uniqueName.toLowerCase()}@automationtest.com`;
  
    return { name: uniqueName, email: uniqueEmail };

   
  }
  
 
  
// }