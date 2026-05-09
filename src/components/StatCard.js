function StatCard({title,value}) {
    return(
        <div className="bg-white p-5 rounded-xl shadow-md">
            <h4>{title}</h4>
            <h2 className="text-2xl font-bold">{value}</h2>
        </div>
    );
}