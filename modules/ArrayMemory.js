//----------класс строки памяти на дисплее калькулятора

export default class ArrayMemory extends Array {
    constructor ( table , ...value ) {
        super ( ...value ) ;

        this.table = table ;
        this.table.textContent = this.join ( ' ' ) ;

        Object.defineProperty ( this , 'current' , {
            get : function () { return this [ this.length - 1 ] } ,
            set : function ( inputValue ) {
                this [ this.length - 1 ] = inputValue ;
                this.table.textContent = this.join ( ' ' ) ;
            }
        } )
    }

    //----------------------------------------------------метод добавляет элемент и автоматически изменяет его на дисплее
    rePush ( ...insertValue ) {
        const tmp = [ ...this ] ;
        tmp.push ( ...insertValue ) ;

        this.length = 0 ;
        this.push ( ...tmp ) ;
        
        this.table.textContent = this.join ( ' ' ) ;
    }
}