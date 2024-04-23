module.exports = {
    master_screen:{
        padding:10,
        display:'flex',
        flexDirection: 'column',
        backgroundColor:'white',
        // alignItems: 'center',
        width:'100%',
        height:'100%',
    },
    price_container:{
        width:'fit-content',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft: 0,
    },
    price_grm:{
        width: 'fit-content',
        borderRadius:5
    },
    
    price_text:{
        borderWidth:1,
        borderColor:'gray',
        padding:5,
        margin:5,
        width:100
    },
    submit_btn:{
        width: 'fit-content',
        height:'fit-content',
        borderRadius:5,
        margin:0,
        padding:0,
        border: '1px solid black',
        backgroundColor:'orange',
    },
    submit_text:{
        width:'fit-content',
        padding: 5,
        border: '1px solid black',
        textAlign:'center',
    },

    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    
    
    main_screen:{
        padding:10,
        display:'flex',
        flexDirection: 'column',
        backgroundColor:'white',
        alignItems: 'center',
        width:'100%',
    },
    main_screen__display:{
        elevation: 10,
        width:'95%',
        backgroundColor:'white',
        borderRadius:10,
        display:'flex',
        marginBottom:5,
        padding:5,
        border:'2px solid gray',
    },
    main_screen__display_text:{
        fontSize:30,
        textAlign:'right',
    },
    main_screen__keypad:{
        width:'100%',
        height:'60%',
        display:'flex',
    },
    main_screen__keypad_row:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'white',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        padding:7,
    },
    btn_outer:{
        width:65,
        height:65,
        backgroundColor:'white',
        elevation:10,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 20,
        border:'1px solid black'
    },
    bg_button:{
        backgroundColor:'white',
        color:'black',
        fontSize:25,
    },
    btn1_outer:{
        width:65,
        height:65,
        backgroundColor:'#ff5757',
        borderRadius:90,
        elevation:10,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',

    },
    bg1_button:{
        backgroundColor:'#ff5757',
        color:'white',
        fontSize:25,
        fontWeight:'bold',
    },

    btn3_outer:{
        width:180,
        height:65,
        backgroundColor:'grey',
        borderRadius:6,
        elevation:10,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
    },
    bg3_button:{
        backgroundColor:'grey',
        color:'white',
        fontSize:25,
        fontWeight:'bold',
    }
}