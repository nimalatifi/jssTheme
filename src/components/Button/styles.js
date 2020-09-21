


const styleSheet = {
  btn:props=>( {
    color: 'red',
    padding: props.spacing,
    height:100 ,
    fontStyle:props => props.fontStyle,
    'font-size': '25px',
    margin:20,
    background:'#e0d756',
    '& .green':{
      color: props.labelColor,
      fontWeight: props.fontWeight,
      fontStyle: props.fontStyle
    }
  }),
  
  
};

export default styleSheet;