


		$(document).ready(function() {

			$('.menu-toggle').on('click' ,function(){
				$('nav').toggleClass('left');
			})

			$('.close').on("click", function(){
				$('nav').toggleClass('right');
				$('.menu-toggle').css("display","block");
				$('.close').css("display","none")
			})

		})



	const filterButtons = document.querySelector("header ul").children;
	const items = document.querySelector('.sections').children;
	const nav = document.querySelector('nav')
	const bar = document.querySelector('.menu-toggle')


	for(let a=0; a<filterButtons.length; a++) {
		filterButtons[a].addEventListener('click',function(){
			for(let b = 0; b<filterButtons.length; b++){
				filterButtons[b].classList.remove('active')
			}
			this.classList.add('active')


			const target = this.getAttribute("data-target")


			for(let c =0;c<items.length; c++){
				items[c].style.left='-3000px';
				if(target==items[c].getAttribute("data-id")){
					items[c].style.left='0';

				}
			}
		})
	}