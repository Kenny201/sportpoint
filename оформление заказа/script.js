$("#tel").mask("+7(999) 999-9999");
$(function(){
  $('#bx-soa-order-form').validate({
   
   rules: {
     date_start:{
      required: true,
      minlength: 2
     },
     time_start:{
      required: true,
      minlength: 2
     },
     name: {
       required: true,
       minlength: 2
     },
     family: {
       required: true,
       minlength: 2
       },
     email: {
         required: true,
         email: true,
         minlength: 2,
         },
     tel: {
       required: true,
       checkMaskPhone: true,
       minlength: 2,
     },
     adress_deliv: {
       required: true,
       minlength: 2,
     },
     street: {
       required: true,
       minlength: 2,
      
     },
     home: {
       required: true,
       checkNumber: true,
       minlength: 2,
     },
     flat: {
       required: true,
       checkNumber: true,
       minlength: 2,
     },
     },
     messages: {
      date_start:{
        required: "Укажите дату доставки",
        date: "Укажите верый диапозон",
        minlength: "Заполните поле",
       },
       time_start:{
        required: "Укажите время доставки",
        max: "Мы работаем до 18:00",
        min: "Мы работаем с 9:00",
        
       },
       name: {
         required: "Введите ваше имя",
         minlength: "Введите ваше имя",
       },
       family:{
         required: "Введите вашу фамилию",
         minlength: "Введите вашу фамилию",
       },
       email: {
         required: "Укажите вашу почту",
         email: "Ввведите корректный EMAIL",
         minlength: "Укажите вашу почту",
       },
       tel: {
         required: "Введите ваш телефон",
         checkMaskPhone:"Номер телефона некорректный",
         minlength: "Укажите ваш телефон",
       } ,
       adress_deliv: {
         required: "Введите адрес доставки",
         minlength: "Введите адрес доставки",
       },
       street: {
         required: "Укажите улицу",
         minlength: "Укажите улицу",
       },
       home: {
         required: "Укажите ваш дом",
         checkNumber: "Укажите корректный номер",
         minlength: "Укажите ваш дом",
       },
       flat: {
         required: "Укажите вашу квартиру",
         checkNumber: "Укажите корректный номер",
         minlength: "Укажите вашу квартиру",
       },
     },
  });
 });

$(document).on('click', '.bx-soa .licence_block label.license', function(){
                    var id = $(this).data('for');
                    $('.bx-soa .licence_block label.error').toggleClass('hidden');
                    if(!$('input[name='+id+']').prop('checked')){
                      $('input[name='+id+']').prop('checked', 'checked');
                      BX.Sale.OrderAjaxComponent.state_licence = 'checked';
                    }
                    else{
                      $('input[name='+id+']').prop('checked', '');
                      BX.Sale.OrderAjaxComponent.state_licence = '';
                    }
});

$(document).ready(function() {
  $('.bx-soa-section-content').on('click','.step_next', function(e) {
      e.preventDefault();
      let current = $(this),
      next = current.parents('.bx-soa-section').next('.bx-soa-section').find('.bx-soa-section-content');  
      let content = current.parents('.bx-soa-section-content');
      if ( next.find('.step_next').length || next.find('.step_prev').length){
          content.addClass('hide');
          content.removeClass('show');
          next.addClass('show');
          next.find('.step_prev').show();
      }else {
        content.addClass('hide');
        content.removeClass('show');
        next.addClass('show');
        next.removeClass('hide');
        next.find('.step_wrap').prepend('<div class="step_next"> <button class="btn btn-default"> Далее </button></div></div>');
        next.find('.step_wrap').prepend('<div class="step_prev"> <button class="btn btn-default"> Назад </button></div></div>');
        if (current.parents('.bx-soa-section').next('.bx-soa-section').attr('id') == 'bx-soa-basket' ){
          
          next.find('.step_prev').show();
          next.find('.step_next').hide();
        }else{
          next.find('.step_prev').show();
          next.find('.step_next').show();
        }
      } 
  });
    $('.bx-soa-section-content').on('click', '.step_prev', function (e) {
        e.preventDefault();
        let prev = $(this).parents('.bx-soa-section').prev('.bx-soa-section').find('.bx-soa-section-content');
        let content = $(this).parents('.bx-soa-section-content');
        if ( prev.find('.step_next').length || prev.find('.step_prev').length){
              prev.find('.step_prev').show();
          }else {
            prev.find('.step_wrap').prepend('<div class="step_next"> <button class="btn btn-default"> Далее </button></div></div>')
            prev.find('.step_wrap').prepend('<div class="step_prev"> <button class="btn btn-default"> Назад </button></div></div>')
        } 
        if ($(this).parents('.bx-soa-section').attr('id') == 'bx-soa-basket'){
              $(this).addClass('hide');
              $(this).removeClass('show');
              prev.addClass('show');
        }else{
              prev.addClass('show');
              prev.removeClass('hide');
              content.addClass('hide');
              content.removeClass('show');
        }
  });
  $('.bx-soa > .bx-soa-section:not("#bx-soa-basket") .bx-soa-section-title-container').click(function(){
    let current = $(this);
    if ( current.parents('.bx-soa-section').find('.step_next').length || current.parents('.bx-soa-section').find('.step_prev').length){
      current.parents('.bx-soa-section').find('.step_prev').show();
    }else {
      current.parents('.bx-soa-section').find('.step_wrap').prepend('<div class="step_next"> <button class="btn btn-default"> Далее </button></div></div>')
      current.parents('.bx-soa-section').find('.step_wrap').prepend('<div class="step_prev"> <button class="btn btn-default"> Назад </button></div></div>')
    }
    current.parents('.bx-soa').find('.bx-soa-section:not("#bx-soa-basket")').find('.bx-soa-section-content').removeClass('show');
    current.parents('.bx-soa').find('.bx-soa-section:not("#bx-soa-basket")').find('.bx-soa-section-content').addClass('hide');
    current.parents('.bx-soa-section').find('.bx-soa-section-content').addClass('show');
    });
});
jQuery.validator.addMethod("checkMaskPhone", function(value, element) {
  return /\+\d{1}\(\d{3}\) \d{3}-\d{4}/g.test(value); 
});	
jQuery.validator.addMethod("checkNumber", function(value, element) {
  return /\d/g.test(value); 
});	

$('#bx-soa-order-form').submit(function(event){
    console.log(!$('#bx-soa-order-form').valid());
    
    if (!$('#bx-soa-order-form').valid()) { 
      
      event.preventDefault();
      if($('.field-value.error').length > 0) {
        $('.field-value.error');
        let next = $('.field-value.error').parents('.bx-soa-section-content');  
        next.addClass('show');
        if ( next.find('.step_next').length || next.find('.step_prev').length){
          next.find('.step_prev').show();
          next.find('.step_next').show();
        }else {
          next.find('.step_wrap').prepend('<div class="step_next"> <button class="btn btn-default"> Далее </button></div></div>')
          next.find('.step_wrap').prepend('<div class="step_prev"> <button class="btn btn-default"> Назад </button></div></div>')
        }
      }
     }
});


