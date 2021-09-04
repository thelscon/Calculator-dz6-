//----------класс для определения элементов на странице

export default class Element {

    constructor ( name , style , nestedIn , textIn ) {    

        this.element = document.createElement ( name ) ;

        if ( style ) {
            this.element.style = style ;
        }
        
        nestedIn.append ( this.element ) ;
        
        if ( Array.isArray ( textIn ) ) {
            this.element.textContent = textIn.join ( ' ' ) ;
        }
        else {
            this.element.textContent = textIn;
        }

    }

}