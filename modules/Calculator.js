//----------импортирует все необходимые классы для создания калькулятора
import Style from './Style.js' ;
import Element from './Element.js' ;
import ArrayMemory from './ArrayMemory.js' ;
import ArrayProgress from './ArrayProgress.js' ;

//----------создаем класс калькулятор
export default class Calculator {

    get TYPES_OF_OPERATION () { return [ '+' , '−' , '×' , '÷' ] ; }
    get SQUARE_ROOT () { return '√' ; }
    get EXPONENTIATION () { return '²' ; }
    get PERCENT () { return '%' ; } 
    get RESULT () { return '=' ; }

    wrapper = new Element ( 'div' , Style.WRAPPER , document.body )

    wrapperTableProgress = new Element ( 'div' , Style.WRAPPER_TABLE_PROGRESS , this.wrapper.element )
    tableProgress = new Element ( 'div' , undefined , this.wrapperTableProgress.element )
    wrapperTableMemory = new Element ( 'div' , Style.WRAPPER_TABLE_MEMORY , this.wrapper.element )
    tableMemory = new Element ( 'div' , undefined , this.wrapperTableMemory.element , this.valueMemory )

    buttonMemorySave = new Element ( 'button' , Style.BUTTON_FUNCTION , this.wrapper.element , 'MS' )
    buttonMemoryRead = new Element ( 'button' , Style.BUTTON_FUNCTION , this.wrapper.element , 'MR' )
    buttonMemoryAdd = new Element ( 'button' , Style.BUTTON_FUNCTION , this.wrapper.element , 'M+' )
    buttonMemoryRemove = new Element ( 'button' , Style.BUTTON_FUNCTION , this.wrapper.element , 'M-' )
    buttonMemoryClear = new Element ( 'button' , Style.BUTTON_FUNCTION , this.wrapper.element , 'MC' )
    buttonMemoryReadClear = new Element ( 'button' , Style.BUTTON_FUNCTION , this.wrapper.element , 'MRC' )
    buttonExponentiation = new Element ( 'button' , Style.BUTTON_OPERATION , this.wrapper.element , 'x²' )
    buttonDivision = new Element ( 'button' , Style.BUTTON_OPERATION , this.wrapper.element , '÷' )
    buttonClear = new Element ( 'button' , Style.BUTTON_REMOVE_CLEAR , this.wrapper.element , 'C' )
    buttonDelete = new Element ( 'button' , Style.BUTTON_REMOVE_CLEAR , this.wrapper.element , 'X' )
    buttonSquareRoot = new Element ( 'button' , Style.BUTTON_OPERATION , this.wrapper.element , '√' )
    buttonMultiplication = new Element ( 'button' , Style.BUTTON_OPERATION , this.wrapper.element , '×' )
    buttonSeven = new Element ( 'button' , Style.BUTTON_NUMBER , this.wrapper.element , '7' )
    buttonEight = new Element ( 'button' , Style.BUTTON_NUMBER , this.wrapper.element , '8' )
    buttonNine = new Element ( 'button' , Style.BUTTON_NUMBER , this.wrapper.element , '9' )
    buttonSubtraction = new Element ( 'button' , Style.BUTTON_OPERATION , this.wrapper.element , '−' )
    buttonFour = new Element ( 'button' , Style.BUTTON_NUMBER , this.wrapper.element , '4' )
    buttonFive = new Element ( 'button' , Style.BUTTON_NUMBER , this.wrapper.element , '5' )
    buttonSix = new Element ( 'button' , Style.BUTTON_NUMBER , this.wrapper.element , '6' )
    buttonAdding = new Element ( 'button' , Style.BUTTON_OPERATION , this.wrapper.element , '+' )
    buttonOne = new Element ( 'button' , Style.BUTTON_NUMBER , this.wrapper.element , '1' )
    buttonTwo = new Element ( 'button' , Style.BUTTON_NUMBER , this.wrapper.element , '2' )
    buttonThree = new Element ( 'button' , Style.BUTTON_NUMBER , this.wrapper.element , '3' )
    buttonResult = new Element ( 'button' , Style.BUTTON_RESULT , this.wrapper.element , '=' )
    buttonDot = new Element ( 'button' , Style.BUTTON_NUMBER , this.wrapper.element , '.' )
    buttonZero = new Element ( 'button' , Style.BUTTON_NUMBER , this.wrapper.element , '0' )
    buttonPercent = new Element ( 'button' , Style.BUTTON_OPERATION , this.wrapper.element , '%' )

