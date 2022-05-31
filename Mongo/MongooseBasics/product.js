const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("Connection open")
    })
    .catch(err => {
        console.log("Oh no error!!!!!!!!")
        console.log(err)
    })
const productSchema = new mongoose.Schema({
    // name: String,
    // price: Number,
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    // categories: {
    //     type: String,
    //     default: ['cycling']
    // }
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        instore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

// productSchema.methods.greet = function () {
//     console.log("Hello... hiii!!!")
//     console.log(`- from ${this.name}`)
// }

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}


const Product = mongoose.model('Product', productSchema);

//const p = new Product({name:'buke bag', price:10})

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain bike' });
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
    // foundProduct.onSale = !foundProduct.onSale
    // foundProduct.save()
    //foundProduct.greet();
}
//findProduct();

Product.fireSale().then(res => console.log(res))

// const bike = new Product({ name: 'Mountain bike', price: 599, color: 'red' })

//const bike = new Product({ name: 'Bike helmet', price: 29.50, categories: ['Cycling', 'Safety', 123] })

// const bike = new Product({ name: 'Cycling Jersey', price: 29.50, categories: ['Cycling'], size: 'XS' })
// bike.save()
//     .then(data => {
//         console.log("It worked!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("Oh no error!")
//         //console.log(err.errors.name.properties.message)
//         console.log(err)
//     })

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -19.99 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log("It worked!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("Oh no error!")
//         console.log(err)
//     })