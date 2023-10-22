(function () {
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')
    let index = 0;
    const customers = []


    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text) {
        let Img = `./img/${img}.jpg`
        let customer = new Customer(Img, name, text)

        customers.push(customer)
    }

    createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime explicabo soluta velit repellat qui minus, rerum iste nesciunt? A, dicta! Accusamus, tenetur deserunt dignissimos nobis qui vel ipsum nemo.');
    createCustomer(1, 'Sandy', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime explicabo soluta velit repellat qui minus, rerum iste nesciunt? A, dicta! Accusamus, tenetur deserunt dignissimos nobis qui vel ipsum nemo.');
    createCustomer(2, 'Amy', ' Contrary to popular believe , Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime explicabo soluta velit repellat qui minus,  dignissimos .');
    createCustomer(3, 'Tyrell', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime explicabo soluta velit repellat qui minus, rerum iste nesciunt? A,  dignissimos nobis qui vel ipsum nemo.');
    createCustomer(4, 'Wanda', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. velit repellat ? A, dicta! Accusamus, tenetur deserunt dignissimos nobis qui vel ipsum nemo.');

    btn.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if(e.target.parentElement.classList.contains('prevBtn')) {
                if(index === 0) {
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if(e.target.parentElement.classList.contains('nextBtn')) {
                if(index === customers.length) {
                    index = 0
                }
                index++
                
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })

    })
})()