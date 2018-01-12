class person{
    constructor(name="anonymous",age=0){
        this.name=name;
        this.age=age;
    }
    getDescription(){
        console.log(`hello this is ${this.name},my age is ${this.age}`);
    }
}

const me=new person("aman",9);
const other =new person();
other.getDescription();
me.getDescription();