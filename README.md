## Fake Coffee Api

Fake coffee api is a free online REST API that you can use whenever you need Pseudo-real data without running any server-side code. It's awesome for teaching purposes, sample codes, tests, coffee website etc.

## Resources

Our fake coffee api products

- Products https://fake-coffee-brand-api.vercel.app/api

## How to use

You can fetch data by using..

Don't forget to use..

```bash
npm install
```

..after cloning our repository.

### Get all products

```js
fetch("https://fake-coffee-brand-api.vercel.app/api")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Get a single product

```js
fetch("https://fake-coffee-brand-api.vercel.app/api/1")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Limit results

```js
fetch("https://fake-coffee-brand-api.vercel.app/api?limit=2")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Sort results

sort in descending order

```js
fetch("https://fake-coffee-brand-api.vercel.app/api?sort=desc")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

sort in ascending order

```js
fetch("https://fake-coffee-brand-api.vercel.app/api?sort=asc")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Update a product

```js
fetch("https://fake-coffee-brand-api.vercel.app/api/1", {
  method: "PUT",
  body: JSON.stringify({
    name: "Golden sunset",
    description: "A lovely taste of the sun",
    price: 99.99,
    region: "Africa",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));

OR;

fetch("https://fake-coffee-brand-api.vercel.app/api/1", {
  method: "PATCH",
  body: JSON.stringify({
    name: "Golden sunset",
    descriptop: "A lovely taste of the sun",
    price: 99.99,
    region: "Africa",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));

/* will return
{
id:5,
name: 'new name',
description: 'new description'
price: 'new price',
region: 'new region'
}
*/
```

Note: Edited data will not really be updated into the database.

### Add new product

```js
fetch("https://fake-coffee-brand-api.vercel.app/api", {
  method: "POST",
  body: JSON.stringify({
    name: "Heavenly Spice",
    description: "Comforting",
    price: 89.99,
    region: "South Asia",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));

/* will return
{
id:21,
name:'Heavenly Spice',
description:'Comforting',
price:89.99,
region:'South Asia'
}
*/
```

Note: Posted data will not really insert into the database and just return a fake id.

### Delete a product

```js
fetch('https://fake-coffee-brand-api.vercel.app/api/1,{method:"DELETE"}')
  .then((res) => res.json())
  .then((data) => console.log(data));
```

Nothing will delete on the database.

## All available routes

### Products

```js
{

    id:Number,
    name:String,
    description:String,
    price:Number,
    region:String,
    weight:Number,
    flavor_profile:Array,
    grind_option:Array,
    roast_level:Number,
}
```

### GET

- /api (get all products)
- /api/1 (get specific product based on id)
- /api?limit=5 (limit return results )
- /api?sort=desc (asc or desc get products in ascending or descending orders)

### PUT/PATCH

- api/1

### POST

- api

### DELETE

- api/1