    arrayProgress = new ArrayProgress ( '0' , this.tableProgress.element )
    valueMemory = new ArrayMemory ( this.tableMemory.element , 'M:' , '0' )
    arrayResult = [ '0' ]

    //-----------------------------------------------------------------в конструкторе вешаем события на клики по элементам
    constructor () {

        this.wrapper.element.addEventListener ( 'click' , event => {

            switch ( event.target.textContent ) {

                case '0' : this.eventButtonNumber ( '0' ) ;
                break ;
                case '1' : this.eventButtonNumber ( '1' ) ;
                break ;
                case '2' : this.eventButtonNumber ( '2' ) ;
                break ;
                case '3' : this.eventButtonNumber ( '3' ) ;
                break ;
                case '4' : this.eventButtonNumber ( '4' ) ;
                break ;
                case '5' : this.eventButtonNumber ( '5' ) ;
                break ;
                case '6' : this.eventButtonNumber ( '6' ) ;
                break ;
                case '7' : this.eventButtonNumber ( '7' ) ;
                break ;
                case '8' : this.eventButtonNumber ( '8' ) ;
                break ;
                case '9' : this.eventButtonNumber ( '9' ) ;
                break ;        
                case '.' : this.eventButtonDot ( '.' ) ;
                break ;
        
                case '÷' : this.eventButtonOperation ( '÷' ) ;
                break ;
                case '×' : this.eventButtonOperation ( '×' ) ;
                break ;
                case '−' : this.eventButtonOperation ( '−' ) ;
                break ;
                case '+' : this.eventButtonOperation ( '+' ) ;
                break ;
        
                case '%' :this. eventButtonPercent () ;
                break ;        
                case '√' : this.eventButtonSquareRoot () ;
                break ;        
                case 'x²' : this.eventButtonExponentiation () ;
                break ;

                case 'C' : this.eventButtonClear () ;
                break ;        
                case 'X' : this.eventButtonDelete () ;
                break ;
        
                case 'MS' : this.eventMemorySave () ;
                break ;        
                case 'MR' : this.eventMemoryRead () ;
                break ;        
                case 'M+' : this.eventMemoryPlus () ;
                break ;        
                case 'M-' : this.eventMemoryMinus () ;
                break ;        
                case 'MC' : this.eventMemoryClear () ;
                break ;        
                case 'MRC' : this.eventMemoryReadClear () ;
                break ;

                case '=' : this.eventResult () ;
                break ;
        
            }
            
        } ) ;

    }

    //---------------------------------------------------------------------------------------пишем логику для всех кнопок
    eventButtonNumber ( value ) {

        if (    this.arrayProgress.current.includes ( this.PERCENT ) 
                || this.arrayProgress.current.includes ( this.EXPONENTIATION )
                || this.arrayProgress.current === this.RESULT ) {
            return ;
        }
    
        if ( this.arrayProgress.current === '0' && value !== '0' ) {
            this.arrayProgress.current = value ;
            return ;
        }
    
        if ( this.TYPES_OF_OPERATION.includes ( this.arrayProgress.current ) ) {
            this.arrayProgress.rePush ( value ) ;
            return ;
        }
    
        if (    this.arrayProgress.current !== '0' 
                && !this.TYPES_OF_OPERATION.includes ( this.arrayProgress.current ) ) {
            this.arrayProgress.current += value ;
            return ;
        }
    
    }

