const Page = async () => {
    const res = await fetch(`${process.env.DOA_HARIAN_API_URI}/api`)

    if(!res.ok) {
        console.log('error fetching data');
        return;
    }

    const data = await res.json();
    console.log(data);
    

    return (
        <div>
            <h1>Doa Page</h1>
        </div>
    )
}

export default Page;