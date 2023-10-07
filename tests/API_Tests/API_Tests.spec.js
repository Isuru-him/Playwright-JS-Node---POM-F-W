const { test, expect } = require('@playwright/test');


test('FirstTest - Get single object response data verification', async({request})=>{


    const response =await request.get(`https://api.restful-api.dev/objects/7`);

    const responseBody = JSON.parse(await response.text());

    expect(responseBody.name).toBe("Apple MacBook Pro 16")
    expect(responseBody.id).toBe("7")
    expect(responseBody.data.year).toBe(2019)
    expect(responseBody.data.price).toBe(1849.99)
    expect(responseBody.data['CPU model']).toBe("Intel Core i9")
    expect(responseBody.data['Hard disk size']).toBe("1 TB")

})


test('SecondTest - add object response data verification', async({request})=>{


    const response = await request.post("https://api.restful-api.dev/objects",{
            data:{

                "name": "Isuru",
                "data": {
                   "year": 2019,
                   "price": 1849.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB"
                }
             },
        })

    
    const responseBody = JSON.parse(await response.text());
    
    
    expect(responseBody.name).toBe("Isuru")


})



test('ThirdTest - update object response data verification', async({request})=>{


    const response = await request.post("https://api.restful-api.dev/objects",{
            data:{

                "name": "Isuru",
                "data": {
                   "year": 2019,
                   "price": 1849.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB"
                }
             },
        })

    
    const responseBody = JSON.parse(await response.text());
    
    const id = responseBody.id;

    const updateResponse = await request.put(`https://api.restful-api.dev/objects/${id}`,{
        data:{
            "name": "Harshana",
            "data": {
               "year": 2019,
               "price": 2049.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB",
               "color": "silver"
            }

        },
    })
    
    
    const updateResBody = JSON.parse(await updateResponse.text())

    expect(updateResBody.name).toBe("Harshana")


})


test.only('ForthTest - delete object response data verification', async({request})=>{


    const response = await request.post("https://api.restful-api.dev/objects",{
            data:{

                "name": "Isuru",
                "data": {
                   "year": 2019,
                   "price": 1849.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB"
                }
             },
        })

    
    const responseBody = JSON.parse(await response.text());
    const id = responseBody.id;

    const deleteResponse = await request.delete(`https://api.restful-api.dev/objects/${id}`)
    
    const deleteResBody = JSON.parse(await deleteResponse.text())
    expect(deleteResBody.message).toBe(`Object with id = ${id} has been deleted.`)
})