    eventButtonDot () {

        if ( this.arrayProgress.current === '√' ) {
            this.arrayProgress.current += '0.' ;
            return ;
        }
    
        if ( this.arrayProgress.current.includes ( '√' ) && !this.arrayProgress.current.includes ( '.' ) ) {
            this.arrayProgress.current += '.' ;
            return ;
        }
    
        if (    !this.TYPES_OF_OPERATION.includes ( this.arrayProgress.current )
                && !this.arrayProgress.current.includes ( '.' ) 
                && isFinite ( this.arrayProgress.current ) ) {
            this.arrayProgress.current += '.' ;
            return ;
        }
    
        if ( this.TYPES_OF_OPERATION.includes ( this.arrayProgress.current ) ) {
            this.arrayProgress.rePush ( '0.' ) ;
            return ;
        }
    
    }

    eventButtonOperation ( value ) {

        if (    this.arrayProgress.current === this.RESULT
                || this.arrayProgress.current === '√' ) {
            return ;
        }
    
        if ( !this.TYPES_OF_OPERATION.includes ( this.arrayProgress.current ) ) {

            if (    this.arrayProgress.preCurrent === '÷'
                    && !this.arrayProgress.current.includes ( this.PERCENT )
                    && (    String ( parseFloat ( this.arrayProgress.current ) ) === '0'
                            || String ( Math.sqrt ( parseFloat ( this.arrayProgress.current.slice ( 1 ) ) ) ) === '0'
                            || String ( Math.pow ( parseFloat ( this.arrayProgress.current.slice ( 0 , -1 ) ) ) ) === '0' 
                        ) 
                    ) 
                {
                return ;
            }

            if (    this.arrayProgress.preCurrent === '÷' 
                    && this.arrayProgress.current.includes ( this.PERCENT )
                    && String ( this.arrayProgress.current.slice (  0 , -1 ) === '0') ) {
                return ;
            }

            this.arrayProgress.rePush ( value ) ;
            return ;
        }
    
        if ( this.TYPES_OF_OPERATION.includes ( value ) ) {
            this.arrayProgress.current = value ;
            return ;
        }
    
    }

    eventButtonPercent () {

        if ( !this.TYPES_OF_OPERATION.includes ( this.arrayProgress [ this.arrayProgress.length - 2 ] ) ) {
            return ;
        }
    
        if (    this.arrayProgress.current.includes ( this.PERCENT )
                || this.arrayProgress.current.includes ( this.EXPONENTIATION )
                || this.arrayProgress.current.includes ( this.SQUARE_ROOT ) ) {
            return ;
        }
    
        if ( !this.TYPES_OF_OPERATION.includes ( this.arrayProgress.current ) ) {
            this.arrayProgress.current += '%' ;
            return ;
        }
    
    }

    eventButtonSquareRoot () {

        if ( this.arrayProgress.current === '0' ) {
            this.arrayProgress.current = '√' ;
            return ;
        }
    
        if ( this.TYPES_OF_OPERATION.includes ( this.arrayProgress.current ) ) {
            this.arrayProgress.rePush ( '√' ) ;
            return ;
        }
    
    }

    eventButtonExponentiation () {

        if ( this.arrayProgress.current === this.RESULT ) {
            return ;
        }

        if (    this.TYPES_OF_OPERATION.includes ( this.arrayProgress.current )
                || this.arrayProgress.current.includes ( this.SQUARE_ROOT ) 
                || this.arrayProgress.current.includes ( this.PERCENT ) ) {
                return ;
        }
    
        if ( isFinite ( this.arrayProgress.current ) ) {
            this.arrayProgress.current += '²' ;
            return ;
        }
    
        if ( !this.arrayProgress.current.includes ( this.EXPONENTIATION ) ) {
            this.arrayProgress.current += '²' ;
            return ;
        }
    
    }

    eventButtonClear () {

        if (    this.arrayProgress.length === 1
                && this.arrayProgress [ 0 ] === '0' ) {
                    return ;
        }

        this.arrayProgress.reSplice ( 0 , this.arrayProgress.length , '0' )
    
    }

