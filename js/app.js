var app = angular.module("myModule", [])
				.controller("myController", function($scope){
				$scope.carts=[];
				$scope.products = [
					
					{p_id: "1", p_name: "Apple MacBook", p_image: "images/mac-laptop.png", p_price: 15000},
					{p_id: "2", p_name: "Lenovo Laptop", p_image: "images/Laptop.png", p_price: 25000},
					{p_id: "3", p_name: "MacBook Pro", p_image: "images/Mac-book-pro.png", p_price: 30000},
					{p_id: "4", p_name: "Iphone 12", p_image: "images/iphone.png", p_price: 15000},
					{p_id: "5", p_name: "Vivo 11", p_image: "images/vivo-phone.png", p_price: 10000},
					{p_id: "6", p_name: "Realme 6 Pro", p_image: "images/realme-phone.png", p_price: 17000},
					{p_id: "7", p_name: "Oppo 8", p_image: "images/oppo-phone.png", p_price: 12000},
					{p_id: "8", p_name: "Cherry Mobile Flare S9", p_image: "images/cherry.png", p_price: 7000},
					{p_id: "9", p_name: "LG V30 Samsung", p_image: "images/LG-V30_Maximum_Protection_Ultra_Clear.png", p_price: 12000},
					{p_id: "10", p_name: "Apple Imac", p_image: "images/apple-desktop-computer.png", p_price: 10000},
					{p_id: "11", p_name: "Samsung Desktop", p_image: "images/samsung-computer-monitor.png", p_price: 21500},
					{p_id: "12", p_name: "Sony Desktop", p_image: "images/sony-desktop.png", p_price: 19000},
					{p_id: "13", p_name: "Asus Laptop", p_image: "images/asus-laptop.png", p_price: 10000},
					{p_id: "14", p_name: "Huawei Laptop", p_image: "images/huawei.png", p_price: 25000},
					{p_id: "15", p_name: "Acer Laptop", p_image: "images/acer.png", p_price: 13500},
					{p_id: "16", p_name: "Sony TV 35 inches", p_image: "images/SONY.png", p_price: 22000},
					{p_id: "17", p_name: "LED TV", p_image: "images/tvvv.png", p_price: 20000},
					{p_id: "18", p_name: "Panasonic TV", p_image: "images/panasonic-tv.png", p_price: 15000},
					{p_id: "19", p_name: "Portable Speaker", p_image: "images/portable-speaker.png", p_price: 6800},
					{p_id: "20", p_name: "Bluetooth Speaker", p_image: "images/bluetooth-speaker.png", p_price: 500},
					{p_id: "21", p_name: "Headphones", p_image: "images/Headphones.png", p_price: 400},
					{p_id: "22", p_name: "Wireless Bluetooth Headset", p_image: "images/wireless headset.png", p_price: 1000},
					{p_id: "23", p_name: "Samsung TV", p_image: "images/tv.png", p_price: 35000},
					{p_id: "24", p_name: "Samsung Phone", p_image: "images/samsung.png", p_price: 10000},
				];
				
				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price});
					}	
				}
						
					
				$scope.total = 0;
				
				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
				}
				
				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
				}
	});