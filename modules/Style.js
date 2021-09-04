//----------класс стилей для всех элементов

export default class Style {
    
    static WRAPPER = `
        display : grid ;
        grid-template-columns: repeat(4, auto);
        grid-template-rows: repeat(8, auto);

        padding : 20px ;
        margin-top: 20px ;
        background-color : #FAFAFA ;
        border : 1px solid #F5F5F5 ;
        border-radius : 25px ;`

    static WRAPPER_TABLE_PROGRESS = `
        display : grid ;
        grid-template-columns : auto ;
        grid-template-rows : auto ;
        grid-column-start: 1;
        grid-column-end: 5;
        align-items : center ;     
        text-align : right ;

        background-color: #FFFFFF ;
        border : 1px solid #EEEEEE ;
        border-radius : 5px ;
        padding : 10px ;
        width : 200px ;
        word-wrap: break-word;
        word-break : break-all ;
        min-height : 50px;
        font-size : 20px ;
        font-family : 'Noto Sans Light' ;`

    static WRAPPER_TABLE_MEMORY = `
        display : grid ;
        grid-template-columns : auto ;
        grid-template-rows : auto ;
        grid-column-start: 1;
        grid-column-end: 5;
        align-items : center ;     
        text-align : left ;

        background-color: #FFFFFF ;
        border : 1px solid #EEEEEE ;
        border-radius : 5px ;
        padding : 5px ;
        width : 200px ;
        word-wrap: break-word;
        word-break : break-all ;
        min-height : 30px;
        font-size : 13px ;
        font-family : 'Noto Sans Light' ;`

    static BUTTON_NUMBER = `
        width : 50px ;
        height : 50px ;
        background-color : #ECEFF1 ;
        border : 1px solid #FAFAFA ;
        border-radius : 25px ;
        font-size : 25px ;
        font-family: 'Noto Sans Light' ;
        color : #757575 ;`

    static BUTTON_OPERATION = `
        width : 50px ;
        height : 50px ;
        background-color : #E8F5E9 ;
        border : 1px solid #FAFAFA ;
        border-radius : 15px ;
        font-size : 25px ;
        font-family: 'Noto Sans Light' ;
        color : #757575 ;`

    static BUTTON_FUNCTION = `
        width : 50px ;
        height : 50px ;
        background-color : #E3F2FD ;
        border : 1px solid #FAFAFA ;
        border-radius : 10px ;
        font-size : 15px ;
        font-family: 'Noto Sans Light' ;
        color : #757575 ;`

    static BUTTON_REMOVE_CLEAR = `
        width : 50px ;
        height : 50px ;
        background-color : #FFEBEE ;
        border : 1px solid #FAFAFA ;
        border-radius : 10px ;
        font-size : 25px ;
        font-family: 'Noto Sans Light' ;
        color : #757575 ;`

    static BUTTON_RESULT = `
        grid-column-start : 4 ;
        grid-column-end : 5 ;
        grid-row-start : 8 ;
        grid-row-end : 10 ;
        width : 50px ;
        height : 100px ;

        background-color : #FFF9C4 ;
        border : 1px solid #FAFAFA ;
        border-radius : 15px ;
        font-size : 25px ;
        font-family: 'Noto Sans Light' ;
        color : #757575 ;`    

}