    eventButtonDelete () {

        if ( this.arrayProgress.length === 1 && this.arrayProgress.current === '0' ) {
            return ;
        }
    
        if (    this.arrayProgress.length === 1 
                && this.arrayProgress.current.length === 1
                && this.arrayProgress.current !== '0' ) {
                    this.arrayProgress.current = '0' ;
            return ;
        }
    
        if ( this.TYPES_OF_OPERATION.includes ( this.arrayProgress.current ) ) {
            this.arrayProgress.rePop () ;
            return ;
        }
        else {
            
            this.arrayProgress.current = this.arrayProgress.current.slice ( 0 , -1 ) ;
    
            if ( this.arrayProgress.current.length === 0 ) {
                this.arrayProgress.rePop () ;
            }
    
            return ;
        } 
    
    }

    eventMemorySave () {

        if (    this.arrayProgress.current === this.RESULT
                || this.arrayProgress.current === this.SQUARE_ROOT ) {
            return ;
        }
    
        if ( !this.TYPES_OF_OPERATION.includes ( this.arrayProgress.current ) ) {
            this.valueMemory.current = this.arrayProgress.current ;
            return ;
        }
    
    }

    eventMemoryRead () {
    
        if ( this.arrayProgress.current === this.valueMemory.current ) {
            return ;
        }
    
        if ( this.TYPES_OF_OPERATION.includes ( this.arrayProgress.current ) ) {
            this.arrayProgress.rePush ( this.valueMemory.current ) ;
            return ;
        }
        else {
            this.arrayProgress.current = this.valueMemory.current ;
            return ;
        }
    
    }

    memoryConversion () {
        if ( this.valueMemory.current.includes ( this.SQUARE_ROOT ) ) {
            this.valueMemory [ this.valueMemory.length - 1 ] = String ( Math.sqrt ( parseFloat ( this.valueMemory.current.slice ( 1 ) ) ) ) ;
        }
        if ( this.valueMemory.current.includes ( this.EXPONENTIATION ) ) {
            this.valueMemory [ this.valueMemory.length - 1 ] = String ( Math.pow ( parseFloat ( this.valueMemory.current.slice ( 0 , -1 ) ) , 2 ) ) ;
        }
    }

    eventMemoryPlus () {

        if (    this.arrayProgress.current === this.RESULT
                || this.arrayProgress.current === this.SQUARE_ROOT ) {
            return ;
        }

        if ( !this.TYPES_OF_OPERATION.includes ( this.arrayProgress.current ) ) {

            this.memoryConversion () ;

            if ( isFinite ( this.arrayProgress.current ) ) {
                this.valueMemory.current = String ( parseFloat ( this.arrayProgress.current ) + parseFloat ( this.valueMemory.current ) ) ;
            }

            if ( this.arrayProgress.current.includes ( this.SQUARE_ROOT ) ) {                
                this.valueMemory.current = String ( Math.sqrt ( parseFloat ( this.arrayProgress.current.slice ( 1 ) ) ) + parseFloat ( this.valueMemory.current ) ) ;
            }

            if ( this.arrayProgress.current.includes ( this.EXPONENTIATION ) ) {
                this.valueMemory.current = String ( Math.pow ( parseFloat ( this.arrayProgress.current.slice ( 0 , -1 ) ) , 2 ) + parseFloat ( this.valueMemory.current ) ) ;
            }

        }

    }

    eventMemoryMinus () {

        if (    this.arrayProgress.current === this.RESULT
                || this.arrayProgress.current === this.SQUARE_ROOT ) {
            return ;
        }

        if ( !this.TYPES_OF_OPERATION.includes ( this.arrayProgress.current ) ) {

            this.memoryConversion () ;

            if ( isFinite ( this.arrayProgress.current ) ) {
                this.valueMemory.current = String ( parseFloat ( this.valueMemory.current ) -  parseFloat ( this.arrayProgress.current ) ) ;
            }

            if ( this.arrayProgress.current.includes ( this.SQUARE_ROOT ) ) {                
                this.valueMemory.current = String ( parseFloat ( this.valueMemory.current ) - Math.sqrt ( parseFloat ( this.arrayProgress.current.slice ( 1 ) ) ) ) ;
            }

            if ( this.arrayProgress.current.includes ( this.EXPONENTIATION ) ) {
                this.valueMemory.current = String ( parseFloat ( this.valueMemory.current ) - Math.pow ( parseFloat ( this.arrayProgress.current.slice ( 0 , -1 ) ) , 2 ) ) ;
            }

        }

    }

