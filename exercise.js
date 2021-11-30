
function Exercise({good = "Great", bad = "Not Great"}){
    
    return(
      <div>
        {}
        <h1>{good}</h1>
        <h1>{bad}</h1>
        {}
        <Bonus />
      </div>
    );
  }
  
  // 1b
  export default Exercise;