const Shimmer=()=>{
    const shimmerCardList=[];

    for(let i=0;i<10;i++){
        shimmerCardList.push(i);
    }

    return (
        <div className="flex flex-wrap gap-4">
            {
                shimmerCardList.map((value,index)=>{
                    return (
                        <div className="w-64 h-72 rounded-lg" key={index} style={{ background: '#f0f0f0' }}>
                        </div>
                    )
                })
            }
        
            
        </div>
    )
}

export default Shimmer;