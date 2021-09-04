//----------класс строки прогресса на дисплее калькулятора

export default class ArrayProgress extends Array {

    //--------------------создаем curent- и pre-поля, благодаря которым проще обращаться к текущему и предыдущим элементам
    //---------------------------особено при изменении текущего элемента значение на дисплее автоматически перерисовывается
    get first () { return this [ 0 ] ; }
    get preCurrent () { return this [ this.length - 2 ] }
    get prePreCurrent () { return this [ this.length - 3 ] }

    constructor ( value , table ) {
        super ( value ) ;

        this.table = table ;        
        this.table.textContent = value ;
        
        Object.defineProperties ( this , {

            'current' : {
                get : function () { return this [ this.length - 1 ] } ,
                set : function ( inputValue ) {
                    this [ this.length - 1 ] = inputValue ;
                    this.table.textContent = this.join ( ' ' ) ;
                }
            }

        } ) ;

    }

    //---------------------------создаем методы для работы с текущим объектом-массивом и автоматическим изменением значения на дисплее
    //------------------------------------т.к. некоторые методы, например splice, работают так, что удаляют поля нашего массива-обекта
    //-----------------------------------------------------пришлось выполнять операции через временный массив, что весьма очень кстати
    //переписан даже push и pop (вдруг в будущем они также будут работать подобно slice, временно как-то перебирая-удаляя текущие поля)
    rePush ( ...insertValue ) {
        const tmp = [ ...this ] ;
        tmp.push ( ...insertValue ) ;

        this.length = 0 ;
        this.push ( ...tmp ) ;
        
        this.table.textContent = this.join ( ' ' ) ;
    }

    reSplice ( ...insertValue ) {
        const tmp = [ ...this ] ;
        tmp.splice ( ...insertValue ) ;

        this.length = 0 ;
        this.push ( ...tmp ) ;

        this.table.textContent = this.join ( ' ' ) ;
    }

    rePop () {
        const tmp = [ ...this ] ;
        tmp.pop () ;

        this.length = 0 ;
        this.push ( ...tmp ) ;

        this.table.textContent = this.join ( ' ' ) ;
    }

    reSlice ( ...insertValue ) {
        const tmp = [ ...this ] ;
        return tmp.slice ( ...insertValue ) ;
    }

    reFilter ( ...insertValue ) {
        const tmp = [ ...this ] ;
        return tmp.filter ( ...insertValue ) ;
    }
    
    reLastIndexOf ( ...insertValue ) {
        const tmp = [ ...this ] ;
        return tmp.lastIndexOf ( ...insertValue ) ;
    }
    
}