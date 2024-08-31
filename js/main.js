
let Store = [
	{ id: 0, category: 'Chips', type: 'Doritos', stock: true, price: 1, quantity: 0, image: './img/doritos.jpeg', description: 'Includes 1 (10.5oz) bag of Doritos Tortilla Chips, Spicy Nacho flavor'},
	{ id: 1, category: 'Chips', type: 'Ruffles', stock: true, price: 1, quantity: 0, image: './img/ruffles.jpeg', description: 'Includes 1 (10.5oz) bag of Ruffles, Cheddar & Sour Cream flavor' },
	{ id: 2, category: 'Chips', type: 'Lays', stock: true, price: 1, quantity: 0, image: './img/lays.jpeg', description: 'Includes 1 (10.5oz) bag of Lays, Barbecue flavor' },
	{ id: 3, category: 'Chips', type: 'Wise', stock: true, price: 1, quantity: 0, image: './img/wise.jpeg', description: 'Includes 1 (10.5oz) bag of Wise, Hot Cheese Popcorn' },
	{ id: 4, category: 'Candy', type: 'Skittles', stock: true, price: 1, quantity: 0, image: './img/skittles.jpeg', description: 'Skittles, Wild Berry Candy Sharing Size Bag, 41 oz' },
	{ id: 5, category: 'Candy', type: 'Nerds', stock: true, price: 1, quantity: 0, image: './img/nerds.jpeg', description: 'Nerds, Gummy Clusters, 5 oz' },
	{ id: 6, category: 'Candy', type: 'Starburst', stock: true, price: 1, quantity: 0, image: './img/starburst.jpeg', description: 'Starburst, Orginal Sharing Size Bag, 41 oz' },
	{ id: 7, category: 'Candy', type: 'Now and Laters', stock: true, price: 1, quantity: 0, image: './img/now-and-laters.jpeg', description: 'Now-and-Later, Smash Berry 1 16ct bar' } ,
	{ id: 8, category: 'Drinks', type: 'Fiji Water', stock: true, price: 1, quantity: 0, image: './img/fiji-water.jpeg', description: 'Fiji Natural Artesian Water, 11.15 Fl. Oz., 1 Count' },
	{ id: 9, category: 'Drinks', type: 'Apple Juice', stock: true, price: 1, quantity: 0, image: './img/apple-juice.jpeg', description: 'Great Value 100% Apple Juice, 96 fl oz' },
	{ id: 10, category: 'Drinks', type: 'Vanilla Coke', stock: true, price: 1, quantity: 0, image: './img/vanilla-coke.jpeg', description: 'Coca-Cola Vanilla Soda Pop, 20 fl oz Bottle' },
	{ id: 11, category: 'Drinks', type: 'Fruitopia', stock: true, price: 10, quantity: 0, image: './img/fruitopia.jpeg', description: 'Fruitopia Strawberry Passion Awareness Juice, 1 L/35 fl. oz. Bottle (Imported from Canada)' }

];

const getMoney = () => {

		let table = document.getElementById('STORE');
		let table2 = document.querySelectorAll('table');
		let total = document.querySelector('.totalPrice');
		let clearCart = document.getElementById('clear');
		let bulb = document.querySelector('.fa-solid, fa-lightbulb');
		let x = document.querySelector('.fa-x');
		let desc = document.querySelector('.description');
		let Items = document.getElementById('store');
		let optGroup = document.getElementById('items');
				

		for(let store of Store){
	

		let tBody = document.createElement('tbody');	 
		let th = document.createElement('th');	 
		let tr = document.createElement('tr');	
		let td1 = document.createElement('td');
		let td2 = document.createElement('td');
		let addBtn = document.createElement('i');
		let subBtn = document.createElement('i');
		let storeItems = document.createElement('img');
		let outOfStock = document.createElement('div');
	
		tr.classList.add('store');
		td1.classList.add('quantity');
		td2.classList.add('price');
		addBtn.classList.add('fa-solid' , 'fa-plus');
		subBtn.classList.add('fa-solid' , 'fa-minus');
		bulb.classList.add('fa-lightBulb')
		storeItems.classList.add('items');
	
		th.setAttribute('scope' , 'row');
		addBtn.setAttribute('type', 'button');
		addBtn.setAttribute('value', 'Add');
		subBtn.setAttribute('type', 'button');
		subBtn.setAttribute('value', 'Sub');
		storeItems.setAttribute('src', store.image);
		storeItems.setAttribute('alt' , 'Item NOT available for purchase.');
		td1.textContent = store.quantity;
		td2.textContent =  `$${store.price}.00`;
		th.textContent = store.type;
		total.textContent = `$0.00`;
		
		tr.appendChild(storeItems);
		tr.appendChild(th);
		tr.appendChild(td1);
		tr.appendChild(addBtn);
		tr.appendChild(subBtn);
		th.appendChild(outOfStock);
		tr.appendChild(td2);
		tBody.appendChild(tr);
		table.appendChild(tBody);	
					
		storeItems.addEventListener('mouseover' , (e) => {
			// console.log(desc)
			if(desc.style.display = 'none'){
			desc.style.display = 'block'
			desc.textContent = store.description
			}else {
				desc.style.display = 'none';
			}
		})

		storeItems.addEventListener('mouseout' , (e) => {
			desc.style.display = 'none'
		})

		bulb.addEventListener('click', (e)  => {
			
			addBtn.classList.toggle('colorMode');
			subBtn.classList.toggle('colorMode');
			
		})

		addBtn.addEventListener('click', (e) => {

			let daStore = [...Store];
			let quantity = daStore.reduce((acc , curr) => acc + curr.quantity * curr.price, 0);
		// console.log(store.quantity)
			if(store.quantity === 10){
				td1.textContent = 10;
				store.stock = false;
				storeItems.style.opacity = '.1';
				total.textContent = `$${quantity}.00`;
				outOfStock.textContent = 'Out of Stock';
				outOfStock.style.color = 'red';
				// console.log(store.stock);
				// console.log(store.quantity);
				
			}else if(store.type === 'Fruitopia'){

				td1.textContent = store.quantity += 1;
				total.textContent = `$${quantity + store.price}.00`;
				
			} else if(store.quantity >= 0) {

				td1.textContent = store.quantity += 1;
				total.textContent = `$${quantity + store.price}.00`;

			}

		})

		subBtn.addEventListener('click', (e) => {
			// console.log(store.quantity)
			let daStore = [...Store];
			let quantity = daStore.reduce((acc , curr) => acc + curr.quantity * curr.price, 0);
			
			if(store.quantity <= 0){

				td1.textContent = 0;
				total.textContent = `$${quantity}.00`;
			
			} else if(store.quantity > 0){
				outOfStock.textContent = '';
				storeItems.style.opacity = '1';
				td1.textContent = store.quantity -= 1 ;
				total.textContent = `$${quantity - store.price}.00`;
			}else {
				td1.textContent = store.quantity -= 1;
				total.textContent = `$${quantity}.00`;
			}
		})

		clearCart.addEventListener('click', (e) => {

			let daStore = [...Store];
			let quantity = daStore.reduce((acc, curr) => acc + curr.quantity, 0);

			td1.textContent = quantity - quantity;
			store.quantity = quantity - quantity;
			total.textContent = `$${quantity - quantity}.00`;
			outOfStock.textContent = '';
			storeItems.style.opacity = '1';
			// console.log(store.quantity);
		})
	}
}
getMoney();