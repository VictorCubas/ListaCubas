export interface Alumno {
    id:             number;
    name:           string;
    dateOfBirth:    Date;
    modalidad:      Modalidad;
    description:    string;
    gender:         Gender;
    image:          string;
    price:          string;
    coderBeca:      Boolean
  }
  
  export type Gender = "Male" | "Female";
  export type Modalidad = "Virtual" | "Presencial"