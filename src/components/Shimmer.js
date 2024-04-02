const Shimmer=()=>{
    const shimmerCardList=[];

    for(let i=0;i<10;i++){
        shimmerCardList.push(i);
    }

    return (
        <div className="shimmer-container">
            {
                shimmerCardList.map((value,index)=>{
                    return (
                        <div className="shimmer-card" key={index} style={{ background: '#f0f0f0' }}>
                        </div>
                    )
                })
            }
        
            
        </div>
    )
}

export default Shimmer;