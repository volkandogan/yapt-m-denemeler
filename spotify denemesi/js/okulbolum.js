$(document).ready(function(){
	$('.cv').on('change',function(){
		var val=this.value;
		if (val) {
			$('.cvText').html('CV Seçildi');
		}else{
			$('.cvText').html('CV Seçilmedi');		
		}
	});
	$('#country').on('change',function(){
		// var val=this.value;
		// if (val=="diger") {
		// 	console.log("burda");
		// }else{
		// 	console.log("burda2");
		// 	$('.digeruni').css('display':'none');			
		// }
		var uni_id=$(this).val();
		if (uni_id=="diger") {
			$('.digeruni').css('display','block');
			$('.digerbolum').css('display','block');
			$("#state").attr("disabled", true).html("<option value=''>BÖLÜM</option>");

		}else{
			$('.digeruni').css('display','none');
			$('.digerbolum').css('display','none');
			$("#state").attr("disabled", false).html("<option value=''>BÖLÜM</option>");
			$.getJSON("bolumler.json", function(sonuc){
				$.each(sonuc, function(index, value){
					var row="";
					if(value.fak_uniId==uni_id)
					{

						row +='<option value="'+value.fak_adi+'">'+value.fak_adi+'</option>';
						$("#state").append(row);

					}


				});
			});

		}
	});
});