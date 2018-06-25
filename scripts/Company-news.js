<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script>
    app = new Vue({
		el: '#comments',
		data: {
			name: "",
			message: "",
			comments: [
			{
				img: "../assets/User1.jpg",
				name: "Dana",
				text: "Отличный товар, рекомендую к покупке!",
				date: "01.06.2018"
			},			
			{
				img: "../assets/User5.jpg",
				name: "Ryan",
				text: "Моя жена довольна подарком!",
				date: "03.05.2017"
			},
      {
        img: "../assets/User6.jpg",
        name: "Julia",
        text: "Интересное дополнение к линейке, приятно удивлена качество продукта!",
        date: "28.03.2018"
      }

			]
		},
		methods: {
			addComment() { 
				this.comments.push(
				{
					img: "../assets/User1.jpg",
					name: this.name,
					text: this.message,
					date: (new Date()).toDateString()
				}
				)
			}
		}
})
  </script>

