$('#order-details-booking').on('click','.material-icons',function(){
   $(this).closest('.row').clone().appendTo('#order-details-booking').find("input[type='text']").val("");//use closest to avoid multiple selection and clear input text elements
});