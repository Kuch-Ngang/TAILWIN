// Q 1.  


const calculate_BMI = (weight, height) => {

    const height_in_Meters = height / 100;
    
    const bmi = weight / (height_in_Meters * height_in_Meters);
    
    return bmi;
};


const weight = 70;

const height = 165; 

const bmi = calculate_BMI(weight, height);


console.log("BMI:", bmi);
















const filter_objects_by_name = (array_of_objects, name) => {
    
    
    return array_of_objects.filter(object => object.name === name);

};

const data = [
    { 

      name: "kuch", 
      
      age: 22 

    },

    { 

      name: "Ngang", 
      
      age: 30 
    
    },
    
    { 
        
      name: "Marol", 
      
      age: 35 
    
    },
    
    { 
    
    name: "jane", 
    
    age: 40 

    }

];


const filtered_data = filter_objects_by_name(data, "kuch");

console.log(filtered_data);

