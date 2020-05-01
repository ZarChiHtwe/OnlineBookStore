function count(){
				var book_str=localStorage.getItem("book_store");
				if (book_str) {
					var book_arr=JSON.parse(book_str);
					console.log(book_arr);

					var count=0;
					$.each(book_arr,function(i,v){
						count +=v.qty;
						$("#count").text(count);
					})
				}
			}

