const Square = ({colorValue}) => {
    return(
        <section 
        className="square"
        style={{backgroundColor: colorValue}}>
        <p>{colorValue ? colorValue:"Empty Value"}</p>    
        </section>
    );
}

Square.defaultProps = {
    colorValue: "Empty color value"
}

export default Square;