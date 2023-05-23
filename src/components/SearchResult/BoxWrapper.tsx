
const BoxWrapper =({ children }: {children: React.ReactNode})=>{

    return(
        <div className="bg-white p-6 rounded-lg border border-border-grey shadow-sm">
            {children}
        </div>
    )
}

export default BoxWrapper;