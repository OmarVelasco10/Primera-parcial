class Alumno{
    constructor(){
      this.nombre="";
      this.numControl=0;
      this.sexo=0;
      this.siguiente=null; 
        //tambien debemos agregar las materias y calificaciones
      this.materias=['MAT_1','MAT_2','MAT_3','MAT_4','MAT_5'];
      this.calificaciones=new Array(5);
    }
    mostrar(){
      return "Nombre: " + this.nombre + " Edad: " + 
      this.edad + "Con numero de control: " + this.numControl;
    }
    //aqui deberías calcular el promedio de un alumno
}
  class ListaSimple{
    constructor(){
      this.head=null;
    }
    agregar(nuevo){
      if(this.head===null)
        this.head=nuevo;
      else{
        let temporal=this.head;
        while(temporal.siguiente!=null)
          temporal=temporal.siguiente;
        temporal.siguiente=nuevo;
      }
    }
   
    mostrar(){
      let resultado="";
      let temp=this.head;
      while(temp!=null){
        resultado += temp.mostrar() + " , ";
        temp=temp.siguiente;
      }
      cosole.log(resultado);
      return resultado;
    }
  }
    
  

