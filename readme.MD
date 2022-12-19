1, Be aware of using {} to pass variable to JSX
2, css is represented by object {}. so that will use "style={{fontSize:20}}", the first { } is just to represent this is a JSX variable.
3, alignItems:'center',     // Horizontial, need both of them to do the trick
   justifyContent:'center', // vertical
   flexDirection:"row"
   need understand how to set up flexbox
4, const RoundedButton=({style={},textStyle={},size=125,...props})=>{}, 
understand how to use default parameter, and the priority of the parameters order.
those default parameters are put into an object{}, not put to () directly!!!!

5, How to pass variable to component.