    eventMemoryClear () {

        this.valueMemory.current = '0' ;
    
    }

    eventMemoryReadClear () {

        this.eventMemoryRead () ;
        this.eventMemoryClear () ;
    
    }


    //------------------------------------------самое сложаное - парсер для разбора введенных значений и вычисление результата
    //многократно отлавливал ошибки и исправлял. Вроде как основные ошибки исправлены. Условия старался делать как можно проще
    //--------eval не использовал из-за рекомендаций, да и потом это было очень увлекательно написать свой разбор и вычисление
    eventResult () {

        if (    this.arrayProgress.current === this.SQUARE_ROOT ) {
            return ;
        }
        
        if ( this.arrayProgress.preCurrent === this.RESULT ) {
            if ( !this.arrayProgress.current.includes ( this.EXPONENTIATION ) ) {
                return ;
            }
        }

        if (    this.arrayProgress.length === 1 
                && isFinite ( this.arrayProgress.current ) ) {
            return ;
        }

        if (        this.arrayProgress.preCurrent === '÷'
                    && !this.arrayProgress.current.includes ( this.PERCENT )
                    && ( String ( parseFloat ( this.arrayProgress.current ) ) === '0'
                            || String ( Math.sqrt ( parseFloat ( this.arrayProgress.current.slice ( 1 ) ) ) ) === '0'
                            || String ( Math.pow ( parseFloat ( this.arrayProgress.current.slice ( 0 , -1 ) ) ) ) === '0' ) 
                    ) {
                return ;
        }

        if ( this.arrayProgress.preCurrent === '÷' 
                && this.arrayProgress.current.includes ( this.PERCENT )
                && String ( this.arrayProgress.current.slice (  0 , -1 ) ) === '0' ) {
            return ;
        }
    
        if ( this.arrayProgress.current !== this.RESULT ) {   

            if ( this.TYPES_OF_OPERATION.includes ( this.arrayProgress.current ) ) {

                if ( this.arrayProgress.length === 2 
                    || this.arrayProgress.prePreCurrent.includes ( this.RESULT ) ) {
                        return ;
                    }                

                this.arrayProgress.current = this.RESULT ;
            }


            if (    this.TYPES_OF_OPERATION.includes ( this.arrayProgress.current ) ) {
                this.arrayProgress.current = this.RESULT ;
            }

            else {
                this.arrayProgress.rePush ( this.RESULT ) ;            
            }    

        }

        if ( this.arrayProgress.reFilter ( value => value === this.RESULT ).length > 1 )  {
            this.arrayResult.splice ( 0, this.arrayResult.length , ...this.arrayProgress.reSlice ( this.arrayProgress.reLastIndexOf ( this.RESULT , -2 ) + 1 , this.arrayProgress.length - 1 ) ) ;
        }
        else {
            this.arrayResult.splice ( 0, this.arrayResult.length , ...this.arrayProgress.reSlice ( 0 , this.arrayProgress.length - 1  ) ) ;
        }
        
        for ( let key = 0 ; key < this.arrayResult.length ; key += 2 ) {
    
            if ( this.arrayResult [ key ].includes ( this.SQUARE_ROOT ) ) {
                this.arrayResult [ key ] = String ( Math.sqrt ( parseFloat ( this.arrayResult [ key ].slice ( 1 ) ) ) ) ;
                continue ;
            }
    
            if ( this.arrayResult [ key ].includes ( this.EXPONENTIATION ) ) {
                this.arrayResult [ key ] = String ( Math.pow ( parseFloat ( this.arrayResult [ key ].slice ( 0 , -1 ) ) , 2 ) ) ;
                continue ;
            }
    
        }
    
        for ( let key = 1 ; key < this.arrayResult.length ; key += 2 ) {
    
            if ( this.arrayResult [ key ] === '×' ) {
    
                if ( this.arrayResult [ key + 1 ].includes ( this.PERCENT ) ) {
                    this.arrayResult.splice ( key - 1 , 3 , String ( parseFloat ( this.arrayResult [ key - 1 ] ) * ( parseFloat ( this.arrayResult [ key + 1 ].slice ( 0 , -1 ) ) / 100 ) ) ) ;
                    key -= 2 ;
                    continue ;
                }
                else {
                    this.arrayResult.splice ( key - 1 , 3 , String ( parseFloat ( this.arrayResult [ key - 1 ] ) * parseFloat ( this.arrayResult [ key + 1 ] ) ) ) ;
                    key -= 2 ;
                    continue ;
                }
    
            }
    
            if ( this.arrayResult [ key ] === '÷' ) {
    
                if ( this.arrayResult [ key + 1 ].includes ( this.PERCENT ) ) {
                    this.arrayResult.splice ( key - 1 , 3 , String ( parseFloat ( this.arrayResult [ key - 1 ] ) / ( parseFloat ( this.arrayResult [ key + 1 ].slice ( 0 , -1 ) ) / 100 ) ) ) ;
                    key -= 2 ;
                    continue ;
                }
                else {
                    this.arrayResult.splice ( key - 1 , 3 , String ( parseFloat ( this.arrayResult [ key - 1 ] ) / parseFloat ( this.arrayResult [ key + 1 ] ) ) ) ;
                    key -= 2 ;
                    continue ;
                }
    
            }
    
        }
    
        for ( let key = 1 ; key < this.arrayResult.length ; key += 2 ) {
    
            if ( this.arrayResult [ key ] === '+' ) {
    
                if ( this.arrayResult [ key + 1 ].includes ( this.PERCENT ) ) {
                    this.arrayResult.splice ( key - 1 , 3 , String ( parseFloat ( this.arrayResult [ key - 1 ] ) + ( ( parseFloat ( this.arrayResult [ key - 1 ] ) / 100 ) * parseFloat ( this.arrayResult [ key + 1 ] ) ) ) ) ;
                    key -= 2 ;
                    continue ;
                }
                else {
                    this.arrayResult.splice ( key - 1 , 3 , String ( parseFloat ( this.arrayResult [ key - 1 ] ) + parseFloat ( this.arrayResult [ key + 1 ] ) ) ) ;
                    key -= 2 ;
                    continue ;
                }
    
            }
    
            if ( this.arrayResult [ key ] === '−' ) {
    
                if ( this.arrayResult [ key + 1 ].includes ( this.PERCENT ) ) {
                    this.arrayResult.splice ( key - 1 , 3 , String ( parseFloat ( this.arrayResult [ key - 1 ] ) - ( ( parseFloat ( this.arrayResult [ key - 1 ] ) / 100 ) * parseFloat ( this.arrayResult [ key + 1 ] ) ) ) ) ;
                    key -= 2 ;
                    continue ;
                }
                else {
                    this.arrayResult.splice ( key - 1 , 3 , String ( parseFloat ( this.arrayResult [ key - 1 ] ) - parseFloat ( this.arrayResult [ key + 1 ] ) ) ) ;
                    key -= 2 ;
                    continue ;
                }
    
            }
    
        }

        //фиксим проблему округления, отбрасывая значащие цифры > 16, опираясь на стандарт, и округляя дробную часть, удаляя лишние ноли в результате
        //пример - 0.1 + 0.2
        this.arrayResult [ 0 ] = String ( parseFloat ( parseFloat ( this.arrayResult ).toFixed ( 16 ) ) ) ;
    
        this.arrayProgress.rePush ( ...this.arrayResult ) ;
    
    } 

}