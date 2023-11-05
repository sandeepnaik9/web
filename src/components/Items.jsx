import React from 'react'

const Items = () => {
  return (
    <div className='h-100 d-flex bg-black '>
        <div className='h-100 d-flex pt-4 ps-2 flex-column row-gap-2 w-25 bg-dark-subtle'>
            <div className='text-center card p-3 m-2 btn btn-primary fbtn' style={{cursor:'pointer'}}>
                SoftDRINKS
            </div>
            <div className='text-center card p-3 m-2 btn btn-primary fbtn' style={{cursor:'pointer'}}>
                WHISKY
            </div>
            <div className='text-center card p-3 m-2 btn btn-primary fbtn' style={{cursor:'pointer'}}>
                BEER
            </div>
            <div className='text-center card p-3 m-2 btn btn-primary fbtn' style={{cursor:'pointer'}}>
                WINE
            </div>
            <div className='text-center card p-3 m-2 btn btn-primary fbtn' style={{cursor:'pointer'}}>
                VODKA
            </div>
            <div className='text-center card p-3 m-2 btn btn-primary fbtn' style={{cursor:'pointer'}}>
                TEQUILA
            </div>
            <div className='text-center card p-3 m-2 btn btn-primary fbtn' style={{cursor:'pointer'}}>
                GIN
            </div>
            <div className='text-center card p-3 m-2 btn btn-primary fbtn' style={{cursor:'pointer'}}>
                RUM
            </div>
            <div className='text-center card p-3 m-2 btn btn-primary fbtn' style={{cursor:'pointer'}}>
                BRANDY
            </div>
            <div className='text-center card p-3 m-2 btn btn-primary fbtn' style={{cursor:'pointer'}}>
                LIQUEUR
            </div>
        </div>
        <div className='text-white pt-3 ps-3'>
            <div className="card">
                <div className="card-body">
                    Jameson
                </div>
            </div>
        </div>
            
    </div>
  )
}

export default Items