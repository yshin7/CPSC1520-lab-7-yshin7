 async function appInit() {
    const res = await fetch('https://660f5000356b87a55c5127d9.mockapi.io/api/v1/albums')
    const payload = await res.json()
    console.log(payload);
 }

 appInit()